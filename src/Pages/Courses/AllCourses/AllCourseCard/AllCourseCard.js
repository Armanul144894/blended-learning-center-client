import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllCourseCard = ({ courses }) => {
  const { name, thumbnail_url, category_id } = courses;
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

export default AllCourseCard;
