import React, { useRef } from "react";
import "../css/Sidemenu.css";
import SideItem from "./sideItem";
//importing components

function Sidemenu({ menuActive, setMenuActive }) {
  const data = useRef([
    { link: "/about", text: "About" },
    { link: "/blogs", text: "Blogs" },
    { link: "/myProjects", text: "My Projects" },
  ]);
  return (
    <div className={`sidemenu ${menuActive ? "slide" : ""}`}>
      <div className="lists">
        {data.current.map((item) => {
          return (
            <SideItem
              link={item.link}
              text={item.text}
              menuActive={menuActive}
              setMenuActive={setMenuActive}
              key={Math.random() * 100}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidemenu;
