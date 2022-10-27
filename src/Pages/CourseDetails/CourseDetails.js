import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./CourseDetails.css";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  const { title1, title2, course1, course2, thumbnail_url, image_url, name } =
    course;
  return (
    <div className="container mx-auto mt-5 ">
      <div className="text-center">
        <h2 className="text-center">All the {name} course content is here.</h2>
        <button className="btn btn-primary text-center">
          Download Pdf <FaDownload></FaDownload>{" "}
        </button>
      </div>
      <Row className="container h-100 mx-auto my-5">
        <Col lg="7">
          <div className="mb-5">
            <div>
              <h2>{title1}</h2>
              <p>{course1}</p>
              <Link to="/packages">
                <button className="btn btn-primary">Get Access</button>
              </Link>
            </div>
          </div>
        </Col>
        <Col lg="5">
          <Card className="mb-5">
            <Card.Body>
              <img className="w-100 h-100 rounded" src={image_url} alt="" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="container h-100 mx-auto my-5">
        <Col lg="5">
          <Card className="mb-5">
            <Card.Body className="mb-5">
              <img className="w-100 h-100 rounded" src={thumbnail_url} alt="" />
            </Card.Body>
          </Card>
        </Col>
        <Col lg="7">
          <div className="mb-5">
            <div className="mb-5">
              <h2>{title2}</h2>
              <p>{course2}</p>
              <Link to="/packages">
                <button className="btn btn-primary">Get Access</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <Link to="/courses">
          <button className="btn btn-primary ">Go Back To Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
