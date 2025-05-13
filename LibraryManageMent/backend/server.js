const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

// Create Book
app.post('/books', (req, res) => {
  const { title, author, genre, publication_year } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'Title and author are required' });

  db.query('INSERT INTO books (title, author, genre, publication_year) VALUES (?, ?, ?, ?)', 
    [title, author, genre, publication_year], 
    (err, result) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      res.status(201).json({ id: result.insertId, title, author, genre, publication_year });
    });
});


// app.post('/add-book', (req, res) => {
//   const { title, author, genre, description } = req.body;
//   const sql = 'INSERT INTO books (title, author, genre, description) VALUES (?, ?, ?, ?)';
//   db.query(sql, [title, author, genre, description], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ success: true, id: result.insertId });
//   });
// });


// Get all books
app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(result);
  });
});

// Get all categories (genres)
app.get('/categories', (req, res) => {
  db.query('SELECT DISTINCT genre FROM books', (err, result) => {
    if (err) {
      console.error(err);  // Log the error in case there is a DB issue
      return res.status(500).json({ error: 'DB error' });
    }
    console.log(result);  // Log the result to ensure categories are fetched
    res.json(result);
  });
});

// Get books by genre
app.get('/books/category/:genre', (req, res) => {
  db.query('SELECT * FROM books WHERE genre = ?', [req.params.genre], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' });
    res.json(result);
  });
});

// Get one book
app.get('/books/:id', (req, res) => {
  db.query('SELECT * FROM books WHERE id = ?', [req.params.id], (err, result) => {
    if (err || result.length === 0) return res.status(404).json({ error: 'Book not found' });
    res.json(result[0]);
  });
});

// Update book
app.put('/books/:id', (req, res) => {
  const { title, author, genre, publication_year } = req.body;
  db.query('UPDATE books SET title=?, author=?, genre=?, publication_year=? WHERE id=?', 
    [title, author, genre, publication_year, req.params.id], 
    (err, result) => {
      if (err || result.affectedRows === 0) return res.status(404).json({ error: 'Book not found' });
      res.json({ id: req.params.id, title, author, genre, publication_year });
    });
});

// Delete book
app.delete('/books/:id', (req, res) => {
  db.query('DELETE FROM books WHERE id=?', [req.params.id], (err, result) => {
    if (err || result.affectedRows === 0) return res.status(404).json({ error: 'Book not found' });
    res.status(204).send();
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
