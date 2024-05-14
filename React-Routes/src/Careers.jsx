import React from "react";
import CourseCard from "./CourseCard";

function Careers() {
  return (
    <>
      <div className="text-center mt-2 bg-success px-2 py-3 text-light rounded-1 flex-wrap">
        <h1>Currently 2 Opening is going on</h1>
      </div>
      <div className="d-flex justify-content-center mt-3 gap-5">
        <CourseCard
          title={"Graphic Designer"}
          pic={"development.webp"}
          author={
            "Experience in Illustrator and Photoshop ,Figma , Hands on experience in designing UI "
          }
          date={"1-2 Years Exp"}
          duration={"Apply >>>"}
        ></CourseCard>
        <CourseCard
          title={"Web Developer"}
          pic={"webd.webp"}
          author={
            "Experience in Html,Css,Javascript and github ,Hands onn experience in e-com project "
          }
          date={"1-3 Years Exp"}
          duration={"Apply >>>"}
        ></CourseCard>
      </div>
    </>
  );
}

export default Careers;
