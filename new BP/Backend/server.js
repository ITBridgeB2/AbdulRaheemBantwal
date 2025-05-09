const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // change to your MySQL username
    password: 'root', // change to your MySQL password
    database: 'blog_platform'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Create tables if they don't exist
const createTables = () => {
    const usersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    
    const postsTable = `
        CREATE TABLE IF NOT EXISTS blog_posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            author_id INT NOT NULL,
            category VARCHAR(50) NOT NULL,
            image_path VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
        )`;
    
    db.query(usersTable, (err) => {
        if (err) console.error('Error creating users table:', err);
    });
    
    db.query(postsTable, (err) => {
        if (err) console.error('Error creating blog_posts table:', err);
    });
};

createTables();

// Helper function for database queries
const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

// Routes

// User registration
app.post('/api/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        
        // Check if user exists
        const existing = await query(
            'SELECT * FROM users WHERE username = ? OR email = ?', 
            [username, email]
        );
        
        if (existing.length > 0) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }
        
        // Create user
        const result = await query(
            'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
            [username, password, email]
        );
        
        res.status(201).json({ 
            message: 'User registered successfully',
            userId: result.insertId 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User login
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const users = await query(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password]
        );
        
        if (users.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const user = users[0];
        res.json({ 
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all blog posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await query(`
            SELECT bp.*, u.username as author_name 
            FROM blog_posts bp
            JOIN users u ON bp.author_id = u.id
            ORDER BY bp.created_at DESC
        `);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get posts by category
app.get('/api/posts/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const posts = await query(`
            SELECT bp.*, u.username as author_name 
            FROM blog_posts bp
            JOIN users u ON bp.author_id = u.id
            WHERE bp.category = ?
            ORDER BY bp.created_at DESC
        `, [category]);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get posts by author
app.get('/api/posts/author/:author_id', async (req, res) => {
    try {
        const { author_id } = req.params;
        const posts = await query(`
            SELECT bp.*, u.username as author_name 
            FROM blog_posts bp
            JOIN users u ON bp.author_id = u.id
            WHERE bp.author_id = ?
            ORDER BY bp.created_at DESC
        `, [author_id]);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new blog post
app.post('/api/posts', async (req, res) => {
    try {
        const { title, content, author_id, category, image_path } = req.body;
        
        const result = await query(
            'INSERT INTO blog_posts (title, content, author_id, category, image_path) VALUES (?, ?, ?, ?, ?)',
            [title, content, author_id, category, image_path || null]
        );
        
        res.status(201).json({ 
            message: 'Post created successfully',
            postId: result.insertId 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update blog post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, category, image_path } = req.body;
        
        const result = await query(
            'UPDATE blog_posts SET title = ?, content = ?, category = ?, image_path = ? WHERE id = ?',
            [title, content, category, image_path || null, id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json({ message: 'Post updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete blog post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await query(
            'DELETE FROM blog_posts WHERE id = ?',
            [id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});