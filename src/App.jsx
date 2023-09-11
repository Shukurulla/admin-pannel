import "./App.css";
import { useEffect, useState } from "react";
import { SideBar, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { CreateCourse, Course, Courses, CourseEdit, AddMentor } from "./pages";
import { Context } from "./context";
import Students from "./components/students";
import Main from "./pages/main";
import Mentors from "./pages/mentors";
import EditMentor from "./pages/edit-mentor";
import Authorization from "./components/authorization";

function App() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectItem, setSelectItem] = useState(0);
  const [mentors, setMentors] = useState([]);

  const auth = JSON.parse(localStorage.getItem("user"));

  const value = {
    courses,
    setCourses,
    students,
    setStudents,
    selectItem,
    setSelectItem,
    mentors,
    setMentors,
  };
  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        localStorage.setItem("courses", JSON.stringify(data));
      });
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => localStorage.setItem("users", JSON.stringify(data)));

    fetch("http://localhost:3001/mentors")
      .then((res) => res.json())
      .then((data) => {
        setMentors(data), localStorage.setItem("mentors", JSON.stringify(data));
      });
  }, []);

  return !auth ? (
    <Authorization />
  ) : (
    <>
      <Context.Provider value={value}>
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
      </Context.Provider>
    </>
  );
}

export default App;
