import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { handleLogOut, user } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <NavLink to="/home" className="items">
            <h3 className="logo-text">Dream Vacation</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink to="/home" className="items">
                <li>Home</li>
              </NavLink>

              {user.email ? (
                <>
                  {" "}
                  <NavLink to="/my-booking" className="items">
                    <li>My Bookings</li>
                  </NavLink>
                  <NavLink to="/add-destination" className="items">
                    <li>Add A Destination</li>
                  </NavLink>
                  <NavLink to="/manage-all-orders" className="items">
                    <li>Manage All Orders</li>
                  </NavLink>
                  <li onClick={handleLogOut} className="items">
                    Logout
                  </li>
                </>
              ) : (
                <NavLink to="/login" className="items">
                  <li>Login/Register</li>
                </NavLink>
              )}
            </ul>
            <span className="navbar-text">{user?.email}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
