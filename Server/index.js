const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopify'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

    // Login -> check sir code for other example 
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?"


    db.query(sql, [username, password], (err, result) => {
        if (err) return res.status(500).send({ message: "Server error" })
        if (result.length > 0) {
            res.send({ success: true });
        } else {
            res.send({ success: false, message: "Invalid credentials" });
        }
    });
});

//  Geting   the Products

// app.get('/products', (req, res) => {
//     const sql = "SELECT * FROM products";
//     db.query(sql, (err, result) => {
//         if (err) return res.status(500).send({ message: "Server error" });
//         res.send(result);
//     });
// });

// Dummy Payment 
app.post('/payment', (req, res) => {
    res.send({ success: true, message: "Payment processed successfully" });
});

// Sever number 
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
