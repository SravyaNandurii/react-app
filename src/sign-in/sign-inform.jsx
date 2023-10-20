import React from 'react';
import '../sign-in/SignInPage.css'
import { Navigate, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate=useNavigate();
  return(
  <div>
      <div className='Signinnav'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="noo" className='Sigin_logos' />
      </div>
      <div className='signin_cont'>
          <h2>Sign In</h2>
          <input className='signin_email'placeholder='Email or Phone Number'></input>
          <input className='signin_password'placeholder='Password'></input>
          <button className='sigin_button' onClick={()=>navigate('/home')}>Sign In</button>
          <br></br>
          <div className='rememberme'>
          <input type="checkbox"></input>
          <label>Remember me</label>
          <a href="#" className='help'>Need help?</a>
          </div>
        <div className='signin_new'>
        <p className='new'>New to Netflix?</p>
          <a href="#" className='signup'> Signup Now</a>
          <a className='description'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn More</a></a>
        </div>
      </div>
      </div>
      );
  }

export default SignInForm;
