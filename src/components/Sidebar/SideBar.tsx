import React, { useState } from "react";
import "./SideBar.css";
import Link from "../Link/Link";
import { USER_NAME, sideBarFooter, sideBarLogos } from "./utils";

const Avatar = require("../../assets/avatar.png");

const Sidebar = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("Home");

  const toggleClassName = mouseOver ? "sidebarOpened" : "sidebarClosed";

  return (
    <div
      className={`sidebar ${toggleClassName}`}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <div className="sidebar-header">
        {mouseOver && (
          <div className="sidebar-user">
            <img src={Avatar} alt="avatar" className="sidebar-avatar" />
            <span className="sidebar-user-name">{USER_NAME}</span>
          </div>
        )}
      </div>

      <div className="sidebar-logo-wrapper">
        {sideBarLogos.map((logo) => (
          <Link
            name={logo.name}
            logo={logo.icon}
            isSelected={selectedIcon === logo.name}
            onClick={() => setSelectedIcon(logo.name)}
            isOpen={mouseOver}
          />
        ))}
      </div>
      <div className="sidebar-footer">
        {mouseOver && (
          <div className="sidebar-footer-menu">
            {sideBarFooter.map((item) => (
              <a href="/#" className="sidebar-footer-menu-item">
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
