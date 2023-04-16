import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { side, setSide } = useGlobalContext();
  return (
    <aside className={`sidebar ${side ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="Coding Addict" />
        <div className="close-btn">
          <FaTimes onClick={() => setSide(false)} />
        </div>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((curr) => {
          const { id, url, icon } = curr;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
