import { combineReducers } from "redux";
import appReducer,{AppState} from "./appReducer";
const rootReducer = combineReducers({appState:appReducer})
export default rootReducer;
export type RootState = {
    appState:AppState
}