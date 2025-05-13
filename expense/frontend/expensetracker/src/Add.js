// src/components/Add.js
import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      category: '',
      date: '',
      redirect: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, date } = this.state;

    // Validate inputs
    if (!amount || !category || !date) {
      alert("All fields are required");
      return;
    }

    axios.post('http://localhost:3000/expenses', { amount, category, date })
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.error("Error adding expense:", err);
        alert("Failed to add expense");
      });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div style={{ padding: "20px" }}>
        <h2>Add New Expense</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount: </label>
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              step="0.01"
              required
            />
          </div>
          <div>
            <label>Category: </label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Date: </label>
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}
