import React from "react";

import CourseCard from "./CourseCard";

function Home() {
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
        <CourseCard
          title={"Roles and responsibilities of a DataScientist"}
          pic={"ds1.webp"}
          author={"By Jaishree Tomar"}
          date={"25 Jun,2023"}
          duration={"5 min read"}
        ></CourseCard>

        {/* Data Science module */}

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

        {/* Cyber security module */}
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

export default Home;
