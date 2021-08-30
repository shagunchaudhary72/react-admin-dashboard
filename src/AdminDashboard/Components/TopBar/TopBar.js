import React from "react";
import "./TopBar.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import ProfileIcon from "./profileIcon.jpg";
const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarContainer">
        <div className="topLeft">
          <h3 className="title">Shagun's Dashboard</h3>
        </div>
        <div className="topRight">
        <div>
          <NotificationsActiveIcon className="notification" />
            <span className="topBadge">5</span>
          </div>
          <SettingsIcon className="settings" />
          <LanguageIcon className="language" />
          <img src={ProfileIcon} alt="ProfileIcon" className="profileIcon" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
