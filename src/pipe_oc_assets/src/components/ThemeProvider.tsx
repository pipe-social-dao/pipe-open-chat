import React, { useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { darkTheme,lightTheme } from '../theme'
import { SelectedTheme } from '../domain/model/theme'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

export interface Props{
    children:React.ReactNode
}

export default function ThemeProvider(props:Props){
    // gets
    const selectedTheme = useSelector((state:RootState)=>state.appState.selectedTheme)
    const isSystemDarkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const shouldDarkModeBeActive = isDarkModeSelected()
    const useSystemTheme = selectedTheme === SelectedTheme.SystemDefault
    
    // temp state
    const [darkMode,setDarkMode] = useState(shouldDarkModeBeActive)
    
    
    
    if(darkMode!==shouldDarkModeBeActive){
        setDarkMode(shouldDarkModeBeActive)
    }
    // rules
    function isDarkModeSelected():boolean{
        return selectedTheme === SelectedTheme.Dark ||
            (selectedTheme === SelectedTheme.SystemDefault && isSystemDarkModeQuery.matches)
    }
    function setDarkModeBaseOnSystemTheme(){
        const isSystemDarkMode = isSystemDarkModeQuery.matches
        setDarkMode(isSystemDarkMode)
    }

    // effects that run after render
    useEffect(()=>{
        if(useSystemTheme){
            isSystemDarkModeQuery.addEventListener("change",setDarkModeBaseOnSystemTheme)
            return ()=>isSystemDarkModeQuery.removeEventListener("change",setDarkModeBaseOnSystemTheme)
        }
    },[useSystemTheme])


    return (
        <MuiThemeProvider theme={darkMode?darkTheme:lightTheme}>
            {props.children}
        </MuiThemeProvider>
    )
}