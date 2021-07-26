import React, { useState, useEffect } from "react";
import "./LoginFormContainer.scss";
import { FormTextField, Button } from "..";
import axios from "axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

export const LoginFormContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(['name']);

  useEffect(() => {
    // call to backend here
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://leftwat-be.herokuapp.com/api/v1/landing/login", { email, password })
      .then((response) => {
        // console.log(response);
        // console.log(response.data.token);
        setCookie('name', response.data.token, {path: '/'});
        console.log(cookies)

        if (response.status === 200) {
          props.history.push("/menu");
          toast(response.data.message)
            
          }
      })
      .catch((err) => {
        // console.log(err);
        // console.log(err.response)
        toast(err.response.data.message)
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