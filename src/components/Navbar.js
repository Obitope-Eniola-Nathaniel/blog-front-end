import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Navbar.css";

const cookies = new Cookies();

const Navbar = () => {
  // State to manage the menu visibility and login status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in by looking for a token in cookies
  // This effect runs once when the component mounts
  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    cookies.remove("TOKEN", { path: "/" });
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          ShowBlog
        </Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li onClick={toggleMenu}>
              <Link to="/register">Register</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                border: "none",
                color: "red",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
