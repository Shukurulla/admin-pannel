import React, { useState } from "react";

const AddMentor = () => {
  return (
    <div className="container">
      <form
        action="http://localhost:3001/add-mentor"
        method="post"
        encType="multipart/form-data"
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Mentor ismi"
              name="name"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Kurs nomi"
              name="course"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="number"
              placeholder="Telefon raqami"
              name="phoneNumber"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Telegram usernamemi"
              name="telegramUrl"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Instagram usernamemi"
              name="instagramUrl"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <input className="form-control mb-3" type="file" name="image" />
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
