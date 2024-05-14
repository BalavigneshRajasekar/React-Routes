import React from "react";

function CourseCard(props) {
  const { title, pic, author, duration, date } = props;

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={pic}
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <div className="d-flex justify-content-between">
            <p>{date}</p>
            <p>{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
