import React from 'react'
import { TopNavBar } from '..'
import "./PageContainer.scss";

export const PageContainer =(props) => {
    return (
        <div className='page'>
            <TopNavBar navlink={props.navlink} name={props.name}/>
            
            <div id = 'onePageContent' className = 'col'>
                {props.children}
            </div>
        </div>
    )
}