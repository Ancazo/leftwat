import React from "react";
import "./styles.scss";

export const SplitPage = (props) => {

    let content = React.Children.map(props.children, child => 
        <div className = 'col s6 splitPageContent'>
            {child}
        </div>
    )

    return (
        <div id = 'splitPage' className = 'row'>
            {content}
        </div>
    );
};