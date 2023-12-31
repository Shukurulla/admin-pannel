import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Context } from "../context";
import UserRow from "./user-row";
import { useDispatch, useSelector } from "react-redux";
import { uiLoadingSuccess } from "../slice/ui";

const Students = () => {
  const { students, isLoading } = useSelector((state) => state.StudentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiLoadingSuccess("students"));
  }, []);

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
