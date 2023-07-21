import React from "react";
import { Link } from "react-router-dom";
import './style.css'
const Header = () => {
  return (
    <header>
      <h5 className="app_name">LESSON_12</h5>
      <ul
        className="nav"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ex1">Exercise 1</Link>
        </li>
        <li>
          <Link to="/ex2">Exercise 2</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
