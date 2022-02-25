
import React from "react";
import { Provider,useDispatch,useSelector } from "react-redux";
import store from "../store";
export default AppRoot;
function AppRoot(){
    return (
        <Provider store={store}><div><h1>PIPE - pipe</h1></div></Provider>
    )
}