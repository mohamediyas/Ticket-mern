import React from "react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login get account </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              required
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your Email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              required
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              type="password"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
