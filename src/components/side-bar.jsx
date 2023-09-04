import { Link } from "react-router-dom";
import { sideNavigations } from "../constants";
const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="admin-head d-flex align-items-center justify-content-between py-2">
        <h4>Admin</h4>
        <i className="bi bi-list"></i>
      </div>
      <div className="menu">
        <ul className="m-0 p-0">
          {sideNavigations.map((item) => {
            return (
              <li className="d-flex gap-2 align-items-center" key={item.label}>
                <Link to={item.path}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
