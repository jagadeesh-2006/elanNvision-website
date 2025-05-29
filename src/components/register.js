import React, { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section className="register-section shared-bg-section">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </section>
  );
}

export default Register;
