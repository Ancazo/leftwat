import React, { useState } from 'react'

export const ThemeContext = React.createContext({
    theme: {
        name: 'dark blue',
        primary: '#4C6AC4',
        text: 'white'
    },
    setTheme: () => {}
})

export const ThemeContextProvider = props => {
    const theme = {
        'dark blue': {
            color: 'dark blue',
            primary: '#4C6AC4',
            text: 'white'
        },
        'red': {
            color: 'red',
            primary: '#EB5335',
            text: 'white'
        },
        'yellow': {
            color: 'yellow',
            primary: '#FEEA50',
            text: 'black'
        },
        'orange': {
            color: 'orange',
            primary: '#FC791F',
            text: 'white'
        },
        'blue': {
            color: 'blue',
            primary: '#85D1D8',
            text: 'white'
        },
        'night':{
            color: 'night',
            primary: '#212121',
            text: 'white'
        },
    }

    const setTheme = color => {
        setThemeState({ 
            themeColor: color,
            theme: theme[color],
            setTheme: setTheme })
    }

    const initTheme = {
        themeColor: 'dark blue',
        theme: theme['dark blue'],
        setTheme: setTheme
    }

    const [themeState, setThemeState] = useState(initTheme)

    return (
        <ThemeContext.Provider value={themeState}>
            {props.children}
        </ThemeContext.Provider>
    )
}