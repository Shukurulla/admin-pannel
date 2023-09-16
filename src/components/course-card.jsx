import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseService from "../service/course";
import { courseIdLoading, courseLoadingStart, courseLoadingSuccess } from "../slice/course";

const CourseCard = ({ image, brief_info, name, id }) => {
  const dispatch = useDispatch()
  const onDelete = async () => {
    dispatch(courseLoadingStart())
    try {
      const {data} = await CourseService.deleteCourse(id)
      console.log(data);
      dispatch(courseLoadingSuccess(data))
    } catch (error) {
      
    }
  };
  

  return (
    <div className="card shadow-sm text-center h-100">
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
            <Link to={`/edit-course/${id}`}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </Link>
          </div>
          <button className="btn btn-outline-danger" onClick={() => onDelete()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
