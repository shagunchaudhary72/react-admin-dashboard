import { Visibility } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./WidgetSm.css";
import widgetsmData from "./widgetsmData";

const Widgetsm = () => {
  const [widgetSmData, setWidgetSmData] = useState([]);

  useEffect(() => {
    setWidgetSmData(widgetsmData);
  }, []);
  return (
    <div className="widgetsmMainDiv">
      <h3 className="widgetsmHeader">New Joined Members</h3>
      <ul className="widgetsmData">
        {widgetSmData.map((item, index) => {
          return (
            <li className="widgetsmUser" key={index}>
              <img className="widgetsmImg" src={item.img} alt={item.name} />
              <div className="widgetsmInfo">
                <p className="widgetsmName">{item.name}</p>
                <p className="widgetsmProfession">{item.profession}</p>
              </div>
              <button className="widgetsmButon">
                <Visibility className="widgetsmButtonIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Widgetsm;
