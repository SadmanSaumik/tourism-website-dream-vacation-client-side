import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center login-content">
            <h2 className="text-center">Please Sign In</h2>
            <img
              className="img-fluid"
              src="https://i.ibb.co/X5fhb1k/Access-control-system-abstract-concept-vector-illustration-Security-system-authorize-entry-login-cre.jpg"
              alt=""
            />
            <button
              onClick={signInWithGoogle}
              className="btn btn-primary google-btn"
            >
              <i className="fab fa-google me-2"></i>Sign In With Google
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
