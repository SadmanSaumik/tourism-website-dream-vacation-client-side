import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import "./Booking.css";
const Booking = () => {
  const { user } = useAuth();
  const email = user.email;
  const [orders, setorders] = useState([]);
  useEffect(() => {
    fetch(`https://gory-cheateau-99451.herokuapp.com/booking/${email}`)
      .then((res) => res.json())
      .then((data) => setorders(data));
  }, [email]);

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
            setorders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      <div className="container booking-wrapper">
        <div className="row">
          <div className="col-md-6">
            <h2>My Orders : {orders.length}</h2>
          </div>
          <div className="col-md-6">
            <p className="text-end mt-3">Email: {email}</p>
          </div>
        </div>

        <div className="row booking-row">
          {orders.map((order) => (
            <MyOrder
              key={order._id}
              order={order}
              handleDelete={handleDelete}
            ></MyOrder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
