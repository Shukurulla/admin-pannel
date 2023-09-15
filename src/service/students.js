import axios from "./api";
const StudentService = {
  async getStudents() {
    const { data } = await axios.get("/users");
    return data;
  },
};
export default StudentService;
