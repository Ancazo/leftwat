import React, { useState, useEffect } from "react";
import {
  TopNavBar,
  SmallButton,
  FormTextField,
  Button,
  Title,
} from "../../Components";
import "./dashboardPage.scss";
import { ThemeToggleService } from "../../services";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';


export const DashboardPage = (props) => {
  ThemeToggleService("red");
  const history = useHistory()
  const [cookies] = useCookies(['name']);

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");

  console.log(props)
  // useEffect(() => {
  //   console.log(cookies.name)
  //   // const { cookies } = props

  //   if (!cookies.name) {
  //       history.push('/login')
  //   }
  // });

  return (
    <div className="" container>
      <TopNavBar />
      <div className="dashboard">
        <div className="col1">
          <Link to="/history">
            <SmallButton text="History" />
          </Link>
          <Link to="/dashboard">
            <SmallButton text="account" />
          </Link>
        </div>
        <div className="col2">
          <Title title="Username" />
          <form action="">
            <FormTextField
              name="email"
              type="text"
              placeholder="xyz@gmail.com"
              onChange={(value) => {
                setEmail(value);
              }}
            />
            <FormTextField
              name="password"
              type="password"
              placeholder="Enter new password"
              onChange={(value) => {
                setNewPassword(value);
              }}
            />
            <FormTextField
              name="re-enter-password"
              type="password"
              placeholder="Re-enter new password"
              onChange={(value) => {
                setReEnterNewPassword(value);
              }}
            />
            <Button text="Change password" />
          </form>
        </div>
        <div className="col3">
          <Title title="My Fridge Overview" />
          <div className="image">chart here</div>
        </div>
      </div>
    </div>
  );
};
