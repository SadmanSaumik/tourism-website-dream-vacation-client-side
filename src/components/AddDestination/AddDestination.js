import axios from "axios";
import React from "react";
import { Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddDestination.css";

const AddDestination = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://gory-cheateau-99451.herokuapp.com/services", data)
      .then((res) => console.log(res));
  };

  return (
    <div className="container add-service-wrapper">
      <h1>Add Destionation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("service", { required: true })}
          placeholder="Package Name"
        />
        <input
          {...register("description", { required: true })}
          placeholder="Description"
        />
        <input
          {...register("pic", { required: true })}
          placeholder="img link"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddDestination;
