const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'root',
  database: 'todolist',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Geting  all tasks( to view all the )
app.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching tasks');
    } else {
      const tasks = results.map((task) => ({
        ...task,
        completed: task.completed === 1, // Convert 1 to true, 0 to false
      }));
      res.json(tasks);
    }
  });
});

// inorde to a Add a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const query = 'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)';
  db.query(query, [title, description, false], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error adding task');
    } else {
      res.json({ id: result.insertId, title, description, completed: false });
    }
  });
});




// Update  task ->                 title, description, completed
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
  
    const query = 'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?';
    db.query(query, [title, description, completed, id], (err) => {
      if (err) {
        console.error('Error updating task:', err);
        res.status(500).send('Error updating task');
      } else {
        res.send('Task updated successfully');
      }
    });
  });




// Delete a task based on thier  id 
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).send('Error deleting task');
    } else {
      res.send('Task deleted successfully');
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});