import React from "react";
import "./SignInPage.scss";
import LanguageIcon from '@mui/icons-material/Language';
function Footer() {
  return (
    <div className="signin_footer">
      <div className="signin_footer__signin_question">
        <a>Questions? Call 8639086987</a>
      </div>
      <div className="signin_footer__second_div">
        <a href="#" className="signin_footer__second_div__faq">
          FAQ?
        </a>
        <br></br>
        <a href="#" className="signin_footer__second_div__faq">
          Help center
        </a>
        <br></br>
        <a href="#" className="signin_footer__second_div__faq">
          Terms of use
        </a>
        <br></br>
        <a href="#" className="signin_footer__second_div__faq">
          Privacy
        </a>
      </div>
      <div className="signin_footer__third_div">
        <a href="#" className="signin_footer__third_div__signin_cookie">
          Cookie Preferences
        </a>
        <br></br>
        <a href="#" className="signin_footer__third_div__signin_cookie">
          Coorperate Information
        </a>
      </div>
    </div>
  );
}
export default Footer;
