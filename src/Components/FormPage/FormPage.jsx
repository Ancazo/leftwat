import React, { useState, useEffect } from "react";
import "./FormPage.scss";
import { FormTextField, Button } from "..";
import axios from "axios";

export const FormPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  useEffect(() => {
    // call to backend here
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/api/v1/landing/register", {
        email,
        password,
        confirm_password,
      })
      .then((response) => {
        console.log(response);
        console.log(props);
        if (response.status === 200) {
          props.history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(email)
  // console.log(password)
  // console.log(confirm_password)

  return (
    <form className="col" onSubmit={(e) => handleFormSubmit(e)}>
      <FormTextField
        name="email"
        type="text"
        placeholder="xyz@gmail.com"
        onChange={setEmail}
      />
      <FormTextField
        name="password"
        type="password"
        placeholder="Password"
        onChange={setPassword}
      />
      <FormTextField
        name="confirm_password"
        type="password"
        placeholder="Confirm Password"
        onChange={setConfirm_password}
      />
      <Button type="submit" text="register" />
    </form>
  );
};
