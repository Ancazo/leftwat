import React, { useState, useEffect } from "react";
import {SmallButton, PageContainer } from "../../Components";
import "./HistoryPage.scss";
import { ThemeToggleService } from "../../services";
import { Link } from "react-router-dom";
// import {sampleReceipt} from '../../Assets/index'
import { useCookies } from "react-cookie";
import axios from "axios";
import { Pagination, Icon } from "react-materialize";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
    },[cookies.name])

    const onClickHandler = (activePage) => {
        console.log(activePage)
        setImageNumber(activePage - 1)
    }

    const handleDeleteHandler = (e) => {
        const currentReceipt = imageArray[imageNumber] 
        const receiptID = currentReceipt.receiptID
        console.log(receiptID)

        axios.delete('https://leftwat-be.herokuapp.com/api/v1/dashboard/delete-receipt', {headers: {auth_token:cookies.name,receiptid: receiptID},}) 
        .then(response => {
            console.log('retrieve successfully')
            console.log(response.data)
            toast(response.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <PageContainer name = 'Logout'>
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
            <button id="deleteReceipt" onClick = {(e)=>handleDeleteHandler(e)}>Delete Receipt</button>
          </div>
          <div id="bottom">
            <div id="receiptContainer">
              <img src={imageArray.length!==0?imageArray[imageNumber].cloudinaryURL:'need data'} alt="receipt here" />
            </div>
          </div>
          <div id='paginationContainer'>

            <Pagination
                activePage={1}
                items={imageArray.length}
                leftBtn={<Icon>chevron_left</Icon>}
                maxButtons={imageArray.length}
                onSelect = {activePage=> onClickHandler(activePage)}
                rightBtn={<Icon>chevron_right</Icon>}
            />

          </div>
        </div>
      </div>
      </PageContainer>    
  );
};
