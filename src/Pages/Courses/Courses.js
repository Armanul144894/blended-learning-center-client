import React from "react";
import { useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Loading from "../../Shared/Loading/Loading";
import SideBar from "../../Shared/SideBar/SideBar";
import AllCourses from "./AllCourses/AllCourses";
// import SideBar from "../Shared/SideBar/SideBar";

const Courses = () => {
  const { loading } = useContext(AuthContext);

  useTitle("Courses");
  if (loading) {
    return (
      <div className="text-center">
        <Loading></Loading>
      </div>
    );
  }
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
          <AllCourses></AllCourses>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;
