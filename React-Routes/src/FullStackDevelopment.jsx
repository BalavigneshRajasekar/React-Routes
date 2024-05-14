import React from "react";

import CourseCard from "./CourseCard";
function FullStackDevelopment() {
  return (
    <div>
      <div className="mt-4 d-flex justify-content-center gap-5 flex-wrap">
        <CourseCard
          title={"Full stack development "}
          pic={"fsd1.jpg"}
          author={"By Isha Sharma"}
          date={"25 Mar,2023"}
          duration={"5 min read"}
        ></CourseCard>
        <CourseCard
          title={"Top 10 Full stack Framework "}
          pic={"fsd2.jpg"}
          author={"By Isha Sharma"}
          date={"25 Dec,2023"}
          duration={"10 min read"}
        ></CourseCard>
        <CourseCard
          title={"6 essential prerequestite for react "}
          pic={"fsd3.jpg"}
          author={"By Isha Sharma"}
          date={"02 Apr,2024"}
          duration={"15 min read"}
        ></CourseCard>
      </div>
    </div>
  );
}

export default FullStackDevelopment;
