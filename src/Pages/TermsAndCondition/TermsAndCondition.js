import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <Card className="w-50 mx-auto mt-5">
        <Card.Body>
          <h2>Terms And Conditions.</h2>
          <p>
            Online registration forms make it easy to plan your next event such
            as conferences, workshops or classes. Get started by editing a
            sample registration template, then send an email to your list and
            watch the RSVPs pile up! Ours courses also lets your customers fill
            out the registration form from any smartphone, tablet or computer.
            Our registration templates are pretty simple to edit. Please note
            that you can integrate with payment processors to collect event fees
            as well. You can start by simply creating a basic registration form
            or you can choose from any of our shared registration form template
            examples below. Once you have picked the registration template for
            you, use our form builder to fully format and customize your
            registration form to fit your needs. Try a free online registration
            form templates today!
          </p>
          <p>
            Go back to: <Link to="/register">Register</Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TermsAndCondition;
