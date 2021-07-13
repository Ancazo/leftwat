import React from 'react'
import './smallTextBox.css'

const SmallTextBox = () => {
    return (
        <div className='smallTextBox'>
            <div className='title'>Title</div>
            <div className='prices'>
                <div className='averagePrice'>Average Price:</div>
                <div className='lowestPrice'>Lowest Price:</div>
                <div className='highestPrice'>HighestPrice:</div>
            </div>
            <div className='buttons'>
                <button className='othersButton'>Others</button>
                <button className='addTagButton'>ADD TAG</button>
            </div>
        </div>
    )
}

export default SmallTextBox