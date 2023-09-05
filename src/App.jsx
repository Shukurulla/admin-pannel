import "./App.css";
import { SideBar, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import CreateCourse from "./pages/create-course";
import Courses from "./pages/courses";

function App() {
  return (
    <>
      <div className="d-flex">
        <div>
          <SideBar />
        </div>
        <div className="w-100">
          <Navbar />
          <div className="scroll-bar">
            <Routes>
              <Route path="/courses-add" element={<CreateCourse />} />
              <Route path="/courses" element={<Courses />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
