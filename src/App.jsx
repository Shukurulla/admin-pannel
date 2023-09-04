import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/side-bar";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "adas",
        phone: "090798213",
        course: "android",
      }),
    });
  });
  return (
    <>
      <div className="d-flex">
        <SideBar />
        <Navbar />
      </div>
    </>
  );
}

export default App;
