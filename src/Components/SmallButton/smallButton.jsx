import React, { useContext } from 'react'
import { ThemeContext } from '../../services/ThemeProvider'
import './smallButton.css'

export const SmallButton = (props) => {
    const state = useContext(ThemeContext)

    const smallButton = {
        background: state.theme.primary,
        color: state.theme.text
    }
    return (
        <div className = 'row'>
            <button className='smallButton' style = {smallButton} onClick = {props.onclick? e=>props.onclick(e) : ''}>{props.text}</button>
        </div>
    )
}