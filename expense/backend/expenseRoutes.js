    const express = require('express');
    const router = express.Router();
    const db = require('./db');

    // Create Expense
    router.post('/', (req, res) => {
    const { amount, category, date } = req.body;
    if (!amount || !category || !date) return res.status(400).json({ error: "All fields required" });

    db.query(
        "INSERT INTO expenses (amount, category, date) VALUES (?, ?, ?)",
        [amount, category, date],
        (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        res.status(201).json({ id: result.insertId, amount, category, date });
        }
    );
    });

    // Get All Expenses
    router.get('/', (req, res) => {
    db.query("SELECT * FROM expenses ORDER BY created_at DESC", (err, results) => {
        if (err) return res.status(500).json({ error: "Failed to fetch expenses" });
        res.json(results);
    });
    });

    // // ✅ Total Expenses — moved BEFORE :id route
    // router.get('/total', (req, res) => {
    //   db.query("SELECT SUM(amount) AS total FROM expenses", (err, results) => {
    //     if (err) return res.status(500).json({ error: "Failed to calculate total" });
    //     res.json({ total: results[0].total || 0 });
    //   });
    // });


    router.get('/total', (req, res) => {
    db.query("SELECT SUM(amount) AS total FROM expenses", (err, results) => {
        if (err) {
        console.error("Error in /total route:", err);
        return res.status(500).json({ error: "Failed to calculate total" });
        }
        console.log("Total expenses from DB:", results[0].total); // 👈 log this
        res.json({ total: results[0].total || 0 });
    });
    });

    



    // Get One Expense
    router.get('/:id', (req, res) => {
    db.query("SELECT * FROM expenses WHERE id = ?", [req.params.id], (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ error: "Expense not found" });
        res.json(results[0]);
    });
    });

    // Update Expense
    router.put('/:id', (req, res) => {
    const { amount, category, date } = req.body;
    db.query(
        "UPDATE expenses SET amount = ?, category = ?, date = ? WHERE id = ?",
        [amount, category, date, req.params.id],
        (err) => {
        if (err) return res.status(500).json({ error: "Failed to update expense" });
        res.json({ id: req.params.id, amount, category, date });
        }
    );
    });

    // Delete Expense
    router.delete('/:id', (req, res) => {
    db.query("DELETE FROM expenses WHERE id = ?", [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: "Failed to delete expense" });
        res.sendStatus(204);
    });
    });

    module.exports = router;


    