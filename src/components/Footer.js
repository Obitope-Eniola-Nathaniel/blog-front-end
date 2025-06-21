import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" />
        </Link>

        <Link to="/">
          <FontAwesomeIcon icon="fa-solid fa-circle-user" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
