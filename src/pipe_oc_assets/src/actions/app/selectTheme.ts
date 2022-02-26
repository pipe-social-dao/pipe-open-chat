import { ACTION_TYPE_THEME_SELECTED as THEME_SELECTED } from "../../constants";
import { SelectedTheme } from "../../domain/model/theme";

export default function selectTheme(theme:SelectedTheme){
    return {
        type:THEME_SELECTED,
        payload:theme
    }
}
export type ThemeSelectedEvent = {
    type:typeof THEME_SELECTED,
    payload: SelectedTheme
}