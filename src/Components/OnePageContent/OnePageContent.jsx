import React from "react";
import "./OnePageContent.scss";

export const OnePageContent = (props) => {
    return (
        <div id = 'onePageContent' className = 'col'>
            {props.children}
        </div>
    );
};