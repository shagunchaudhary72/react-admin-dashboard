import React from "react";
import "./Home.css";
import { userData } from "../../data";
import Chart from "../../Components/Chart/Chart";
import Revenue from "../../Components/Revenue/Revenue";
import Widgetsm from "../../Components/WidgetSm/Widgetsm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";

const Home = () => {
  return (
    <div className="homeMainDiv">
      <Revenue />
      <div className="homeChart">
        <Chart
          data={userData}
          title="User Analytics"
          datakey="Active User"
          width={900}
          height={300}
        />
      </div>

      <div className="widget">
        <Widgetsm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
