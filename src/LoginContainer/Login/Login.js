import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";
import { Card } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, login, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          alert("Please verify your email");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleSignIn = () => {
    signIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-50 mx-auto mt-5 mb-5">
      <Card className="">
        <Card.Body>
          <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
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
            <Form.Group>
              <Form.Text className="text-danger">{error}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>

          <div className="my-4">
            <div className="hr-sect mt-3">Or With</div>
            <div className="border-5 d-flex justify-content-around">
              <button onClick={handleSignIn} className="btn btn-success">
                <FaGoogle className="text-warning icon"></FaGoogle> Google
              </button>

              <button className="btn btn-success">
                <FaGithubSquare className="icon"></FaGithubSquare> GitHub
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
