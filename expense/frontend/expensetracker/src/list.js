// // List.js
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      total: 0
    };
  }

  componentDidMount() {
    this.fetchExpenses();
    this.fetchTotal();
  }

  fetchExpenses = () => {
    // Change the URL to point to the backend on port 3000
    


    axios.get('http://localhost:3000/expenses')
    
      .then(res => {
        this.setState({ expenses: res.data }
            
        );
      })
      .catch(err => {
        console.error("Error fetching expenses:", err);
      });
  }

  fetchTotal = () => {
    // Calculate total from expenses array
    axios.get('http://localhost:3000/expenses')
      .then(res => {
        const total = res.data.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        this.setState({ total });
      })
      .catch(err => {
        console.error("Error fetching total:", err);
      });
  }

  handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) return;

    // Change the URL to point to the backend on port 3000 for delete
    axios.delete(`http://localhost:3000/expenses/${id}`)
      .then(() => {
        this.fetchExpenses();
        this.fetchTotal();
      })
      .catch(err => {
        console.error("Error deleting expense:", err);
        alert("Failed to delete expense");
      });
  }

  render() {
    return (
      <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
        <h2 style={{ color: "#2c3e50", marginBottom: "30px", fontSize: "28px" }}>Expense Tracker</h2>
        <h3 style={{ color: "#34495e", marginBottom: "20px" }} >Total Spent: ₹{this.state.total}</h3>

        <Link to="/add">
          <button style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.2s"
          }}>Add New Expense</button>
        </Link>

        <div style={{ marginTop: "30px" }}>
          {this.state.expenses.map(exp => (
            <div key={exp.id} style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f8f9fa",
              borderRadius: "6px",
              overflow: "hidden"
            }}>
              <div style={{ flex: 1, display: "flex", padding: "15px" }}>
                <span style={{ flex: 1, color: "#2ecc71" }}>₹{exp.amount}</span>
                <span style={{ flex: 1, color: "#34495e" }}>{exp.category}</span>
                <span style={{ flex: 1, color: "#7f8c8d" }}>{exp.date}</span>
              </div>
              <div style={{ padding: "0 15px" }}>
                <Link to={`/edit/${exp.id}`}>
                  <button style={{
                    backgroundColor: "#2ecc71",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "8px"
                  }}>Edit</button>
                </Link>
                <button
                  onClick={() => this.handleDelete(exp.id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
