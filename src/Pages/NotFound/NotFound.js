import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center position-absolute top-50 start-50 translate-middle">
      <h2 className="text-danger">Opps!!</h2>
      <h4 className="text-danger">404 Not Found</h4>
      <p>
        Go back to: <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
