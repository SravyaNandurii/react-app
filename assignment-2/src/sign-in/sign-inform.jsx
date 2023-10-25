import React from 'react';
import '../sign-in/SignInPage.scss'
import { useState,useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
  
  const SignInForm = () => {
    console.log(localStorage)
    const navigate = useNavigate();
    const [signInData, setSignInData] = useState({
      email: "",
      password: ""
    });
    const [errors,seterrors]=useState('')
    
    const handleSignInInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setSignInData({ ...signInData, [name]: value });
    };
  
      const handleSignIn = () => {
        const { email, password } = signInData;
          const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
          const user = storedUsers.find((user) => user.email === email && user.password === password);
          
        console.log("nah",storedUsers)
        
          if (user) {
            console.log("Authentication successful");
            navigate('/home')
          } else {
            console.log("Invalid credentials");
            seterrors("Invalid Credentials")
          }
        }
        
  return(
  <div>
      <div className='Signinnav'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="noo" className='Signinnav__Sigin_logos' />
      </div>
      <div className='signin_cont'>
        <p></p>
          <h2>Sign In</h2>
          <input className='signin_cont__signin_email'placeholder='Email or Phone Number' value={signInData.email}
          name="email" type="email"
          onChange={handleSignInInput} required></input>
          {/* <p>{errors.email}</p> */}
          <input className='signin_cont__signin_password'placeholder='Password'  value={signInData.password}
          onChange={handleSignInInput}name="password"
          type="password"  required></input>
          {/* <p>{errors.password}</p> */}
          <p className='signin_cont__Validation'>{errors}</p>
          <button className='signin_cont__sigin_button' onClick={handleSignIn}>Sign In</button>
          
          <div className='signin_cont__rememberme'>
          <input type="checkbox"></input>
          <label>Remember me</label>
          <a href="#" className='signin_cont__rememberme__help'>Need help?</a>
          </div>
        <div className='signin_cont__signin_new'>
        <p className='signin_cont__signin_new__new'>New to Netflix?</p>
          <a href="#" className='signin_cont__signin_new__signup' onClick={()=>navigate('/signup')}> Signup Now</a>
          <span className='signin_cont__signin_new__description'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn More</a></span>
        </div>
      </div>
      </div>
      );
  }

export default SignInForm;
