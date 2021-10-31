import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://gory-cheateau-99451.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleBuyBtn = (index) => {
    const bookedService = services[index];
    bookedService.email = user.email;
    //console.log(bookedService);
    fetch("https://gory-cheateau-99451.herokuapp.com/addbooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert(`You have Booked ${bookedService.service}`);
        }
      });
  };
  return (
    <div className="services-wrapper-top">
      <div className="container services-wrapper">
        <h2>OUR TOUR PACKAGES</h2>
        <p className="description">THE BEST RECOMMENDATION</p>
        <div className="row gy-5">
          {services.map((service, index) => (
            <Service
              handleBuyBtn={handleBuyBtn}
              index={index}
              key={service._id}
              service={service}
            ></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
