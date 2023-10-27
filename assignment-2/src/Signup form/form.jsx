import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import './signup.scss';

const SignUpForm = () => {
  const [userRegistration, setUserRegistration] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const validate = (values, existingUsers) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    if (!values.email) {
      errors.email = 'Email id is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email =
        'Make sure your email address contains @, . and does not contain any white spaces';
    } else {
      if (existingUsers.some((user) => user.email === values.email)) {
        errors.email = 'Email address is already in use';
      } else {
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (!PWD_REGEX.test(values.password)) {
          errors.password =
            'To ensure maximum security make sure that the password contains an uppercase, lowercase, number, and a special character';
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = 'Please confirm the password';
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(sessionStorage.getItem('users')) || [];
    const errors = validate(userRegistration, existingUsers);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const newUser = { ...userRegistration, id: new Date().getTime().toString() };
      sessionStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
      alert("Registration Successful")
      setUserRegistration({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formtotal">
      <TextField
        label="Email Address"
        name="email"
        value={userRegistration.email}
        onChange={handleInput}
        className="email"
        variant="outlined"
        margin="normal"
        fullWidth
        color="error"
      />
      <Typography variant="body2" color="error" className="Validationmessage">
        {formErrors.email}
      </Typography>

      <TextField
        label="Password"
        type="password"
        name="password"
        value={userRegistration.password}
        onChange={handleInput}
        className="password"
        variant="outlined"
        margin="normal"
        fullWidth
        color="error"
      />
      <Typography variant="body2" color="error" className="Validationmessage">
        {formErrors.password}
      </Typography>

      <TextField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={userRegistration.confirmPassword}
        onChange={handleInput}
        className="confirmpassword"
        variant="outlined"
        margin="normal"
        fullWidth
        color="error"
        
      />
      <Typography variant="body2" color="error" className="Validationmessage">
        {formErrors.confirmPassword}
      </Typography>

      <Button type="submit" className="submit" variant="contained" color="error" fullWidth>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
