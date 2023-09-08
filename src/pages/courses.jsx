import { useEffect, useContext } from "react";
import { CourseCard } from "../components";
import { Context } from "../context";
const Courses = () => {
  const { courses, setCourses, setSelectItem } = useContext(Context);

  useEffect(() => {
    setSelectItem(1);
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
    console.log(courses);

  }, []);
  return (
    <div className="p-3">
      <div className="container">
        <div className="row ">
          {courses?.map((item) => (
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
