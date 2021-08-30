import React from "react";
import "./Chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({data , title ,datakey,width,height}) => {
  return (
    <div className="chartMainDiv">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <div>
          <AreaChart
            width={width}
            height={height}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={datakey}
              stroke="#8884d8"
              fill="rgb(164, 243, 154)"
            />
          </AreaChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
