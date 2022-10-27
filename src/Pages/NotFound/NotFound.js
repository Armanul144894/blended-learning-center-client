import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <Card className="shadow">
        <Card.Body>
          <h2 className="text-danger">Opps!!</h2>
          <h4 className="text-danger">404 Not Found</h4>
          <p>
            Go back to: <Link to="/">Home</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFound;
