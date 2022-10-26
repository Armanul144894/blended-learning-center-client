import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllCourses.css";

const AllCourses = ({ courses }) => {
  const { _id, name, thumbnail_url, category_id } = courses;
  //   console.log(courses);

  return (
    <div className="">
      <Card className="w-75">
        <Card.Img className="course-img" variant="top" src={thumbnail_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/courses/${_id}`}>
            <Button variant="primary">Course Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AllCourses;
