import React,{useContext} from 'react'
import { ThemeContext } from '../../services/ThemeProvider'
import './Button.scss'

export const Button = (props) => {
    const state = useContext(ThemeContext)

    const buttonStyling = {
        background: state.theme.primary,
        color: state.theme.text
    }

    return (
        <div className = 'row'>
            <button className='button' style = {buttonStyling} type = {props.type}>{props.text}</button>
        </div>
    )
}