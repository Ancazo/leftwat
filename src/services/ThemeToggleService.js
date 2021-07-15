import {useContext, useEffect} from "react";
import { ThemeContext } from './ThemeProvider'

export const ThemeToggleService = (color) => {
    const themeState = useContext(ThemeContext)

    useEffect(()=>{
        themeState.setTheme(color)},
        [] //empty depency makes it runonly once
    )
}