import { createSlice } from "@reduxjs/toolkit";

const searchButtonSlice = createSlice({
    name: 'searchButtonSlice',
    initialState: {
        isClicked: false
    },
    reducers: {
        setIsClicked(state) {
            // state.isClicked = !state.isClicked
            // setTimeout(() => { state.isClicked = false }, 100)
        }
    }
})

export const { setIsClicked } = searchButtonSlice.actions

export default searchButtonSlice.reducer