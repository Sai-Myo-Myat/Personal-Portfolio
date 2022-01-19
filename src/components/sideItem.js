import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidemenu.css";

function SideItem({ link, text, menuActive, setMenuActive }) {
  return (
    <Link onClick={() => setMenuActive(!menuActive)} to={link}>
      {text}
    </Link>
  );
}

export default SideItem;
