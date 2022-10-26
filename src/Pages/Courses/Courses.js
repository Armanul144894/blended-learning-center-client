import React from "react";
import Home from "../Home/Home";
import { Card, Col, Row } from "react-bootstrap";
import SideBar from "../../Shared/SideBar/SideBar";
// import SideBar from "../Shared/SideBar/SideBar";

const Courses = () => {
  return (
    <div>
      <Row className="container mx-auto">
        <Col lg="4" className="my-5">
          <Card>
            <Card.Body>
              <SideBar></SideBar>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="8">
          <Home></Home>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
