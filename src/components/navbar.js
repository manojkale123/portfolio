import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

