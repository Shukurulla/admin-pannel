import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../context";
import moment from "moment";

const UserRow = ({ item, idx }) => {
  const [isChecked, setIsChekced] = useState(true);

  const updateStatus = async () => {
    setIsChekced(!isChecked);
    await fetch(`http://localhost:3001/update-user/${item._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        status: !isChecked ? "New" : "Old",
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const date = item.date;
  return (
    <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.course}</td>
      <td>{moment(date).calendar()}</td>
      <td>{item.status}</td>
      <td>
        <input
          type="checkbox"
          checked={item.status == "New" ? false : true}
          value={isChecked}
          onChange={() => updateStatus()}
        />
      </td>
    </tr>
  );
};

export default UserRow;
