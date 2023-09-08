import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context";
import { Input } from "../ui";
import { useNavigate } from "react-router-dom";

const CourseEdit = () => {
  const { id } = useParams();

  const courses = JSON.parse(localStorage.getItem("courses"));
  const course = courses.filter((c) => c._id == id);
  const [courseName, setCourseName] = useState(course[0].name);
  const [mentor, setMentor] = useState(course[0].mentor);
  const [briefInfo, setBriefInfo] = useState(course[0].brief_info);
  const [tech, setTech] = useState(course[0].tech);
  const [info, setInfo] = useState(course[0].info);
  const [image, setImage] = useState(course[0].courseImage);
  const [duration, setDuration] = useState(course[0].duration);
  const [price, setPrice] = useState(course[0].price);
  const navigate = useNavigate();
  const slug = courseName.replace(" ", "").toLocaleLowerCase();

  const courseVal = {
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

  const formEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/edit-course/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseVal),
    });
    navigate("/courses");
  };

  return (
    <div className="container">
      <div className="p-3">
        <form onSubmit={(e) => formEdit(e)}>
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

export default CourseEdit;
