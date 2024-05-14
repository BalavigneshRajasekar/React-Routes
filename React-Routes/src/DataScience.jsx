import React from "react";

import CourseCard from "./CourseCard";
function DataScience() {
  return (
    <div>
      <div className="mt-4 d-flex justify-content-center gap-5 flex-wrap">
        <CourseCard
          title={"Roles and responsibilities of a DataScientist"}
          pic={"ds1.webp"}
          author={"By Jaishree Tomar"}
          date={"25 Jun,2023"}
          duration={"5 min read"}
        ></CourseCard>
        <CourseCard
          title={"12 Real-World Data Science Examples: Power Of Data Science"}
          pic={"ds2.webp"}
          author={"By Jaishree Tomar"}
          date={"15 Mar,2023"}
          duration={"10 min read"}
        ></CourseCard>
        <CourseCard
          title={"Can A Commerce Student Do Data Science ?"}
          pic={"ds3.webp"}
          author={"By Saakshi Priyadarshini"}
          date={"02 Apr,2021"}
          duration={"15 min read"}
        ></CourseCard>
      </div>
    </div>
  );
}

export default DataScience;
