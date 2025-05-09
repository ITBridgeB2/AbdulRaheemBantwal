// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');



// const Filter = require('bad-words') // Import the bad-words package



// const filter = new Filter(); // Create a filter instance

// const app = express();
// app.use(cors());
// app.use(express.json());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'simple_blog'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     process.exit(1);
//   }
//   console.log('✅ Connected to MySQL database');
// });

// // Function to filter bad words


// function filterBadContent(text) {
//   return filter.clean(text); // Clean the text to remove bad words
// }



// // Register Route
// app.post('/register', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//   connection.execute(query, [username, password], (err) => {
//     if (err) return res.status(500).json({ error: 'Registration failed' });
//     res.status(201).json({ message: 'User registered' });
//   });
// });

// // Login Route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
//   connection.execute(query, [username, password], (err, results) => {
//     if (err) return res.status(500).json({ message: 'Login failed' });
//     if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
//     res.json({ message: 'Login successful', userId: results[0].id });
//   });
// });

// // CRUD for Blogs

// // Create Blog
// app.post('/post-blog', (req, res) => {
//   const { userId, title, content } = req.body;
//   if (!title || !content) {
//     return res.status(400).json({ message: 'Title and content are required' });
//   }

//   // Filter bad words in title and content
//   const filteredTitle = filterBadContent(title);
//   const filteredContent = filterBadContent(content);

//   const query = 'INSERT INTO blogs (user_id, title, content) VALUES (?, ?, ?)';
//   connection.execute(query, [userId, filteredTitle, filteredContent], (err) => {
//     if (err) return res.status(500).json({ message: 'Failed to post blog' });
//     res.status(201).json({ message: 'Blog posted' });
//   });
// });

// // Get All Blogs (Public access)
// app.get('/blogs', (req, res) => {
//   const query = 'SELECT * FROM blogs';
//   connection.execute(query, (err, results) => {
//     if (err) return res.status(500).json({ message: 'Error fetching blogs' });
//     res.json({ blogs: results });
//   });
// });

// // Get Blogs by User ID
// app.get('/blogs/:userId', (req, res) => {
//   const userId = req.params.userId;
//   const query = 'SELECT * FROM blogs WHERE user_id = ?';
//   connection.execute(query, [userId], (err, results) => {
//     if (err) return res.status(500).json({ message: 'Error fetching blogs' });
//     res.json({ blogs: results });
//   });
// });

// // Update Blog
// // app.put('/update-blog/:id', (req, res) => {
// //   const blogId = req.params.id;
// //   const { title, content } = req.body;

// //   // Filter bad words in title and content
// //   const filteredTitle = filterBadContent(title);
// //   const filteredContent = filterBadContent(content);

// //   // Update the blog with filtered content
// //   const query = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
// //   connection.execute(query, [filteredTitle, filteredContent, blogId], (err) => {
// //     if (err) return res.status(500).json({ message: 'Failed to update blog' });
// //     res.json({ message: 'Blog updated successfully' });
// //   });
// // });

// // PUT /update-blog/:id

// app.put('/update-blog/:id', (req, res) => {
//     const blogId = req.params.id;
//     const { title, content, userId } = req.body;
  
//     // ✅ Check if the blog belongs to the user
//     const checkQuery = 'SELECT user_id FROM blogs WHERE id = ?';
//     connection.execute(checkQuery, [blogId], (err, results) => {
//       if (err || results.length === 0) return res.status(404).json({ message: 'Blog not found' });
  
//       if (results[0].user_id !== userId) {
//         return res.status(403).json({ message: 'You are not authorized to update this blog' });
//       }
  
//       const updateQuery = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
//       connection.execute(updateQuery, [title, content, blogId], (err) => {
//         if (err) return res.status(500).json({ message: 'Failed to update blog' });
//         res.json({ message: 'Blog updated successfully' });
//       });
//     });
//   });
  
// // Delete Blog
// app.delete('/delete-blog/:id', (req, res) => {
//   const blogId = req.params.id;
//   const query = 'DELETE FROM blogs WHERE id = ?';
//   connection.execute(query, [blogId], (err) => {
//     if (err) return res.status(500).json({ message: 'Failed to delete blog' });
//     res.json({ message: 'Blog deleted' });
//   });
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });




// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const Filter = require('bad-words'); // Import the bad-words package

// const filter = new Filter(); // Create a filter instance

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Database Connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'simple_blog'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//     process.exit(1);
//   }
//   console.log('✅ Connected to MySQL database');
// });

// // Function to filter bad words
// function filterBadContent(text) {
//   return filter.clean(text); // Clean the text to remove bad words
// }

// // Register Route
// app.post('/register', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//   connection.execute(query, [username, password], (err) => {
//     if (err) return res.status(500).json({ error: 'Registration failed' });
//     res.status(201).json({ message: 'User registered' });
//   });
// });

// // Login Route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
//   connection.execute(query, [username, password], (err, results) => {
//     if (err) return res.status(500).json({ message: 'Login failed' });
//     if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
//     res.json({ message: 'Login successful', userId: results[0].id });
//   });
// });

// // Blog Routes

// // Create Blog
// app.post('/post-blog', (req, res) => {
//   const { userId, title, content } = req.body;
//   if (!title || !content) {
//     return res.status(400).json({ message: 'Title and content are required' });
//   }

//   // Filter bad words in title and content
//   const filteredTitle = filterBadContent(title);
//   const filteredContent = filterBadContent(content);

//   const query = 'INSERT INTO blogs (user_id, title, content) VALUES (?, ?, ?)';
//   connection.execute(query, [userId, filteredTitle, filteredContent], (err) => {
//     if (err) return res.status(500).json({ message: 'Failed to post blog' });
//     res.status(201).json({ message: 'Blog posted' });
//   });
// });

// // Get All Blogs (Public Access)
// app.get('/blogs', (req, res) => {
//   const query = 'SELECT * FROM blogs';
//   connection.execute(query, (err, results) => {
//     if (err) return res.status(500).json({ message: 'Error fetching blogs' });
//     res.json({ blogs: results });
//   });
// });

// // Get Blogs by User ID
// app.get('/blogs/:userId', (req, res) => {
//   const userId = req.params.userId;
//   const query = 'SELECT * FROM blogs WHERE user_id = ?';
//   connection.execute(query, [userId], (err, results) => {
//     if (err) return res.status(500).json({ message: 'Error fetching blogs' });
//     res.json({ blogs: results });
//   });
// });

// // Update Blog
// app.put('/update-blog/:id', (req, res) => {
//   const blogId = req.params.id;
//   const { title, content, userId } = req.body;

//   // Filter bad words
//   const filteredTitle = filterBadContent(title);
//   const filteredContent = filterBadContent(content);

//   // Check if the blog belongs to the user
//   const checkQuery = 'SELECT user_id FROM blogs WHERE id = ?';
//   connection.execute(checkQuery, [blogId], (err, results) => {
//     if (err || results.length === 0) return res.status(404).json({ message: 'Blog not found' });

//     if (results[0].user_id !== userId) {
//       return res.status(403).json({ message: 'You are not authorized to update this blog' });
//     }

//     const updateQuery = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
//     connection.execute(updateQuery, [filteredTitle, filteredContent, blogId], (err) => {
//       if (err) return res.status(500).json({ message: 'Failed to update blog' });
//       res.json({ message: 'Blog updated successfully' });
//     });
//   });
// });

// // Delete Blog
// app.delete('/delete-blog/:id', (req, res) => {
//   const blogId = req.params.id;
//   const query = 'DELETE FROM blogs WHERE id = ?';
//   connection.execute(query, [blogId], (err) => {
//     if (err) return res.status(500).json({ message: 'Failed to delete blog' });
//     res.json({ message: 'Blog deleted' });
//   });
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });























const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const Filter = require('bad-words'); // Import the bad-words package

const filter = new Filter(); // Create a filter instance

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'simple_blog'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database');
});

// Function to filter bad words
function filterBadContent(text) {
  return filter.clean(text); // Clean the text to remove bad words
}

// Register Route
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.execute(query, [username, password], (err) => {
    if (err) return res.status(500).json({ error: 'Registration failed' });
    res.status(201).json({ message: 'User registered' });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.execute(query, [username, password], (err, results) => {
    if (err) return res.status(500).json({ message: 'Login failed' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', userId: results[0].id });
  });
});

// Blog Routes

// Create Blog
app.post('/post-blog', (req, res) => {
  const { userId, title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  // Filter bad words in title and content
  const filteredTitle = filterBadContent(title);
  const filteredContent = filterBadContent(content);

  const query = 'INSERT INTO blogs (user_id, title, content) VALUES (?, ?, ?)';
  connection.execute(query, [userId, filteredTitle, filteredContent], (err) => {
    if (err) return res.status(500).json({ message: 'Failed to post blog' });
    res.status(201).json({ message: 'Blog posted' });
  });
});

// Get All Blogs (Public Access)
app.get('/blogs', (req, res) => {
  const query = 'SELECT * FROM blogs';
  connection.execute(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching blogs' });
    res.json({ blogs: results });
  });
});

// Get Blogs by User ID
app.get('/blogs/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = 'SELECT * FROM blogs WHERE user_id = ?';
  connection.execute(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching blogs' });
    res.json({ blogs: results });
  });
});

// Update Blog
app.put('/update-blog/:id', (req, res) => {
  const blogId = req.params.id;
  const { title, content, userId } = req.body;

  // Filter bad words
  const filteredTitle = filterBadContent(title);
  const filteredContent = filterBadContent(content);

  // Check if the blog belongs to the user
  const checkQuery = 'SELECT user_id FROM blogs WHERE id = ?';
  connection.execute(checkQuery, [blogId], (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ message: 'Blog not found' });

    if (results[0].user_id !== userId) {
      return res.status(403).json({ message: 'You are not authorized to update this blog' });
    }

    const updateQuery = 'UPDATE blogs SET title = ?, content = ? WHERE id = ?';
    connection.execute(updateQuery, [filteredTitle, filteredContent, blogId], (err) => {
      if (err) return res.status(500).json({ message: 'Failed to update blog' });
      res.json({ message: 'Blog updated successfully' });
    });
  });
});

// Delete Blog
app.delete('/delete-blog/:id', (req, res) => {
  const blogId = req.params.id;
  const query = 'DELETE FROM blogs WHERE id = ?';
  connection.execute(query, [blogId], (err) => {
    if (err) return res.status(500).json({ message: 'Failed to delete blog' });
    res.json({ message: 'Blog deleted' });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
