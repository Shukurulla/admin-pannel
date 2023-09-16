import axios from "./api";

const MentorService = {
  async getMentors() {
    const { data } = await axios.get("/mentors");
    return data.data;
  },
  async addMentor(mentor) {
    const { data } = await axios.post("/add-mentor", {mentor});
    return data.data;
  },
  async deleteMentor(id) {
    const { data } = await axios.delete(`/delete-mentor/${id}`);
    return data.data;
  },
  async editMentor(id,mentor) {
    const { data } = await axios.post(`/edit-mentor/${id}`, {mentor});
    return data.data;
  },
};

export default MentorService;
