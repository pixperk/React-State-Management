import { createContext, ReactNode, useEffect, useState } from "react";

export const themeOptions = ['light', 'dark', 'system'] as const

export type Theme = (typeof themeOptions)[number]
type StateType = {
    theme:Theme,
    changeTheme: (selectedTheme: Theme)=>void
}

const DEFAULT_THEME = 'system'

const initialState:StateType={
    theme: DEFAULT_THEME,
    changeTheme:()=>{}

}

export const ThemeContext = createContext(initialState)

export const ThemeProvider = ({children}:{children: ReactNode})=>{
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

    useEffect(()=>{
        const darkModePreference = window.matchMedia("(prefers-color-scheme:dark)")

        if(theme==='system'){
            darkModePreference.matches?document.body.classList.add('dark'):
            document.body.classList.remove('dark')
        }

        if(theme==='dark'){
            document.body.classList.add('dark')
        }
        if(theme==='light'){
            document.body.classList.remove('dark')
        }
    },
    [theme])

    const value={
        theme,
        changeTheme : (selectedTheme:Theme)=>{
            setTheme(selectedTheme)
        }
    }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}