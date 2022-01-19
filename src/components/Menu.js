import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
//importing components

function Menu({ menuActive, setMenuActive }) {
  return (
    <Link to="/sideMenu">
      <div>
        <div
          className={`Menu ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </Link>
  );
}

export default Menu;
