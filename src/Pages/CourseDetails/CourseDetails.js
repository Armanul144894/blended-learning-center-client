import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./CourseDetails.css";

import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();

  const {
    category_id,
    title1,
    title2,
    course1,
    course2,
    thumbnail_url,
    image_url,
    name,
    details,
  } = course;

  return (
    <div className="container mx-auto mt-5 ">
      <div className="text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h2 className="text-center me-5">
            All the {name} course content is here.
          </h2>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-primary ">
                <FaDownload></FaDownload>
              </button>
            )}
          </Pdf>
        </div>
        <p className="text-justify">{details}</p>
      </div>
      <div ref={ref}>
        <Card>
          <Row className="container h-100 mx-auto my-5">
            <Col lg="7">
              <div className="mb-5">
                <div>
                  <h2>{title1}</h2>
                  <p>{course1}</p>
                  <Link to={`/packages/${category_id}`}>
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
        </Card>

        <Card>
          <Row className="container h-100 mx-auto my-5">
            <Col lg="5">
              <Card className="mb-5">
                <Card.Body className="mb-5">
                  <img
                    className="w-100 h-100 rounded"
                    src={thumbnail_url}
                    alt=""
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg="7">
              <div className="mb-5">
                <div className="mb-5">
                  <h2>{title2}</h2>
                  <p>{course2}</p>
                  <Link to={`/packages/${category_id}`}>
                    <button className="btn btn-primary">Get Access</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="text-center">
        <Link to="/courses">
          <button className="btn btn-primary my-5">Go Back To Courses</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
