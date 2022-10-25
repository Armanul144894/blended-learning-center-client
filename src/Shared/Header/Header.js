import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header fw-bold">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <img className="header-img rounded-circle" src={logo} alt="" />
            <Link to="/">Blended Learning Center</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <>
                <Link className="ms-3" to="/courses">
                  Courses
                </Link>
              </>
              <>
                <Link className="ms-3" to="/faq">
                  FAQ
                </Link>
              </>
              <>
                <Link className="ms-3" to="/blogs">
                  Blogs
                </Link>
              </>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
