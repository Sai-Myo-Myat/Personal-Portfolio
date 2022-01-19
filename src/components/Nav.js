import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
//importing components
import Menu from "./Menu";

const Nav = ({ menuActive, setMenuActive }) => {
  return (
    <nav>
      <Link to="/home">
        <h1>Home</h1>
      </Link>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/blogs">
          <li>Blogs</li>
        </Link>
        <Link to="/myProjects">
          <li>My Projects</li>
        </Link>
      </ul>
      <div className="menu">
        <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </nav>
  );
};

export default Nav;
