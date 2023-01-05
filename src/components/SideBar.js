import React from "react";
import radicallXBlackLogo1 from "../images/radicallXBlackLogo1.svg";
import dashboardIcon from "../images/dashboardIcon.svg";
import medalStar from "../images/medalStar.svg";
import book from "../images/book.svg";
import briefcase from "../images/briefcase.svg";
import setting from "../images/setting.svg";
import rectangle from "../images/rectangle.svg";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="sidebar-top">
        <img src={radicallXBlackLogo1} alt="RadicalX Logo" />
        <nav className="sidebar-nav">
          <ul>
            <li>
              <img src={dashboardIcon} alt="dashboard-icon" />{" "}
              <h4>Dashboard</h4>
            </li>
            <li>
              <img src={medalStar} alt="apprenticeships-icon" />
              <h4>Apprenticeships</h4>
            </li>
            <li className="sidebar-nav-intern">
              <img src={book} alt="internships-icon" />
              <h4>Internships</h4>
            </li>
            <li>
              <img src={briefcase} alt="jobs-icon" />
              <h4>Jobs</h4>
            </li>
            <li>
              <img src={setting} alt="setting-icon" />
              <h4>Settings</h4>
            </li>
          </ul>
        </nav>
      </div>
      <footer>
        <img src={rectangle} />
        <h4>Prius</h4>
      </footer>
    </div>
  );
};

export default SideBar;
