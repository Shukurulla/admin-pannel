import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const { courses } = useSelector((state) => state.CourseReducer);
  const { mentors } = useSelector((state) => state.MentorReducer);
  const { students } = useSelector((state) => state.StudentReducer);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Link to={"/courses"}>
            <div className="border info-box text-center p-3">
              <h2>{courses.length}</h2>
              <p>Courses</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Link to={"/students"}>
            <div className="border info-box text-center p-3">
              <h2>{students.length}</h2>
              <p>Students</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Link to={"/mentors"}>
            <div className="border info-box text-center p-3">
              <h2>{mentors.length}</h2>
              <p>Mentors</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
