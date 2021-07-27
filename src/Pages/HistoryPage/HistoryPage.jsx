import React, { useState, useEffect } from "react";
import { TopNavBar, SmallButton } from "../../Components";
import "./HistoryPage.scss";
import { ThemeToggleService } from "../../services";
import { Link } from "react-router-dom";
// import {sampleReceipt} from '../../Assets/index'
import { SampleReceipt } from "../../Assets";
import { useCookies } from "react-cookie";
import axios from "axios";

export const DashboardHistoryPage = (props) => {

    
  ThemeToggleService("red");
  const [cookies] = useCookies(["name"]);
  const [imageArray, setImageArray] = useState([])
  const [imageNumber,setImageNumber] = useState(0)

    useEffect(()=>{
        axios.get('https://leftwat-be.herokuapp.com/api/v1/dashboard', {headers: {auth_token:cookies.name},}) 
            .then(response => {
                console.log('retrieve successfully')
                console.log(response.data)
                setImageArray(response.data.displayLastFiveReceipts) //receipt ID set here to be used. 
            })
            .catch(err => {
                console.log(err)
            })
    },[])

  return (
    <div className="" container>
      <TopNavBar name='Logout'/>
      <div className="dashboard">
        <div className="col1">
          <Link to="/history">
            <SmallButton text="History" />
          </Link>
          <Link to="/dashboard">
            <SmallButton text="account" />
          </Link>
        </div>

        <div id="receiptDisplayArea">
          <div id="top">
            <p id="receiptId">{imageArray.length!==0?imageArray[imageNumber].receiptID:'need data'}</p>
            <button id="deleteReceipt">Delete Receipt</button>
          </div>
          <div id="bottom">
            <div id="receiptContainer">
              <img src={imageArray.length!==0?imageArray[imageNumber].cloudinaryURL:'need data'} alt="receipt here" />
            </div>
          </div>
          <div id='paginationContainer'>


          <ul class="pagination">
            <li class="disabled">
              <a href="#!">
                <i class="material-icons">chevron_left</i>
              </a>
            </li>
            <li class="active">
              <a href="#!">1</a>
            </li>
            <li class="waves-effect">
              <a href="#!">2</a>
            </li>
            <li class="waves-effect">
              <a href="#!">3</a>
            </li>
            <li class="waves-effect">
              <a href="#!">4</a>
            </li>
            <li class="waves-effect">
              <a href="#!">5</a>
            </li>
            <li class="waves-effect">
              <a href="#!">
                <i class="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
