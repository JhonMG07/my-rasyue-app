import React from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="navbar">
        <NavBar />
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="content">
        <div className="content-inner">
          <h1>Bienvenido a nuestro sistema!</h1>
          {/* Aquí puedes agregar el contenido adicional */}
        </div>
      </div>
    </div>
  );
}
