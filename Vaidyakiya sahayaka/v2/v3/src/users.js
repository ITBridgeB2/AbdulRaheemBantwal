import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/patients")
      .then((response) => {
        setUsers(response.data);
        setLoading(false); // Data fetched, stop loading
      })
      .catch((error) => {
        setError("Error fetching users. Please try again later.");
        setLoading(false); // Stop loading even in case of error
      });
  }, []);

  const handleViewUser = (id) => {
    navigate(`/admin/user/${id}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Patient Directory</h2>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {users.length > 0 && !loading && !error ? (
        <div style={styles.cardGrid}>
          {users.map((user) => (
            <div key={user.id} style={styles.card}>
              <h3 style={styles.cardTitle}>{user.patient_name}</h3>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Phone:</strong> {user.patient_number}</p>
              <p><strong>DOB:</strong> {user.dob}</p>
              <p><strong>Disease:</strong> {user.disease_name}</p>
              <p><strong>Hospital:</strong> {user.hospital}</p>
              <button
                onClick={() => handleViewUser(user.id)}
                style={styles.button}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        !loading && !error && <p style={styles.noData}>No users found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2rem",
    color: "#333",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.2s",
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#007acc",
  },
  button: {
    marginTop: "10px",
    padding: "10px 16px",
    backgroundColor: "#007acc",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  noData: {
    textAlign: "center",
    color: "#777",
    marginTop: "50px",
    fontStyle: "italic",
  },
  loading: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#007acc",
  },
  error: {
    textAlign: "center",
    color: "#ff4d4d",
    fontStyle: "italic",
  },
};
