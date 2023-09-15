import { useEffect } from "react";
import { CourseCard } from "../components";
import { useSelector } from "react-redux";
const Courses = () => {
  useEffect(() => {}, []);
  const { courses } = useSelector((state) => state.CourseReducer);
  console.log(courses);
  return (
    <div className="p-3">
      <div className="container">
        <div className="row ">
          {courses.map((item) => (
            <div className="col-lg-4 col-md-4 mt-3 col-sm-6" key={item.name}>
              <CourseCard
                name={item.name}
                image={item.courseImage}
                brief_info={item.brief_info}
                id={item._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
