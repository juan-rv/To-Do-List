import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="content_footer">
      <h2>Developed by RV</h2>
      <a href="https://github.com/juan-rv" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/juan-rv/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default Footer;
