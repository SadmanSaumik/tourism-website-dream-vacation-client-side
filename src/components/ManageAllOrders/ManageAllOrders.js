import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://gory-cheateau-99451.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure?");
    if (procced) {
      fetch(`https://gory-cheateau-99451.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div className="container booking-wrapper">
      <h2 className="text-center mb-5">Manage All Orders: {orders.length}</h2>
      <div className="row booking-row">
        {orders.map((order) => (
          <div className="col-md-4">
            <img className="img-fluid card-img" src={order.pic} alt="" />
            <h3>{order.service}</h3>
            <p>Available:{order.description}</p>
            <button
              onClick={() => {
                handleDelete(order._id);
              }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
