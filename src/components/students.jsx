import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Context } from "../context";
import UserRow from "./user-row";
import { useSelector } from "react-redux";

const Students = () => {
  const { students } = useSelector((state) => state.StudentReducer);

  return (
    <div className="container">
      <table className="user-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Course</th>
            <th>Add at</th>
            <th>Status</th>
            <th>check</th>
          </tr>
        </thead>
        <tbody className="students-box">
          {students.map((item, idx) => (
            <UserRow key={idx} item={item} idx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
