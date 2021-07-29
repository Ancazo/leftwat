import React, { useState, useEffect } from "react";
import {
  SmallButton,
  FormTextField,
  Button,
  Title,
  PageContainer,
} from "../../Components";
import "./DashboardPage.scss";
import { ThemeToggleService } from "../../services";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { Pie} from 'react-chartjs-2'
import axios from "axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const DashboardPage = (props) => {
    ThemeToggleService("red");

    const [cookies] = useCookies(['name']);
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
    },[cookies.name])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        axios
          .patch("https://leftwat-be.herokuapp.com/api/v1/dashboard/changepassword", 
          {
            newPassword,
            reEnterNewPassword,
          },
          {headers: {
            auth_token:cookies.name}})
          .then((response) => {
            console.log(response);
            console.log(props);
            if (response.status === 200) {
              toast(response.data.message)
            }
          })
          .catch((err) => {
            console.log(err)
            console.log(err.response);
            console.log(err.response.data.details[0].message);
            toast(err.response.data.details[0].message)
    
          });
      };

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
    <PageContainer navlink = '/logout' name= 'Logout'>
      <div className="dashboard">
        <div className="col1">
          <Link to="/history">
            <SmallButton text="History" />
          </Link>
          <Link to="/dashboard">
            <SmallButton text="account" />
          </Link>
        </div>
        <div className = 'displayArea'>
            <div className="col2">
            <Title title="Reset Password" />
            <form onSubmit = {e=>handleFormSubmit(e)}>
                
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
                <Button text="Change password" type ='submit'/>
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
      </PageContainer> 
  )
};
