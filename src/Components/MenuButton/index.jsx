import React from "react";
import images from "../../Assets";
import "./styles.css";

const MenuButton = ({ type, colour, height, width }) => {
  return (
    <div id="menuButton" style={{width: width, height:height}}>
      <button id="button" style={{background: colour}}>
        <img src={images.menu[type] || images.placeholder} alt={type} />
      </button>
    </div>
  );
};

export default MenuButton;
