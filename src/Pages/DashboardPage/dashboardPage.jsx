import React, { useState } from "react";
import {
  TopNavBar,
  SmallButton,
  FormTextField,
  Button,
  Title,
} from "../../Components";
import "./dashboardPage.css";
import { ThemeToggleService } from "../../services";

export const DashboardPage = (props) => {
  ThemeToggleService("red");

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");

  return (
    <div className="" container>
      <TopNavBar />
      <div className="dashboard">
        <div className="col1">
          <SmallButton text="History" />
          <SmallButton text="account" />
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
