import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" name="userName" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>photoURL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Enter email" />
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
            // onClick={handleAccepted}
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

        <Button variant="primary" type="submit" disabled={!accept}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
