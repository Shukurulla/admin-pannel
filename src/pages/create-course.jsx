import { Input } from "../ui";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [mentor, setMentor] = useState("");
  const [briefInfo, setBriefInfo] = useState("");
  const [tech, setTech] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    const slug = courseName.replace(" ", "").toLocaleLowerCase();

    const course = {
      name: courseName,
      mentor,
      brief_info: briefInfo,
      info,
      duration,
      price,
      tech,
      courseImage: image,
      slug,
    };

    navigate("/courses");
    fetch("http://localhost:3001/create-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        navigate("/");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/courses-add");
      });
  };

  return (
    <div className="container">
      <div className="p-3">
        <form onSubmit={(e) => formSubmit(e)}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                label={"Course Name"}
                name={"name"}
                state={courseName}
                setState={setCourseName}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Input
                label={"Mentor  Name"}
                name={"mentor"}
                state={mentor}
                setState={setMentor}
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="form-select"
              >
                <option value="2oy-3oy">2oy-3oy</option>
                <option value="3oy-6oy">3oy-6oy</option>
                <option value="4oy">4oy</option>
                <option value="6oy-9oy">6oy-9oy</option>
              </select>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <select
                className="form-select"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="200 000sum">200 000sum</option>
                <option value="220 000sum">220 000sum</option>
                <option value="250 000sum">250 000sum</option>
                <option value="300 000sum">300 000sum</option>
                <option value="350 000sum">350 000sum</option>
                <option value="400 000sum">400 000sum</option>
              </select>
            </div>
          </div>
          <Input
            label={"Otiladigan texnologiyalar"}
            state={tech}
            setState={setTech}
          />
          <br />
          <Input
            label={"Kurs rasmi"}
            state={image}
            setState={setImage}
            type={"url"}
          />
          <textarea
            name="brief-info"
            className="form-control mt-3"
            placeholder="Kusr haqida qisqacha"
            style={{ height: "150px" }}
            value={briefInfo}
            onChange={(e) => setBriefInfo(e.target.value)}
          ></textarea>
          <textarea
            name="info"
            className="form-control my-3"
            placeholder="Kusr haqida toliq"
            style={{ height: "200px" }}
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          ></textarea>
          <button className="btn btn-primary">Kurs Qoshish</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
