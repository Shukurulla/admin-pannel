import React, { useContext, useEffect, useState } from "react";
import male from "../../public/male.jpg";
import female from "../../public/female.jpg";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

const AddMentor = () => {
  const { setSelectItem } = useContext(Context);
  useEffect(() => {
    setSelectItem(4);
  }, []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [telegramUrl, setTelegramUrl] = useState();
  const [instagramUrl, setInstagramUrl] = useState();
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("erkak");

  const navigate = useNavigate();

  const male =
    "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-66.jpg";
  const female =
    "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-48.jpg?w=1800";

  const formData = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/add-mentor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phoneNumber: phone,
        image: gender == "erkak" ? male : female,
        telegramUrl,
        instagramUrl,
        course,
        gender,
      }),
    });
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
          <div className="col-lg-6 col-md-6 col-sm-12">
            <select
              className="form-control"
              value={image}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="erkak">Erkak</option>
              <option value="ayol">Ayol</option>
            </select>
          </div>
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
