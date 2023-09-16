import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../context";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import StudentService from "../service/students";
import { studentsLoadingFailure, studentsLoadingStart, studentsLoadingSuccess } from "../slice/students";

const UserRow = ({ item, idx }) => {
  const [isChecked, setIsChekced] = useState(true);
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state => state.StudentReducer)

  const updateStatus = async () => {
    setIsChekced(!isChecked);
    dispatch(studentsLoadingStart())
    const student = {
      ...item,
      status: !isChecked ? "New" : "Old",
    }
   try {
     const data = await StudentService.editStudent(item._id,student)
     dispatch(studentsLoadingSuccess(data.data))
   } catch (error) {
    dispatch(studentsLoadingFailure())
   }
  }

  const deleteStudent = async id  => {
    dispatch(studentsLoadingStart())
    try {
      const data = await StudentService.deleteStudent(id)
      dispatch(studentsLoadingSuccess(data.data))
    } catch (error) {
      dispatch(studentsLoadingFailure())
    }
  }

  const date = item.date;
  return (
    <tr key={idx}>
      
      <td>{idx + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.course}</td>
      <td>{moment(date).calendar()}</td>
      <td>{item.status}</td>
      <td className="d-flex align-items-center gap-2">
        <input
          type="checkbox"
          checked={item.status == "New" ? false : true}
          value={isChecked}
          onChange={() => updateStatus()}
        />
        <i className="bi bi-trash text-danger pointer" onClick={() => deleteStudent(item._id)}></i>
      </td>
    </tr>
  );
};

export default UserRow;
