import React, { useContext } from 'react'
import { ThemeContext } from '../../services/ThemeProvider'
import "./UploadTable.scss";

export const UploadTable = (props) => {

    // theming
    const state = useContext(ThemeContext)
    const header = {
        background: state.theme.primary,
        color: state.theme.text
    }

    let data = props.data

    
    let tableContent = data.map(
        (elem) => {
            return (
                <tr key = {elem.slug}>
                <td >{data.indexOf(elem)+1}</td>
                <td className='inputContainer'>{elem.itemName}</td>
                <td className='inputContainer'><input className='browser-default' type = 'text' value ={elem.itemQuantityUpdatedByUser} onChange = {e => props.onchange(e, elem.slug, 'itemQuantityUpdatedByUser' ,elem.itemPrice )}/></td>
                <td className='inputContainer'><input className='browser-default' type = 'text' value ={elem.itemPrice} onChange = {e => props.onchange(e, elem.slug, 'itemPrice' ,elem.itemQuantityUpdatedByUser)}/></td>
                <td className='inputContainer'><input className='browser-default' type = 'text' value ={(elem.itemPrice * elem.itemQuantityUpdatedByUser).toFixed(2)} disabled='true'/></td>
                </tr>
            )
        }
    )

    return (
        
                <table className = 'centered striped responsive-table'>
                <thead style= {header}>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody className = 'tbody'>
                {tableContent}
                </tbody>
                </table>
                
            
    )
}