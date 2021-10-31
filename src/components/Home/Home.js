import React from "react";
import { NavLink } from "react-router-dom";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner-wrapper d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6 banner">
              <p>Search Your Next</p>
              <h1>
                DREAM <br /> VACATION
              </h1>
              <p>Explore Beautiful Destination Around The World</p>
              <NavLink to="/services">
                <button className="btn btn-primary hero-button">
                  Book Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-3 feature-box-wrapper">
              <div className="feature-box">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/68CqjLn/travel-07.png"
                  alt=""
                />
                <h3>300+ AMAZING DESTINATIONS</h3>
              </div>
            </div>
            <div className="col-md-3 feature-box-wrapper">
              <div className="feature-box">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/1Z7mVdm/travel-12.png"
                  alt=""
                />
                <h3>
                  COMFORTABLE <br /> HOTEL
                </h3>
              </div>
            </div>
            <div className="col-md-3 feature-box-wrapper">
              <div className="feature-box">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/Wy4tkGp/travel-08.png"
                  alt=""
                />
                <h3>
                  SUPER FAST <br /> BOOKING
                </h3>
              </div>
            </div>
            <div className="col-md-3 feature-box-wrapper">
              <div className="feature-box">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/zRwfRLy/travel-01.png"
                  alt=""
                />
                <h3>
                  FRIENDLY TOUR
                  <br /> GUIDE
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
      <div className="ad-wrapper">
        <div className="container">
          <div className="row ad-wrapper-row">
            <div className="col-md-10 ad-wrapper-left">
              <h2>SALE UP FOR NEW YEAR</h2>
              <p>BOOK NOW AND GET 50% OFF SALE FOR ALL PACKAGES</p>
            </div>
            <div className="col-md-2 ad-wrapper-right">
              <NavLink to="/services">
                <button className="btn btn-primary hero-button">
                  Book Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
