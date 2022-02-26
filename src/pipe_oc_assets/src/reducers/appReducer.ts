import produce from 'immer'
import { ACTION_TYPE_THEME_SELECTED as THEME_SELECTED } from '../constants'
import { ThemeSelectedEvent } from '../actions/app/selectTheme'
import { SelectedTheme } from '../domain/model/theme'
import SelectedThemeCache from '../domain/SelectedThemeCache'

export type AppState = {selectedTheme: SelectedTheme}
const initialState:AppState = {
    selectedTheme: SelectedThemeCache.tryGet()?? SelectedTheme.SystemDefault
}
type Event = ThemeSelectedEvent;
export default produce((state:AppState,event:Event)=>{
    switch(event.type){
        case THEME_SELECTED:{
            const selectedTheme = event.payload
            state.selectedTheme = selectedTheme//apply to state
            SelectedThemeCache.set(selectedTheme)// apply to local storage in browser[this program run envirament]
            break
        }
    }
},initialState)