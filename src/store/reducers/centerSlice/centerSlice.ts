import { createSlice } from "@reduxjs/toolkit";

const centerSlice = createSlice({
    name: 'center',
    initialState: {
        position: { lat: 12, lng: 10 },
        humanPosition: { lat: 12, lng: 10 },
    },
    reducers: {
        setCenter(state, action) {
            state.position = action.payload
        },
        setHumanPosition(state, action) {
            state.humanPosition = action.payload
        }
    }
})

export const { setCenter, setHumanPosition } = centerSlice.actions

export default centerSlice.reducer