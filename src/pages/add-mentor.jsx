import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MentorService from "../service/mentor";
import {
  mentorLoadingFailure,
  mentorLoadingStart,
  mentorLoadingSuccess,
} from "../slice/mentor";
import FileBase64 from "react-file-base64";
import { uiLoadingSuccess } from "../slice/ui";

const AddMentor = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [telegramUrl, setTelegramUrl] = useState();
  const [instagramUrl, setInstagramUrl] = useState();
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uiLoadingSuccess("add-mentor"));
  }, []);
  const mentor = {
    name,
    phoneNumber: phone,
    image: image,
    telegramUrl,
    instagramUrl,
    course,
  };

  const formData = async (e) => {
    e.preventDefault();
    console.log("dasda");
    dispatch(mentorLoadingStart());
    try {
      const data = await MentorService.addMentor(mentor);
      console.log(data);
      dispatch(mentorLoadingSuccess(data));
    } catch (error) {
      dispatch(mentorLoadingFailure());
    }
    navigate("/mentors");
  };

  return (
    <div className="container">
      <h2 className="text-center">Add Mentor</h2>
      <form onSubmit={(e) => formData(e)}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Mentor ismi"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Kurs nomi"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="number"
              placeholder="Telefon raqami"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Telegram usernamemi"
              value={telegramUrl}
              onChange={(e) => setTelegramUrl(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Instagram usernamemi"
              value={instagramUrl}
              onChange={(e) => setInstagramUrl(e.target.value)}
            />
          </div>
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setImage(base64)}
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Add Mentor
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMentor;
