import React, { useState, useEffect } from "react";
import "./LoginFormContainer.scss";
import { FormTextField, Button } from "..";
import axios from "axios";

export const LoginFormContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // call to backend here
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/api/v1/landing/login", { email, password })
      .then((response) => {
        console.log(response);
        if(response.status === 200) {
            props.history.push('/dashboard')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <Button type="submit" text="login" style={props.buttonStyling} />
      <Button text="forget password?" />
    </form>
  );
};
