import React,{useContext} from 'react'
import './Title.scss'
import { ThemeContext } from '../../services/ThemeProvider'


export const Title = (props) => {

    const state = useContext(ThemeContext)

    const Title = {
        color: state.theme.primary,
    }

    return (
        <div className = 'col title' style ={Title}>
            <h1>{props.title}</h1>
            <p>{props.comment}</p>
        </div>
    )
}