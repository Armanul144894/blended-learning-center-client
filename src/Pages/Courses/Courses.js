import React from "react";
import Home from "../Home/Home";
import { Col, Row } from "react-bootstrap";
import SideBar from "../../Shared/SideBar/SideBar";
// import SideBar from "../Shared/SideBar/SideBar";

const Courses = () => {
  return (
    <div>
      <Row className="container mx-auto my-5">
        <Col lg="4">
          <SideBar></SideBar>
        </Col>
        <Col lg="8">
          <Home></Home>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
