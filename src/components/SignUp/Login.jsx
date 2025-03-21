import React, { useState } from "react";
import "./Login.css";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const { isLoggingIn, login } = useAuthStore();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const gotoSignup = () => {
    navigate("/signup");
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    login(loginData);
  };

  return (
    <div className="Signup-container container-lg mb-3">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmitData}>
        <input
          type="text"
          placeholder="Email here"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        />

        <input
          type="password"
          className="w-100"
          placeholder="Password here"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <button
          className="btn btn-success d-block mx-auto mt-3"
          type="submit"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Logging In..." : "Login"}
        </button>
      </form>

      <div className="hr-container">
        <hr />
        <p className="or-text">or</p>
        <hr />
      </div>

      <p>
        <i className="bi bi-google text-center fs-2"></i>
      </p>
      <hr />
      <h5 onClick={gotoSignup}>
        Don’t you have an account?{" "}
        <span className="text-success">Sign Up</span>
      </h5>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            margin: "50px",
            padding: "15px",
          },
        }}
      />
    </div>
  );
};

export default Login;
