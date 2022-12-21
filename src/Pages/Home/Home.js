import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllCourses from "../AllCourses/AllCourses";
import Banner from "./Banner/Banner";
import Order from "./Order/Order";

const Home = () => {
  const [allCourses, setAllCourse] = useState([]);

  useEffect(() => {
    fetch("https://blended-learning-center-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="my-5">
        <Banner></Banner>
      </div>
      <div className="course-container">
        {allCourses.map((courses) => (
          <AllCourses key={courses._id} courses={courses}></AllCourses>
        ))}
      </div>

      <div className="my-5">
        <Order></Order>
      </div>
    </div>
  );
};

export default Home;
