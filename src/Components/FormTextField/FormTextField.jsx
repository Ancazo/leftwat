import React, {useContext} from "react";
import "./FormTextField.scss";
import { ThemeContext } from '../../services/ThemeProvider'


export const FormTextField = (props) => {

    const state = useContext(ThemeContext)

    const FormTextField = {
        background: state.theme.text,
        color: state.theme.primary,
        border:`2px solid ${state.theme.primary}`
    }

  return (
    <div className="row">
      <input
        style = {FormTextField}
        type={props.type}
        className="textField browser-default"
        name={props.name}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
      ></input>
    </div>
  );
};

// props.onChange = (value) => {
//  setEmail((prev) => prev + val);
//  console.log(value);
// }
