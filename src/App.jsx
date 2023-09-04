import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/side-bar";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
          <SideBar />
        </div>
        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
