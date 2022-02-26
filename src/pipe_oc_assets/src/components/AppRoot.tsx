
import React from "react";
import { Provider,useDispatch,useSelector } from "react-redux";
import store from "../store";

import { Theme } from "@mui/material/styles/createTheme";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { Container } from "@mui/material";
import ThemeProvider from "./ThemeProvider";

const useStyles = makeStyles((theme:Theme)=>({
    "@global":{
        body:{
            // backgroundColor: theme.colors.outerBackgroundColor,
        },
    },
}))

export default AppRoot;
function AppRoot(){
    return (
        <Provider store={store}>
            {/* used to replace mui default style for custom define style */}
            <StyledEngineProvider injectFirst>
                {/* TODO:ThemeProvide:dark or light */}
                <ThemeProvider>
                    <AppContainer/>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    )
}

function AppContainer(){
    return (<>
        <Container maxWidth="lg">
        <div><h1>PIPE - pipe</h1></div>
        </Container>
    </>)
}