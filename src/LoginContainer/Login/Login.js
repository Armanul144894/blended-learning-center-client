import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";
import { Card } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, login, setLoading, gitSignIn, setUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
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
        setUser(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success("Login Successfully");
        } else {
          toast.warn("Please verify your email");
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
    signIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitSignIn = () => {
    gitSignIn(gitProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" card-container mx-auto mt-5 mb-5">
      <Card className="shadow">
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

            <Button className="w-100 mb-3" variant="primary" type="submit">
              Login
            </Button>
            <ToastContainer position="top-center" />

            <div className="my-4 text-center">
              <p>
                Are you a new user? <Link to="/register">Register</Link>
              </p>
            </div>
          </Form>

          <div className="my-4">
            <div className="hr-sect mt-3">Or With</div>
            <div className="border-5 d-flex justify-content-around">
              <button onClick={handleSignIn} className="btn btn-success">
                <FaGoogle className="text-warning icon"></FaGoogle> Google
              </button>

              <button onClick={handleGitSignIn} className="btn btn-success">
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
