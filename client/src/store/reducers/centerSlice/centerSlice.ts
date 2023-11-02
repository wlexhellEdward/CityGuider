import { createSlice } from "@reduxjs/toolkit";

interface centerState {
    position: {
        lat: number,
        lng: number
    },
    humanPosition: {
        lat: number,
        lng: number
    },
}
const initialState: centerState = {
    position: { lat: 12, lng: 10 },
    humanPosition: { lat: 12, lng: 10 },
}

const centerSlice = createSlice({
    name: 'center',
    initialState,
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