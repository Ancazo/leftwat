

import React from 'react'
import {UploadTable, SmallButton } from '..';

export const UploadTableContainer = (props) => {
    // form logic here
    let data = props.data

    return (
        <div className = 'container'>
            <form>
                <UploadTable data = {data} />
                <div className = 'right-align'>
                    <SmallButton type='submit' text = 'confirm'/>
                </div>
            </form>
      </div>
    )
}