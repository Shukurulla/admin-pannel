import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Mentors = () => {
  const { mentors } = useSelector((state) => state.MentorReducer);
  console.log(mentors);

  return (
    <div className="container">
      <div className="row">
        {mentors.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={item._id}>
            <div className="card shadow-sm p-3 text-center h-100">
              <div className="card-image">
                <img src={item.image} className="w-100" />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.course}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="btn-group gap-2">
                  <Link to={`/edit-mentor/${item._id}`}>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </Link>
                </div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
