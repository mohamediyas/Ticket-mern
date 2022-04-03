import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
        <form>
          <div className="form-group">
            <input
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              type="text"
              className="form-control"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
