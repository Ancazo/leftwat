import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'
import "./TopNavBar.scss";
import MenuButton from "../MenuButton";
import { Link } from "react-router-dom";


export const TopNavBar = (props) => {
    const state = useContext(ThemeContext)

    const navBar = {
        background: state.theme.primary,
        color: state.theme.text
    }

  return (
    <nav id="topNavBar" style = {navBar}>
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
        <Link to= {props.navlink} id= 'loginAndLogoutButton'> 
            <div>
            Login
            </div>
        </Link>
      </div>
    </nav>
  );
};

