import React from "react";
import "./SignInPage.css";
import LanguageIcon from '@mui/icons-material/Language';
function Footer() {
  return (
    <div className="signin_footer">
      <div className="signin_question">
        <a>Questions? Call 8639086987</a>
      </div>
      <div className="second_div">
        <a href="#" className="faq">
          FAQ?
        </a>
        <br></br>
        <a href="#" className="faq">
          Help center
        </a>
        <br></br>
        <a href="#" className="faq">
          Terms of use
        </a>
        <br></br>
        <a href="#" className="faq">
          Privacy
        </a>
      </div>
      <div className="third_div">
        <a href="#" className="signin_cookie">
          Cookie Preferences
        </a>
        <br></br>
        <a href="#" className="signin_cookie">
          Coorperate Information
        </a>
      </div>
    </div>
  );
}
export default Footer;
