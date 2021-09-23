import React, { useState, useEffect } from "react";
import "./TableWeekly.css";
import axios from "axios";
import { api, apiConfig } from "./../../constants/api";

const TableWeekly = () => {
  const [tableData, setTableData] = useState([
    { count: "Loading...", totalDuration: "Loading..." },
    { count: "Loading...", totalDuration: "Loading..." },
  ]);
  const getTableData = async () => {
    try {
      const res = await axios.get(
        api.exercisesCountByWeek + apiConfig.exerciseTableCount
      );
      const exerciseList = res.data;
      exerciseList[0].displayHeader = "This Week";
      exerciseList[1].displayHeader = "Last Week";
      setTableData(exerciseList);
    } catch (err) {}
  };
  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div className="table-weekly-container">
      <table className="table-weekly">
        <tr>
          <th className="label-column-header">All Activities</th>
          <th className="label-column-header">This Week</th>
          <th className="label-column-header">Last Week</th>
        </tr>
        <tr>
          <td className="label-column-header">
            {" "}
            <img
              src="./images/duration.png"
              alt=""
              className="label-column-icon"
            />{" "}
            Total Duration (mins)
          </td>
          <td className="content-column-cell">{tableData[0].totalDuration}</td>
          <td className="content-column-cell">{tableData[1].totalDuration}</td>
        </tr>
        <tr>
          <td className="label-column-header">
            {" "}
            <img
              src="./images/dumbbell.png"
              alt=""
              className="label-column-icon"
            />
            Total Workouts
          </td>
          <td className="content-column-cell">{tableData[0].count}</td>
          <td className="content-column-cell">{tableData[1].count}</td>
        </tr>
      </table>

      {/* <div className="label-column">
        <div className="label-column-header">All Activities</div>
        <div className="label-column-cell">
          <img
            src="./images/dumbbell.png"
            alt=""
            className="label-column-icon"
          />{" "}
          Total Duration (mins)
        </div>
        <div className="label-column-cell">
          <img
            src="./images/duration.png"
            alt=""
            className="label-column-icon"
          />
          Total Workouts
        </div>
      </div>
      {tableData.map((row) => (
        <div className="label-column">
          <div className="content-column-header">{row.displayHeader}</div>
          <div className="content-column-cell">{row.totalDuration}</div>
          <div className="content-column-cell">{row.count}</div>
        </div>
      ))} */}
    </div>
  );
};

export default TableWeekly;
