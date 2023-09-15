import axios from "./api";

const CourseService = {
  async getCourses() {
    const { data } = await axios.get("/courses");

    return data.data;
  },
};

export default CourseService;
