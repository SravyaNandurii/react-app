import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Faq2 from "./faq2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import './signup.scss'
function Faq() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="Faqtotal">
      <div className="total__Seperatingdiv"></div>
      <h1 className="Faqtotal__Faqheading">Frequently Asked Questions</h1>
      <div className="Faqtotal__onequestion">
        <div className="Faqtotal__onequestion__firstquestion">
          <a>How can I cancel ?</a>
          <button
            className="Faqtotal__onequestion__firstquestion__plusbutton"
            onClick={toggleDescription}
          >
            <AddIcon />
          </button>
        </div>
        {showDescription ? (
          <div className="Faqtotal__onequestion__des">
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </div>
        ) : null}
      </div>
      <p></p>
      <div className="Faqtotal__seperate"></div>
      <Faq2 />
      <p className="navtotal__Signupfirstpartdiv__Readytowatch">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input
        className="navtotal__Signupfirstpartdiv__enteremail"
        placeholder="Email Address"
      ></input>
      <button className="navtotal__Signupfirstpartdiv__getstarted">
        Get Started <ChevronRightIcon />
      </button>
      <p></p>
      <p></p>
      <div className="total__Seperatingdiv"></div>
    </div>
  );
}

export default Faq;
