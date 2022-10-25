import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import SideBar from "../Shared/SideBar/SideBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
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

export default Main;
