import React from "react";
import { Link } from "react-router-dom";
const HidMenu = () => {
  return (
    <div className="hid-menu">
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Service</a>
        <a href="/">Events</a>
        <a href="/">Contact</a>{" "}
      </div>
      <div className="nav-btn">
        <Link to="/adminLogin">
          <div className="btn btn-adm">Admin</div>
        </Link>
        <Link to="/">
          <div className="btn btn-art">Artist</div>
        </Link>
      </div>
    </div>
  );
};

export default HidMenu;
