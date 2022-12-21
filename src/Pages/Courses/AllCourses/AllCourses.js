import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllCourseCard from "./AllCourseCard/AllCourseCard";

const AllCourses = () => {
  const [allCourses, setAllCourse] = useState([]);

  useEffect(() => {
    fetch("https://blended-learning-center-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);
  return (
    <div>
      <div className="course-container">
        {allCourses.map((courses) => (
          <AllCourseCard key={courses._id} courses={courses}></AllCourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
