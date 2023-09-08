import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Context } from "../context";
import UserRow from "./user-row";

const Students = () => {
  const { setSelectItem } = useContext(Context)
  useEffect(() => {
    setSelectItem(3)
  }, [])
  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);


  return (
    <div className="container">
      <table className="user-table" >
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
          {users.map((item, idx) => (
            <UserRow key={idx} item={item} idx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
