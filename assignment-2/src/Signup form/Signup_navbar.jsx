import React from "react";
import "./signup.scss";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
function Signup_nav() {
  const navigate = useNavigate();
  return (
    <div className="navtotal1">
      <div className="navtotal1__Signupfirstpartdiv">
      <div className="navtotal1__Signupfirstpartdiv__navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="navtotal1__Signupfirstpartdiv__navbar__logoimg"
        />
        <button className="navtotal1__Signupfirstpartdiv__navbar__English">
          <TranslateIcon />
          <a className="navtotal1__Signupfirstpartdiv__navbar__English__text">English</a>
          <ArrowDropDownIcon />
        </button>
        <button
          className="navtotal1__Signupfirstpartdiv__navbar__signinbutton1"
          onClick={() => navigate("/")}
        >
          Sign In
        </button>
        </div>
        <h1 className="navtotal1__Signupfirstpartdiv__unlimited">
          Unlimited movies, Tv shows and more
        </h1>
        <h3 className="navtotal1__Signupfirstpartdiv__Watchanywhere">
          Watch Anywhere. Cancel anytime
        </h3>
        <p className="navtotal1__Signupfirstpartdiv__Readytowatch">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          className="navtotal1__Signupfirstpartdiv__enteremail"
          placeholder="Email Address"
        ></input> 
        <button
          className="navtotal1__Signupfirstpartdiv__getstarted"
          onClick={() => navigate("/form")}
        >
          <a className="navtotal1__Signupfirstpartdiv__getstarted__writeup">Get Started</a>
          <a><ChevronRightIcon  className="navtotal1__Signupfirstpartdiv__getstarted__arrow"/></a>
        </button>
      </div>

      <p></p>
    </div>
  );
}
export default Signup_nav;
