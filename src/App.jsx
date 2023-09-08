import "./App.css";
import { useEffect, useState } from "react";
import { SideBar, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { CreateCourse, Course, Courses } from "./pages";
import { Context } from "./context";
import CourseEdit from "./pages/course-edit";
import Students from "./components/students";
import Main from "./pages/main";

function App() {
  const [courses, setCourses] = useState(null);
  const [students, setStudents] = useState(null);
  const [selectItem, setSelectItem] = useState(0);

  const value = {
    courses,
    setCourses,
    students,
    setStudents,
    selectItem,
    setSelectItem,
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
  }, []);

  return (
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
                <Route path="/courses-add" element={<CreateCourse />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:id" element={<Course />} />
                <Route path="/edit-course/:id" element={<CourseEdit />} />
                <Route path="/students" element={<Students />} />
              </Routes>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
