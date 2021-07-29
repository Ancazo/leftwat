import React from 'react'
import './SearchButton.scss'

const SearchButton =(props) => {
    
    let listData = props.data.map(elem => {
        return (
            <option key= {elem} value = {elem} />
        )
    })
    return (
        <div>
        <input id='search' type="text" placeholder="Search" name="search" list = 'items' onKeyDown={e => props.onEnter(e)}/>
            <datalist id = 'items'>
                {listData}
            </datalist>
        </div>
    )
}

export default SearchButton