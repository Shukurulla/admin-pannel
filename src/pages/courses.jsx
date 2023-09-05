import { useEffect, useState } from "react";
import { CourseCard } from "../components";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
    console.log(courses);
  }, []);
  return (
    <div className="p-3">
      <div className="row ">
        {courses?.map((item) => (
          <div className="col-lg-4 col-md-4 mt-3 col-sm-6" key={item.name}>
            <CourseCard
              name={item.name}
              image={item.courseImage}
              brief_info={item.brief_info}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
