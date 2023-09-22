import { useEffect } from "react";
import { CourseCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  courseLoadingFailure,
  courseLoadingStart,
  courseLoadingSuccess,
} from "../slice/course";
import { uiLoadingSuccess } from "../slice/ui";
const Courses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiLoadingSuccess("courses"));
    const getCourse = async () => {
      dispatch(courseLoadingStart());
      try {
        const { data } = await CourseService.getCourses();
        dispatch(courseLoadingSuccess(data));
        console.log(data);
      } catch (error) {
        dispatch(courseLoadingFailure());
      }
    };
    getCourse();
  }, []);
  const { courses } = useSelector((state) => state.CourseReducer);
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
