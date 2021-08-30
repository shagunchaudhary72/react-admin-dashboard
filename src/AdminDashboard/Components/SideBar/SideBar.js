import React from "react";
import "./SideBar.css";
import {
  Home,
  Timeline,
  TrendingUp,
  PeopleAltOutlined,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutlineOutlined,
  Report,
} from "@material-ui/icons";
import {Link} from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContainer">
        <div className="SideBarDashboard">
          <h4 className="sideBarListTitle">Dashboard</h4>
          <ul className="sideBarList">
          <Link to="/" className="link">
            <li className="sideBarListItem active">
              <Home className="sideBarLogo"/>
              Home
            </li>
            </Link>
            <li className="sideBarListItem">
              <Timeline className="sideBarLogo" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarLogo" />
              Sale
            </li>
          </ul>
        </div>
        <div className="sideBarQuickMenu">
          <h4 className="sideBarListTitle">QuickMenu</h4>
          <ul className="sideBarList">
          <Link to="/users" className="link">
            <li className="sideBarListItem active">
              <PeopleAltOutlined className="sideBarLogo" />
              Users
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sideBarListItem active">
              <Storefront  className="sideBarLogo"/>
              Products
            </li>
            </Link>
            <li className="sideBarListItem">
              <AttachMoney className="sideBarLogo" />
              Transaction
            </li>
            <li className="sideBarListItem">
              <BarChart className="sideBarLogo" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarNotification">
          <h4 className="sideBarListTitle">Notification</h4>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline className="sideBarLogo" />
              MailOutline
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className="sideBarLogo" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarLogo" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarStaff">
          <h4 className="sideBarListTitle">Staff</h4>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutlineOutlined  className="sideBarLogo"/>
              Manage
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarLogo" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report className="sideBarLogo" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
