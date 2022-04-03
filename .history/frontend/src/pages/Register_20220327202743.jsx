import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password2 !== password) {
      toast.error("Password don't match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account </p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              required
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              type="text"
              className="form-control"
            />
          </div>
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
            <input
              required
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm Password"
              type="text"
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

export default Register;
