import React, { useState, useEffect } from "react";
import "./TableWeekly.css";
import axios from "axios";
import api from "./../../constants/api";

const TableWeekly = () => {
  const [tableData, setTableData] = useState([]);
  const getTableData = async () => {
    try {
      const res = await axios.get(api.exercisesCountByWeek);
      const exerciseList = res.data;

      setTableData(exerciseList);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTableData();
  }, []);

  //   const formatDate = (date) => {
  //     return `${date.getDate()}/${date.getMonth() + 1}`;
  //   };

  return (
    <div className="table-weekly-container">
      <div className="label-column">
        <div className="label-column-cell">Total Duration (mins)</div>
        <div className="label-column-cell">Total Workouts</div>
      </div>
      <div className="label-column">
        <div className="content-column-cell">1</div>
        <div className="content-column-cell">2</div>
      </div>
      <div className="label-column">
        <div className="content-column-cell"> 3</div>
        <div className="content-column-cell">4</div>
      </div>
    </div>
  );
};

export default TableWeekly;
