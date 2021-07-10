import React from 'react'
import { TopNavBar } from '..'

export const PageContainer =(props) => {
    return (
        <div className='page'>
            <TopNavBar navlink={props.navlink}/>

            {props.children}
        </div>
    )
}