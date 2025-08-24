import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for each input field
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    // Clear error and proceed (e.g., send data to backend)
    setError('');
    console.log('Form submitted:', { username, email, password });
    // Reset form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>User Registration</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={fieldStyle}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={fieldStyle}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={fieldStyle}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

// Simple inline styles
const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

const fieldStyle = {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
};

export default RegistrationForm;
