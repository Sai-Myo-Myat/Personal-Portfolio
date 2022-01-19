import React from "react";
import "../css/Menu.css";
//importing components

function Menu({ menuActive, setMenuActive }) {
  return (
    <div
      className={`Menu ${menuActive ? "active" : ""}`}
      onClick={() => setMenuActive(!menuActive)}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export default Menu;
