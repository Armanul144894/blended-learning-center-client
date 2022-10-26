import React from "react";
import { useContext } from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
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
              <>
                <Link className="ms-3" to="/blankRoutes">
                  Blank-Routes
                </Link>
              </>
            </Nav>
            <Nav>
              <>
                {user?.uid ? (
                  <>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          {user?.displayName}
                        </Tooltip>
                      }
                    >
                      {({ ref, ...triggerHandler }) => (
                        <nav
                          {...triggerHandler}
                          className="d-inline-flex align-items-center"
                        >
                          <Image
                            style={{ height: "40px", width: "40px" }}
                            ref={ref}
                            roundedCircle
                            src={user?.photoURL}
                          />
                        </nav>
                      )}
                    </OverlayTrigger>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
