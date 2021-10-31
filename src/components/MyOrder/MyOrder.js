import React from "react";
import "./MyOrder.css";
const MyOrder = (props) => {
  const { description, pic, service, _id } = props.order;
  return (
    <div className="col-md-4">
      <img className="img-fluid card-img" src={pic} alt="" />
      <h3>{service}</h3>
      <p>Available:{description}</p>
      <button
        onClick={() => {
          props.handleDelete(_id);
        }}
        className="btn btn-primary"
      >
        Delete
      </button>
    </div>
  );
};

export default MyOrder;
