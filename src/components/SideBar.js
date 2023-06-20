import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./SideBar.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar__header">
        <div className="sidebar__logo">Menú</div>
        <div className="sidebar__toggle" onClick={handleToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <ul className="sidebar__menu">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Comprar</a>
        </li>
        <li className="sidebar__dropdown">
          <a href="/">Catalogo &nbsp;<i className="fa fa-caret-down"></i></a>
          <ul className="sidebar__submenu">
            <li>
              <a href="/">2019</a>
            </li>
            <li>
              <a href="/">2018</a>
            </li>
            <li>
              <a href="/">2017</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Contactos</a>
        </li>
        <li className="sidebar__dropdown">
          <a href="/">Others &nbsp;<i className="fa fa-caret-down"></i></a>
          <ul className="sidebar__submenu">
            <li>
              <a href="/">DOCS</a>
            </li>
            <li>
              <a href="/">API</a>
            </li>
            <li>
              <a href="/">PROJECTS</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
