import React from "react";

import CourseCard from "./CourseCard";

function CyberSecurity() {
  return (
    <div>
      <div className="mt-4 d-flex justify-content-center gap-5 flex-wrap">
        <CourseCard
          title={"Cybersecurity Vs Ethical Hacking: Top 10 Differences"}
          pic={"cs1.webp"}
          author={"By Tushar Vinocha"}
          date={"25 Nov,2022"}
          duration={"5 min read"}
        ></CourseCard>
        <CourseCard
          title={"8 Different Types of Cybersecurity and Threats Involved"}
          pic={"cs2.webp"}
          author={"By Tushar Vinocha"}
          date={"12 Dec,2023"}
          duration={"10 min read"}
        ></CourseCard>
        <CourseCard
          title={
            "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!"
          }
          pic={"cs3.webp"}
          author={"By Tushar Vinocha"}
          date={"02 Apr,2024"}
          duration={"15 min read"}
        ></CourseCard>
      </div>
    </div>
  );
}

export default CyberSecurity;
