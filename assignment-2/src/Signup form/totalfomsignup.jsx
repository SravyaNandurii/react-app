import React from "react";
import SignUpForm from "./form";
import "./signup.scss";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

function TotalSignup_form() {
  const navigate = useNavigate();
  return (
    <div className="formtotal">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        className="navtotal__Signupfirstpartdiv__logoimg"
      />
      <button className="navtotal__Signupfirstpartdiv__English">
        <TranslateIcon />
        <a></a>English <a></a>
        <ArrowDropDownIcon />
      </button>
      <button
        className="navtotal__Signupfirstpartdiv__signinbutton1"
        onClick={() => navigate("/")}
      >
        Sign In
      </button>
      <div className="formtotal__signupfields">
        <h2>Create a password to start your membership</h2>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
        <br />
        <SignUpForm />
      </div>
    </div>
  );
}

export default TotalSignup_form;
