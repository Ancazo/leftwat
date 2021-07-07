import React from "react";
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
};

export default TopNavBar;
