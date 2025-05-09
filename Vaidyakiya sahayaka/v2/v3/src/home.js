import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}>
      <div className="text-center text-white p-5 rounded shadow-lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", maxWidth: "800px" }}>
        <h1 className="mb-4 display-3 fw-bold">Welcome to <span style={{ color: "#ffcc00" }}>Vaidyakiya Sahayaka</span></h1>
        <p className="mb-4 lead fs-4">
          Your trusted companion for medical assistance. Explore our platform to manage your health with ease and confidence.
        </p>
        <div className="d-flex justify-content-center gap-4 mb-5">
          <Link to="/login" className="btn btn-warning btn-lg px-5 py-3 shadow">Login</Link>
          <Link to="/register" className="btn btn-outline-light btn-lg px-5 py-3 shadow">Register</Link>
        </div>
        <div className="mt-5">
          <h4 className="text-uppercase fw-bold">Features You'll Love:</h4>
          <ul className="list-unstyled text-start mx-auto fs-5" style={{ maxWidth: "500px" }}>
            <li className="mb-3">✔️ <span className="fw-bold">Effortless</span> appointment scheduling</li>
            <li className="mb-3">✔️ <span className="fw-bold">Secure</span> access to medical records</li>
          </ul>
        </div>
        <footer className="mt-5 text-muted small">
          &copy; {new Date().getFullYear()} <span style={{ color: "#ffcc00" }}>Vaidyakiya Sahayaka</span>. All rights reserved.
        </footer>
      </div>
    </div>
  );
}