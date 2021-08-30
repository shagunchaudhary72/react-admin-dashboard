import React, { useState, useEffect } from "react";
import "./WidgetLg.css";
import widgetlgData from "./widgetlgData";

const WidgetLg = () => {
  const [widgetLgData, setWidgetLgData] = useState([]);
  useEffect(() => {
    setWidgetLgData(widgetlgData);
  }, []);
  return (
    <div className="widgetlgMainDiv">
      <h3 className="widgetlgHeader">Latest Transactions</h3>
      <table className="widgetlgTable">
        <thead className="widgetlgTableHeader">
          <tr className="widgetlgTableRow">
            <th className="widgetlgTableHeading customer">Customer</th>
            <th className="widgetlgTableHeading">Date</th>
            <th className="widgetlgTableHeading">Amount</th>
            <th className="widgetlgTableHeading">Status</th>
          </tr>
        </thead>
        <tbody className="widgetlgTableBody">
          {widgetLgData.map((item, index) => {
            let currStatus=item.status;
            return (
              <tr className="widgetlgTableRow" key={index}>
                <td className="widgetlgTableData">
                  <img
                    className="widgetlgUserImg"
                    src={item.img}
                    alt={item.name}
                  />
                  <span className="widgetlgUserName">{item.name}</span>
                </td>
                <td className="widgetlgTableData">{item.date}</td>
                <td className="widgetlgTableData">${item.amount}</td>
                <td className="widgetlgTableData">
                  <button className={`"widgetlgButton" ${currStatus}`}>{item.status}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
