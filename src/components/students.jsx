import React from "react";

const Students = () => {
  const users = JSON.parse(localStorage.getItem("users"));
  console.log(users);
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Course</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <tr key={idx}>
              <td>{item.idx}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.course}</td>
              <td>{item.status}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
