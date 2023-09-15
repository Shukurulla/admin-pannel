import axios from "./api";

const MentorService = {
  async getMentors() {
    const { data } = await axios.get("/mentors");
    console.log(data);
    return data.data;
  },
};

export default MentorService;
