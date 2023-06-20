import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css"
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? "navbar open" : "navbar"}>
      <div className="navbar__logo">Company</div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="/">Home</a>
        </li>
        <li className="navbar__item">
          <a href="/">About</a>
        </li>
        <li className="navbar__item dropdown">
          <a href="/">Gallery</a>
          <ul className="dropdown__menu">
            <li className="dropdown__item">
              <a href="/">2019</a>
            </li>
            <li className="dropdown__item">
              <a href="/">2018</a>
            </li>
            <li className="dropdown__item">
              <a href="/">2017</a>
            </li>
          </ul>
        </li>
        <li className="navbar__item">
          <a href="/">Contact</a>
        </li>
        <li className="navbar__item dropdown">
          <a href="/">Others</a>
          <ul className="dropdown__menu">
            <li className="dropdown__item">
              <a href="/">DOCS</a>
            </li>
            <li className="dropdown__item">
              <a href="/">API</a>
            </li>
            <li className="dropdown__item">
              <a href="/">PROJECTS</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
