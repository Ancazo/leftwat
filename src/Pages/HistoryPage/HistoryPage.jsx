import React, { useState } from "react";
import { TopNavBar, SmallButton } from "../../Components";
import "./HistoryPage.scss";
import { ThemeToggleService } from "../../services";
import { Link } from "react-router-dom";
// import {sampleReceipt} from '../../Assets/index'
import { SampleReceipt } from "../../Assets";

export const DashboardHistoryPage = (props) => {
  ThemeToggleService("red");

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
            <p id="receiptId">Receipt No</p>
            <button id="deleteReceipt">Delete Receipt</button>
          </div>
          <div id="bottom">
            <div id="receiptContainer">
              <img src={SampleReceipt.sampleReceipt} alt="receipt here" />
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
