import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllCourses.css";
import { FaArrowRight } from "react-icons/fa";

const AllCourses = ({ courses }) => {
  const { _id, name, thumbnail_url, category_id } = courses;
  //   console.log(courses);

  return (
    <div className="container mx-auto mt-5">
      <Card className="">
        <Card.Img className="course-img" variant="top" src={thumbnail_url} />
        <Card.Body className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>

          <Link to={`/course/${category_id}`}>
            <FaArrowRight></FaArrowRight>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllCourses;
