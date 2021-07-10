import React, { useState } from 'react'

export const ThemeContext = React.createContext({
    theme: {
        name: 'blue',
        primary: '#4C6AC4',
        text: '#white'
    },
    setTheme: () => {}
})

export const ThemeContextProvider = props => {
    const theme = {
        'blue': {
            color: 'blue',
            primary: '#4C6AC4',
            text: 'white'
        },
        'orange': {
            color: 'orange',
            primary: '#FC791F',
            text: 'white'
        },

        dark:{
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
        themeColor: 'blue',
        theme: theme['blue'],
        setTheme: setTheme
    }

    const [themeState, setThemeState] = useState(initTheme)

    return (
        <ThemeContext.Provider value={themeState}>
            {props.children}
        </ThemeContext.Provider>
    )
}