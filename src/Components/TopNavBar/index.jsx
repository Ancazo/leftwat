import React from "react";
<<<<<<< HEAD
import "./styles.css";
import MenuButton from "../MenuButton";

const TopNavBar = () => {
  return (
    <nav id="topNavBar">
      <div id="logoAndName">
        <div id="appName">LeftWat</div>
        <div id="home">Home</div>
      </div>

      <div id="iconArea">
        <MenuButton type="chart" colour='#85D1D8' width='48px' height='48px'/>
        <MenuButton type="upload" colour='#FC791F' width='48px' height='48px'/>
        <MenuButton type="fridge" colour='#FEEA50' width='48px' height='48px'/>
      </div>

      <div id="nameAndLogin">
        <div id="userName">user name</div>
        <button id="loginAndLogoutButton" type="button">
          Login
        </button>
      </div>
    </nav>
  );
=======
import './styles.css'


const TopNavBar = () => {
  return (
    <nav id='topNavBar'>

        <div id='logoAndName'>
            <div id='appName'>LeftWat</div>
            <div id='home'>Home</div>
        </div>

        <div id='iconArea'>
            <div>Icon 1</div>
            <div>Icon 2</div>
            <div>Icon 3</div>
        </div>

        <div id='nameAndLogin'>
            <div id='userName'>user name</div>
            <button id='loginAndLogoutButton' type="button">Login</button>
        </div>

    </nav>
  )
>>>>>>> dev
};

export default TopNavBar;
