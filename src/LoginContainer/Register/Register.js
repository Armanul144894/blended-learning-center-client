import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.warn("please verify your email address");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  const handleAccepted = (event) => {
    setAccept(event.target.checked);
  };
  return (
    <div className="card-container mx-auto my-5 ">
      <Card className="shadow ">
        <Card.Body>
          <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>photoURL</Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={handleAccepted}
                label={
                  <>
                    Accepts <Link to="/terms">Terms and Conditions</Link>
                  </>
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Text className="text-danger">{error}</Form.Text>
            </Form.Group>

            <Button
              className="w-100 my-2"
              variant="primary"
              type="submit"
              disabled={!accept}
            >
              Register
            </Button>

            <div className="my-2 text-center">
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
            <ToastContainer position="top-center" />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;
