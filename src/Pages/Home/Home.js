import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllCourses from "../AllCourses/AllCourses";

const Home = () => {
  const [allCourses, setAllCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h2>This is home component</h2>
      <div className="course-container">
        {allCourses.map((courses) => (
          <AllCourses key={courses._id} courses={courses}></AllCourses>
        ))}
      </div>
    </div>
  );
};

export default Home;
