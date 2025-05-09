import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userDetailService from "./userDetailService";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    userDetailService.saveUserDetials(formData)
      .then(response => {
        alert("Registered Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error submitting data: " + error);
        alert("Registration Failed");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              placeholder="John"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              placeholder="Doe"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="example@example.com"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            id="mobileNumber"
            className="form-control"
            placeholder="+1234567890"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter a strong password"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </div>
  );
}