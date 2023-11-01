import { createSlice } from "@reduxjs/toolkit";
import { ThemeApp } from "interfaces/IThemeApp";
import { LIGHT_THEME_APP } from "utils/consts";

const initialState: ThemeApp = {
    Pallete:LIGHT_THEME_APP
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setAppTheme(state, action) {
            state.Pallete = action.payload
        },

    }
})

export const { setAppTheme } = appSlice.actions

export default appSlice.reducer