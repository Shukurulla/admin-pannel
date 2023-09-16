import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Authorization = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const auth = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:2000/authorization", {
      name,
      password,
    });
    if (data.msg) {
      localStorage.setItem("Auth", true);
      navigate("/");
    } else {
      localStorage.setItem("Auth", false);
    }
    window.location.reload();
  };

  return (
    <div className="auth-box ">
      <main className="form-signin w-25 m-auto text-center">
        {err && (
          <h2 className="text-danger">username yoki password hato kiritildi</h2>
        )}
        <form onSubmit={(e) => auth(e)}>
          <img
            className="mb-4"
            src="https://pc.uz/storage/publications/October2020/q.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Kirish
          </button>
        </form>
      </main>
    </div>
  );
};

export default Authorization;
