import React, { useContext } from 'react'
import { ThemeContext } from '../../services/ThemeProvider'
import "./TopNavBar.scss";
import {MenuButton} from "../../Components";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { remove } from 'lodash';


export const TopNavBar = (props) => {
    const state = useContext(ThemeContext)
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const navBar = {
        background: state.theme.primary,
        color: state.theme.text
    }

    const handleLogout =() => {
      removeCookie('name')
    }

  return (
    <nav id="topNavBar" style = {navBar}>
      <div id="logoAndName">
        <div id="appName">LeftWat</div>
        <Link to='/menu'>
        <div id="home">Home</div>
        </Link >
      </div>

      <div id="iconArea">
        <Link to='/dashboard'>

        <MenuButton type="chart" colour='#85D1D8' width='48px' height='48px'/>
        </Link>
        <Link to='/upload'>

        <MenuButton type="upload" colour='#FC791F' width='48px' height='48px'/>
        </Link>
        <Link to='/inventory'>

        <MenuButton type="fridge" colour='#FEEA50' width='48px' height='48px'/>
        </Link>
      </div>

      <div id="nameAndLogin">
        <div id="userName"></div>
        <Link to= {props.navlink} id= 'loginAndLogoutButton'> 
            <div style = {{border: `1px solid ${state.theme.text}`,borderRadius: '5px', color: `${state.theme.text}`}} onClick={(e) => handleLogout(e)}>
            {props.name}
            </div>
        </Link>
      </div>
    </nav>
  );
};

