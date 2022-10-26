import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const { title1, title2, course1, course2, thumbnail_url } = course;
  return (
    <div className="container mx-auto ">
      <Row className="container h-100 mx-auto my-5">
        <Col lg="8">
          <Card className="mb-5">
            <Card.Body>
              <h2>{title1}</h2>
              <p>{course1}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="mb-5">
            <Card.Body>
              <img className="w-100 h-100 rounded" src={thumbnail_url} alt="" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="container h-100 mx-auto my-5">
        <Col lg="4">
          <Card className="mb-5">
            <Card.Body className="mb-5">
              <img className="w-100 h-100 rounded" src={thumbnail_url} alt="" />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8">
          <Card className="mb-5">
            <Card.Body className="mb-5">
              <h2>{title2}</h2>
              <p>{course2}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CourseDetails;
