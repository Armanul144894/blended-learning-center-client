import React from "react";
import { Card } from "react-bootstrap";
import order from "../../../assets/logo/order.gif";

const Order = () => {
  return (
    <div>
      <h2 className="my-5 text-center fw-bold">Home Delivery</h2>
      <Card className="bg-dark text-white">
        <Card.Img src={order} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-black text-center fw-bold">
            Order Now
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Order;
