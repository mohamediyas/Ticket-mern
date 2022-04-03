import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewTicket = () => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");

  return <div>New tickets</div>;
};

export default NewTicket;
