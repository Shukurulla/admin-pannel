import { Link, useNavigate } from "react-router-dom";
import { sideNavigations } from "../constants";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
const SideBar = () => {
  const [showSide, setShowSide] = useState(true);
  const navigate = useNavigate();

  const { active } = useSelector((state) => state.ui);

  const logOut = async () => {
    localStorage.removeItem("Auth");
    window.location.reload();
    navigate("/authorization");
  };

  return (
    <div
      className={`side-bar ${!showSide ? "show" : ""}`}
      style={{ width: !showSide && "80px" }}
    >
      <div className="w-100">
        <div
          className={`admin-head d-flex align-items-center justify-content-${
            showSide ? "between" : "center"
          } py-2`}
        >
          {showSide ? <h4 className="m-0 p-0">Admin</h4> : null}
          <i className="bi bi-list" onClick={() => setShowSide(!showSide)}></i>
        </div>
        <ul className="menu">
          {sideNavigations.map((item, idx) => {
            return (
              <li
                className={`d-flex gap-2 align-items-center ${
                  active == item.active && "selected"
                }`}
                key={item.label}
              >
                <Link to={item.path}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  {showSide ? <span>{item.label}</span> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="side-footer">
        <p onClick={() => logOut()}>
          <i className="bi bi-box-arrow-right"></i>
          {showSide ? <span>Logout</span> : ""}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
