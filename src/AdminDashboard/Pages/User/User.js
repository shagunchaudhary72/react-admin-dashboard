import React from "react";
import "./User.css";
import {
  CalendarTodayOutlined,
   EmailOutlined,
  LocationCityOutlined,
  PersonOutline,
  PhoneAndroidOutlined,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="userMainDiv">
      <div className="userHeader">
        <h3 className="userHeaderTitle">Edit User</h3>
        <Link to="/newuser">
        <button className="userHeaderButton">Create</button>
        </Link>
      </div>
      <div className="userInfo">
        <div className="userData">
          <div className="userNameImgProfession">
            <img
              className="userImg"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="AnnaBecker"
            ></img>
            <div className="userNameProfession">
              <h4 className="userName">Anna Becker</h4>
              <p className="userProfession">Software Engineer</p>
            </div>
          </div>
          <div className="userAccountDetails">
            <p className="userAccountDetailsTitle">Account Details</p>
            <p className="userAccount">
              <PersonOutline />
              annabeck96
            </p>
            <p className="userAccount">
              <CalendarTodayOutlined />
              28.08.2021
            </p>
          </div>
          <div className="userContactDetails">
            <p className="userContactDetailsTitle">Contact Details</p>
            <p className="userContact">
              <PhoneAndroidOutlined />
              +91 6312345678
            </p>
            <p className="userContact">
              <EmailOutlined />
              annabeck23@gmail.com
            </p>
            <p className="userContact">
              <LocationCityOutlined />
              Toronto | CANADA
            </p>
          </div>
        </div>
        <div className="userEdit">
          <div className="userEditInfo">
            <h3 className="userEditTitle">Edit</h3>
            <form className="userEditForm">
              <div className="userEditFormInput">
                <label>UserName</label>
                <input placeholder="Edit UserName" />
              </div>
              <div className="userEditFormInput">
                <label>FullName</label>
                <input type="text" placeholder="Edit FullName" />
              </div>
              <div className="userEditFormInput">
                <label>E-mail</label>
                <input type="email" placeholder="Edit Email" />
              </div>
              <div className="userEditFormInput">
                <label>Phone</label>
                <input type="tel" placeholder="Edit Phone" />
              </div>
              <div className="userEditFormInput">
                <label>Address</label>
                <input type="address" placeholder="Edit Address" />
              </div>
            </form>
          </div>
          <div className="userImgUpdate">
            <div className="userEditImg">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Anna Beck"
              />
              <label htmlFor="file" >
              <Publish className="userImgDownload"/>
              </label>
              <input type="file" id="file" style={{display:"none"}}/>
              
            </div>
            <div className="userUpdate">
              <button className="userUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
