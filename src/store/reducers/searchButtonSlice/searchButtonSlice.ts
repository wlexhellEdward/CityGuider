import { createSlice } from "@reduxjs/toolkit";

const searchButtonSlice = createSlice({
    name: 'searchButtonSlice',
    initialState: {
        isClicked: false
    },
    reducers: {
        setIsClicked(state) {
            state.isClicked = !state.isClicked
        }
    }
})

export const { setIsClicked } = searchButtonSlice.actions

export default searchButtonSlice.reducer