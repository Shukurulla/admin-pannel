import axios from "./api";
const StudentService = {
  async getStudents() {
    const { data } = await axios.get("/users");
    return data;
  },
  async editStudent(id, student) {
    const { data } = await axios.post(`/update-user/${id}`, {student});
    return data;
  },
  async deleteStudent(id) {
    const { data } = await axios.post(`/delete-user/${id}`);
    return data;
  },
};
export default StudentService;
