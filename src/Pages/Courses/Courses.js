import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../../Shared/SideBar/SideBar";

const Courses = () => {
  return (
    <div>
      <Row className="container mx-auto">
        <Col lg="4">
          <SideBar></SideBar>
        </Col>
        <Col lg="8">
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
