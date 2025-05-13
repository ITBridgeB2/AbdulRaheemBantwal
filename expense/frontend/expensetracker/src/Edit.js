// src/components/Edit.js
import React, { Component } from 'react';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';

// HOC to allow useParams in class component
function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      category: '',
      date: '',
      redirect: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;

    axios.get(`http://localhost:3000/expenses/${id}`)
      .then(res => {
        const { amount, category, date } = res.data;
        this.setState({ amount, category, date });
      })
      .catch(err => {
        console.error("Error fetching expense:", err);
        alert("Expense not found");
      });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.params;
    const { amount, category, date } = this.state;

    axios.put(`http://localhost:3000/expenses/${id}`, { amount, category, date })
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch(err => {
        console.error("Error updating expense:", err);
        alert("Failed to update expense");
      });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div style={{ padding: "20px" }}>
        <h2>Edit Expense</h2>
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
          <button type="submit">Update Expense</button>
        </form>
      </div>
    );
  }
}

export default withParams(Edit);
