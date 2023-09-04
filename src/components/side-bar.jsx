import { Link } from "react-router-dom";
import { sideNavigations } from "../constants";
import { useState } from "react";
const SideBar = () => {
  const [showSide, setShowSide] = useState(false);
  const [selectMenu, setSelectMenu] = useState("Dasboard");

  const updateSselectMenu = (name) => {
    setSelectMenu(name);
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
          {sideNavigations.map((item) => {
            return (
              <li
                className={`d-flex gap-2 align-items-center ${
                  selectMenu == item.label && "selected"
                }`}
                onClick={() => updateSselectMenu(item.label)}
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
        <p>
          <i className="bi bi-box-arrow-right"></i>
          {showSide ? <span>Logout</span> : ""}
        </p>
      </div>
    </div>
  );
};

export default SideBar;
