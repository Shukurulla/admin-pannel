import axios from "./api";

const CourseService = {
  async getCourses() {
    const { data } = await axios.get("/courses");
    return data;
  },
  async editCourse(id, course) {
    const { data } = await axios.post(`/edit-course/${id}`, { course });
    return data;
  },
  addCourse(course) {
    axios.post(`/create-course`, { course });
  },
};

export default CourseService;
