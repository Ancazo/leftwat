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
import { Pie} from 'react-chartjs-2'
import axios from "axios";

export const DashboardPage = (props) => {
  ThemeToggleService("red");
    const history = useHistory()
    const [cookies] = useCookies(['name']);

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [reEnterNewPassword, setReEnterNewPassword] = useState("");
    const [pieInput,setPieInput] = useState([])
    
    useEffect(() => {
        axios.get('https://leftwat-be.herokuapp.com/api/v1/dashboard/pieData',
        {headers: {
            user:cookies.name,
            auth_token:cookies.name},
        })
        .then(response => {
            console.log(response.data)
            setPieInput(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const pieData = {
        labels: [
          'Meat',
          'Vegetable',
          'Others'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [pieInput.meat, pieInput.vegetable, pieInput.others],
          backgroundColor: [
            'rgb(235,83,53)',
            'rgb(133,209,216)',
            'rgb(76,106,196)'
          ],
          hoverOffset: 4
        }],
      }

  return (
    <div className="" container>
      <TopNavBar navlink="/login" name='Logout'/>
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
            <div className="image center-align">  
            {pieInput.length === 0 
                ? 'No data yet' 
                : <Pie 
                    data={pieData} 
                    options= {{
                        responsive: true,
                        maintainAspectRatio : false
                    }}
            />
            }
            </div>
        </div>
      </div>
    </div>
  );
};
