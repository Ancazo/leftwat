import React,{useContext} from 'react'
import { ThemeContext } from '../ThemeProvider'

import './FileUploadButton.scss'

export const FileUploadButton = (props) => {
    const state = useContext(ThemeContext)

    const fileUploadButton = {
        background: state.theme.primary,
        color: state.theme.text
    }

    return (
        <div className = 'col'>
            <form action="#" className ='row valign-wrapper'>
                <div className = 'col valign-wrapper'>
                    <div className ="file-field input-field valign-wrapper">
                        <div className ="btn" style= {fileUploadButton}>
                            <span>Browse</span>
                            <input type="file"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                </div>

                <div className = 'col'>
                        <button className="btn waves-effect waves-light " type="submit" name="action" style={fileUploadButton}>
                        <i className="material-icons center-align">send</i>
                        </button>
                    </div>
            </form> 
        </div>
    )
}