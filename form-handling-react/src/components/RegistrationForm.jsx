import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }

    // ✅ Explicitly checking email and password
    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form submitted:', { username, email, password });
      alert(`Welcome, ${username}!`);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle} noValidate>
      <h2 style={{ textAlign: 'center' }}>Register</h2>

      <div style={fieldStyle}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. naajih123"
          style={inputStyle}
        />
        {errors.username && <div style={errorStyle}>{errors.username}</div>}
      </div>

      <div style={fieldStyle}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={inputStyle}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}
      </div>

      <div style={fieldStyle}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a strong password"
          style={inputStyle}
        />
        {errors.password && <div style={errorStyle}>{errors.password}</div>}
      </div>

      <button type="submit" style={buttonStyle}>Register</button>
    </form>
  );
};

// 🎨 Styles
const formStyle = {
  maxWidth: '420px',
  margin: '2rem auto',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  fontFamily: 'Arial, sans-serif',
};

const fieldStyle = {
  marginBottom: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '0.6rem',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const errorStyle = {
  color: '#d9534f',
  fontSize: '0.85rem',
  marginTop: '0.3rem',
};

const buttonStyle = {
  padding: '0.8rem',
  fontSize: '1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default RegistrationForm;
