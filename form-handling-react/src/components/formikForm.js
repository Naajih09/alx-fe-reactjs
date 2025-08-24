import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Please enter your username'),
  email: Yup.string()
    .email('Hmm... that doesn’t look like a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .required('Don’t forget your password'),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('✅ Registration submitted:', values);
    alert('Thanks for registering, ' + values.username + '!');
    resetForm();
  };

  return (
    <div style={formContainer}>
      <h2 style={{ textAlign: 'center' }}>Create Your Account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          {/* Username */}
          <div style={fieldGroup}>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              name="username"
              id="username"
              placeholder="e.g. naajih123"
              style={inputStyle}
            />
            <ErrorMessage name="username" component="div" style={errorStyle} />
          </div>

          {/* Email */}
          <div style={fieldGroup}>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              style={inputStyle}
            />
            <ErrorMessage name="email" component="div" style={errorStyle} />
          </div>

          {/* Password */}
          <div style={fieldGroup}>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Choose a strong password"
              style={inputStyle}
            />
            <ErrorMessage name="password" component="div" style={errorStyle} />
          </div>

          <button type="submit" style={buttonStyle}>Register</button>
        </Form>
      </Formik>
    </div>
  );
};

// 🎨 Styles
const formContainer = {
  maxWidth: '420px',
  margin: '2rem auto',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  fontFamily: 'Arial, sans-serif',
};

const fieldGroup = {
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

export default FormikForm;
