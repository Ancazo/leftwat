import React from "react";
import "./styles.scss";

export const SplitPage = (props) => {
  return (
    <div id = 'splitPage' className = 'row'>
        <div className = 'col s6 splitPageContent'>
            {props.left}
            
        </div>
        <div className = 'col s6 splitPageContent'>
            {props.right}
        </div>
    </div>
  );
};