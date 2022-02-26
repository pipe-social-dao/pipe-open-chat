import {Option} from './model/common'
import { SelectedTheme } from "./model/theme";

import { KEY_THEME_SELECTED as KEY } from "../constants";

class SelectedThemeCache{
    public tryGet = ():Option<SelectedTheme> =>{
        const value = localStorage.getItem(KEY)
        if(value === null){
            return null
        }
        return parseInt(value) as SelectedTheme
    }
    public set = (value:SelectedTheme):void=>{
        localStorage.setItem(KEY,value.toString())
    }
}
const cache = new SelectedThemeCache();
export default cache
