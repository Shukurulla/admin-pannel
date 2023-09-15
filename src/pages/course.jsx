import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Course = () => {
  const { courses } = useSelector((state) => state.CourseReducer);
  const { id } = useParams();
  const course = courses.filter((c) => c._id == id);
  console.log(course);
  return course === undefined ? (
    <p>Loading</p>
  ) : (
    <div className="p-3 container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <h3>{course.name}</h3>
          <p>{course.info}</p>
          <hr />
          <h4 className="d-flex justify-content-between fw-bold">
            <span>O`qituvchi:</span>
            <span>{course.mentor}</span>
          </h4>
          <ul className="p-0 my-3">
            <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
              <div className="d-flex gap-3">
                <i className="bi bi-journal-bookmark-fill"></i>
                <span>Darslar</span>
              </div>
              <div>{course.course}</div>
            </li>
            <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
              <div className="d-flex gap-3">
                <i className="bi bi-alarm"></i>
                <span>Davomiyligi</span>
              </div>
              <div>{course.duration}</div>
            </li>
            <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
              <div className="d-flex gap-3">
                <i className="bi bi-award"></i>
                <span>Seritficat</span>
              </div>
              <div>{course.sertificat}</div>
            </li>
            <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
              <div className="d-flex gap-3">
                <i className="bi bi-currency-dollar"></i>
                <span>Kurs Narxi</span>
              </div>
              <div>{course.price}</div>
            </li>
            <li className="d-flex align-items-center justify-content-between fw-bold mt-2">
              <div className="d-flex gap-3">
                <i className="bi bi-code-slash"></i>
                <span>Texnologiyalar</span>
              </div>
              <div>{course.tech}</div>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={course.courseImage} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Course;
