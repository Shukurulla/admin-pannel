import axios from "./api";

const MentorService = {
  async getMentors() {
    const { data } = axios.get("/mentors");
    return data;
  },
};

export default MentorService;
