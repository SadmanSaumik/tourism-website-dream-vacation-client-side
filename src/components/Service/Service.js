import React from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Service.css";

const Service = (props) => {
  const { user } = useAuth();
  //console.log(props);
  const { service, description, _id, pic } = props.service;
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img className="card-img" variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text> Available: {description}</Card.Text>
          {user.email ? (
            <Button
              onClick={() => props.handleBuyBtn(props.index)}
              className="book-btn"
              variant="primary"
            >
              Book Now
            </Button>
          ) : (
            <NavLink to="/services">
              <Button className="book-btn" variant="primary">
                Book Now
              </Button>
            </NavLink>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
