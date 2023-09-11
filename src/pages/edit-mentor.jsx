import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../context";

const EditMentor = () => {
  const { id } = useParams();
  const mentors = JSON.parse(localStorage.getItem("mentors"));
  const mentor = mentors.filter((c) => c._id === id);
  console.log(mentor);
  const [name, setName] = useState(mentor[0].name);
  const [phone, setPhone] = useState(mentor[0].phoneNumber);
  const [course, setCourse] = useState(mentor[0].course);
  const [telegramUrl, setTelegramUrl] = useState(mentor[0].telegramUrl);
  const [instagramUrl, setInstagramUrl] = useState(mentor[0].instagramUrl);
  const [gender, setGender] = useState(mentor[0].gender);

  const male =
    "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-66.jpg";
  const female =
    "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-48.jpg?w=1800";

  const { setMentors, setSelectItem } = useContext(Context);
  const navigate = useNavigate("");
  useEffect(() => {
    setSelectItem(5);
    fetch("http://localhost:3001/mentors")
      .then((res) => res.json())
      .then((data) => {
        setMentors(data), localStorage.setItem("mentors", JSON.stringify(data));
      });
  }, []);

  const formData = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/edit-mentor/${id}`, {
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
      }),
    });
    navigate("/mentors");
  };

  return (
    <div className="container">
      <h2 className="text-center">Edit Mentor</h2>
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
              value={gender}
              onChange={(e) => (setGender(e.target.value), console.log(gender))}
            >
              <option value="erkak">Erkak</option>
              <option value="ayol">Ayol</option>
            </select>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Edit Mentor
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMentor;
