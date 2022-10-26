import React from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => {
        alert("Sign Out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="header fw-bold">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <img className="header-img rounded-circle me-2" src={logo} alt="" />
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
              <>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName} </span>
                    <button onClick={handelLogout} className="rounded ms-2">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="rounded ms-2">Login</button>
                    </Link>
                    <Link to="/register">
                      <button className="rounded ms-2">Register</button>
                    </Link>
                  </>
                )}
              </>

              {user?.photoURL ? (
                <Image
                  className="ms-3"
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUserCircle className="ms-2"></FaUserCircle>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
