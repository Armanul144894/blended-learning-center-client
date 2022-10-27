import React from "react";
import { useContext } from "react";
import { Button, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign Out Successfully");
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
            <Nav className="me-auto d-flex align-items-center">
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
                <style type="text/css">
                  {`.btn-flat {background-color: dark;color: white;}`}
                </style>

                <Button variant="flat" className="ms-3">
                  <FaSun />/<FaMoon />
                </Button>
              </>

              <>
                <Link className="ms-3" to="/blankRoutes">
                  Blank-Routes
                </Link>
              </>
            </Nav>
            <Nav>
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
                          style={{
                            height: "50px",
                            width: "50px",
                            border: "1px solid grey",
                            padding: "2px",
                          }}
                          ref={ref}
                          roundedCircle
                          src={user?.photoURL}
                        />
                      </nav>
                    )}
                  </OverlayTrigger>
                </>
              ) : (
                <Link to="/login">
                  <FaUserCircle className="fs-1 ms-2 text-primary"></FaUserCircle>
                </Link>
              )}

              {user?.uid ? (
                <>
                  <Link
                    to="/profile"
                    className="text-decoration-none text-black fw-semibold my-auto ms-2"
                  >
                    {}
                  </Link>
                  <Button
                    variant="outline-info"
                    onClick={handleLogOut}
                    className="ms-2 my-auto"
                  >
                    Sign Out
                    <ToastContainer position="top-center" />
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="ms-2 my-auto  text-decoration-none"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="ms-2 my-auto  text-decoration-none"
                  >
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
