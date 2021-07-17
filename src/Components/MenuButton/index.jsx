import React from "react";
import {menu} from "../../Assets";
import "./styles.css";

const MenuButton = ({ type, colour, height, width }) => {
  return (
    <div id="menuButton" style={{width: width, height:height}}>
      <button id="button" style={{background: colour}}>
        <img src={menu[type] || menu['placeholder']} alt={type} />
      </button>
    </div>
  );
};

export default MenuButton;
