import axios from "./api";

const CourseService = {
  async getCourses() {
    const { data } = await axios.get("/courses");
    return data;
  },
  async editCourse(id, courseVal) {
    const { data } = await axios.post(`/edit-course/${id}`, { courseVal });
    console.log(data);
    return data;
  },
  async addCourse(course) {
    const {data} =  await axios.post(`/create-course`, { course });
    return data
  },
  async deleteCourse(id) {
    const {data} = await axios.post(`/delete-course/${id}`);
    return data
  },
};

export default CourseService;
