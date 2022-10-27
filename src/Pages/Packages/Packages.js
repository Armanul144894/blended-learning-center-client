import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
const Packages = () => {
  const course = useLoaderData();
  const { name, header, category_id } = course;
  return (
    <div className="my-5">
      <div className="mb-5 text-center">
        <h1>{header}</h1>
      </div>
      <Row className="container mx-auto">
        <Col className="mb-4" lg="4">
          <Card>
            <Card.Header className="text-primary fw-bold text-center">
              Free
            </Card.Header>
            <Card.Body>
              <Card.Title>$0/mo</Card.Title>
              <Card.Text>
                <p>
                  <FaCheckCircle></FaCheckCircle>10 courses included
                </p>
                <p>
                  <FaCheckCircle></FaCheckCircle>10 courses included
                </p>
                <p>
                  <FaCheckCircle></FaCheckCircle>Help center access
                </p>
              </Card.Text>
              <Button className="w-100" variant="primary">
                Purchase
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4" lg="4">
          <Card>
            <Card.Header className="text-primary fw-bold text-center">
              Pro
            </Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>
                  <FaCheckCircle></FaCheckCircle>10 courses included
                </p>
                <p>
                  <FaCheckCircle></FaCheckCircle>Get 10 courses more
                </p>
                <p>
                  <FaCheckCircle></FaCheckCircle>Help center access
                </p>
              </Card.Text>
              <Button className="w-100" variant="primary">
                Purchase
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-4" lg="4">
          <Card>
            <Card.Header className="text-primary fw-bold text-center">
              Premium
            </Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <p>
                  <FaCheckCircle></FaCheckCircle>10 courses included
                </p>
                <p>
                  <FaCheckCircle></FaCheckCircle>All courses here
                </p>
                <p>
                  <FaCheckCircle></FaCheckCircle>Help center access
                </p>
              </Card.Text>
              <Button className="w-100" variant="primary">
                Purchase
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center">
        <Link to={`/course/${category_id}`}>
          <button className="btn btn-primary">Go Back to Course Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Packages;
