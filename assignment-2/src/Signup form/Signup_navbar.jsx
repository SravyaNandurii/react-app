import React from "react";
import "./signup.scss";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
function Signup_nav() {
  const navigate = useNavigate();
  return (
    <div className="navtotal">
      <div className="navtotal__Signupfirstpartdiv">
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
        <button className="navtotal__Signupfirstpartdiv__signinbutton1" onClick={() => navigate("/")}>
          Sign In
        </button>
        <h1 className="navtotal__Signupfirstpartdiv__unlimited">Unlimited movies, Tv shows and more</h1>
        <h3 className="navtotal__Signupfirstpartdiv__Watchanywhere">Watch Anywhere. Cancel anytime</h3>
        <p className="navtotal__Signupfirstpartdiv__Readytowatch">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input className="navtotal__Signupfirstpartdiv__enteremail" placeholder="Email Address"></input>
        <button className="navtotal__Signupfirstpartdiv__getstarted" onClick={() => navigate("/form")}>
          Get Started <ChevronRightIcon />
        </button>
      </div>

      <p></p>
    </div>
  );
}
export default Signup_nav;
