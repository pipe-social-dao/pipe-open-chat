import { createTheme,ThemeOptions } from "@mui/material/styles";
import { darken,lighten } from "@mui/material";

interface CustomColors {
    outerBackgroundColor:string,
}

interface ThemeExtensions {
    colors:CustomColors
}

declare module "@mui/material/styles/" {
    export interface Theme extends ThemeExtensions{}
    export interface ThemeOptions extends ThemeExtensions{}
}

const defaultColors:CustomColors = {
    outerBackgroundColor: "#41398b",
}
const darkThemeColors:CustomColors = {
    outerBackgroundColor: "#000000",
}

const buildOptions = (darkMode:boolean) : ThemeOptions => {
    const colors = darkMode?darkThemeColors:defaultColors;
    return {
        breakpoints:{
            values:{xs:0,sm:768,md:960,lg:1400,xl:1920}
        },
        colors,
        palette:{
            mode:darkMode?"dark":"light"
        }
    }
}
export const lightTheme = createTheme(buildOptions(false))
export const darkTheme = createTheme(buildOptions(true))