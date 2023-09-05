import { Link } from "react-router-dom";
const CourseCard = ({ image, brief_info, name, id }) => {
  return (
    <div className="card shadow-sm text-center">
      <div className="card-image">
        <img src={image} alt={name} className="w-100" />
      </div>
      <div className="card-body">
        <div className="card-title">
          <h4>{name}</h4>
        </div>
        <p className="card-text">{brief_info}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <Link to={`/course/${id}`}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </Link>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
