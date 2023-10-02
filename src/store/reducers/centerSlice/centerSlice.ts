import { createSlice } from "@reduxjs/toolkit";

const centerSlice = createSlice({
    name: 'center',
    initialState: {
        position: { lat: 12, lng: 10 }
    },
    reducers: {
        setCenter(state, action) {
            state.position = action.payload
        }
    }
})

export const { setCenter } = centerSlice.actions

export default centerSlice.reducer