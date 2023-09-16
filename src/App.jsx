import "./App.css";
import { useEffect, useState } from "react";
import { SideBar, Navbar, Students, Authorization } from "./components";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  CreateCourse,
  Course,
  Courses,
  CourseEdit,
  AddMentor,
  Main,
  Mentors,
  EditMentor,
} from "./pages";
import CourseService from "./service/course";
import { useDispatch, useSelector } from "react-redux";
import {
  courseLoadingFailure,
  courseLoadingStart,
  courseLoadingSuccess,
} from "./slice/course";
import {
  mentorLoadingFailure,
  mentorLoadingStart,
  mentorLoadingSuccess,
} from "./slice/mentor";
import MentorService from "./service/mentor";
import {
  studentsLoadingFailure,
  studentsLoadingStart,
  studentsLoadingSuccess,
} from "./slice/students";
import StudentService from "./service/students";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = JSON.parse(localStorage.getItem("Auth"));

  const getCourse = async () => {
    dispatch(courseLoadingStart());
    try {
      const { data } = await CourseService.getCourses();
      dispatch(courseLoadingSuccess(data));
    } catch (error) {
      dispatch(courseLoadingFailure());
    }
  };
  const getMentor = async () => {
    dispatch(mentorLoadingStart());
    try {
      const data = await MentorService.getMentors();
      dispatch(mentorLoadingSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(mentorLoadingFailure());
    }
  };
  const getStudents = async () => {
    dispatch(studentsLoadingStart());
    try {
      const { data } = await StudentService.getStudents();
      dispatch(studentsLoadingSuccess(data));
    } catch (error) {
      dispatch(studentsLoadingFailure());
    }
  };

  const {course } = useSelector(state => state.StudentReducer)
  useEffect(() => {
    !auth ? navigate("/authorization") : null;
    getCourse();
    getMentor();
    getStudents();
  }, []);

  return !auth ? (
    <Authorization />
  ) : (
    <>
      <div className="d-flex">
        <div>
          <SideBar />
        </div>
        <div className="w-100">
          <Navbar />
          <div className="scroll-bar">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/auth" element={<Authorization />} />
              <Route path="/courses-add" element={<CreateCourse />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<Course />} />
              <Route path="/edit-course/:id" element={<CourseEdit />} />
              <Route path="/students" element={<Students />} />
              <Route path="/add-mentor" element={<AddMentor />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/edit-mentor/:id" element={<EditMentor />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
