const CourseCard = ({ image, brief_info, name }) => {
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
            <button type="button" className="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small className="text-body-secondary">9 mins</small>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
