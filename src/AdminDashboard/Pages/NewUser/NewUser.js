import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUserMainDiv">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserFormLeft">
          <div className="newUserFormLeftData">
            <label className="newUserFormLabel">UserName</label>
            <input
              className="newUserFormInput"
              type="text"
              placeholder="enter username"
            />
          </div>
          <div className="newUserFormLeftData">
            <label className="newUserFormLabel">Email</label>
            <input
              type="email"
              placeholder="enter email"
              className="newUserFormInput"
            />
          </div>
          <div className="newUserFormLeftData">
            <label className="newUserFormLabel">Phone</label>
            <input
              type="tel"
              placeholder="enter phone"
              className="newUserFormInput"
            />
          </div>
          <div className="newUserFormLeftData">
            <label className="newUserFormLabel">Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
        </div>
        <div className="newUserFormRight">
          <div className="newUserFormRightData">
            <label className="newUserFormLabel">FullName</label>
            <input
              type="text"
              placeholder="enter fullname"
              className="newUserFormInput"
            />
          </div>
          <div className="newUserFormRightData">
            <label className="newUserFormLabel">Password</label>
            <input
              type="password"
              placeholder="enter password"
              className="newUserFormInput"
            />
          </div>
          <div className="newUserFormRightData">
            <label className="newUserFormLabel">Address</label>
            <input
              type="text"
              placeholder="enter address"
              className="newUserFormInput"
            />
          </div>
          <div className="newUserFormRightData">
            <label className="newUserFormLabel">Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <button className="newUserFormButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
