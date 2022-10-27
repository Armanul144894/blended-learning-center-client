import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCheckCircle } from "react-icons/fa";
const Packages = () => {
  return (
    <div>
      <h2>Packages</h2>
      <Row className="container mx-auto">
        <Col lg="4">
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
                  <FaCheckCircle></FaCheckCircle>Help center access
                </p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
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
                  <FaCheckCircle></FaCheckCircle>Help center access
                </p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="4">
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
                  <FaCheckCircle></FaCheckCircle>Help center access
                </p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Packages;
