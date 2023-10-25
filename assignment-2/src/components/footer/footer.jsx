import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../../components/style.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_social">
        <FaFacebook className="footer_icon" />
        <FaTwitter className="footer_icon" />
        <FaInstagram className="footer_icon" />
        <FaYoutube className="footer_icon" />
      </div>
      <div className="footer_links">
        <a href="/faq">FAQ</a>
        <a href="/help">Help Center</a>
        <a href="/terms">Terms of Use</a>
        <a href="/privacy">Privacy</a>
      </div>
      <div className="footer_service">
        <a href="/cookie">Cookie Preferences</a>
      </div>
      <div className="footer_corp">
        <p>&copy; 2023 Netflix</p>
      </div>
    </footer>
  );
}

export default Footer;
