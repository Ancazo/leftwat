import React from 'react'
// import './FormTextField.scss'

export const FileUploadButton = (props) => {
    return (
        <div className = 'col'>
            <form action="#" className ='row valign-wrapper'>
                <div className = 'col'>
                    <div className ="file-field input-field">
                        <div className ="btn">
                            <span>File</span>
                            <input type="file"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text"/>
                        </div>
                    </div>
                </div>

                <div className = 'col'>
                        <button className="btn waves-effect waves-light " type="submit" name="action">
                        <i class="material-icons center-align">send</i>
                        </button>
                    </div>
            </form> 
        </div>
    )
}