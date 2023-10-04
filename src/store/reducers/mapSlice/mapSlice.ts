import { createSlice } from "@reduxjs/toolkit";

interface mapState{
    map:google.maps.Map | null
}

const initialState:mapState={
    map:null
}


const mapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {
        setMap(state, action) {
            state.map = action.payload
        }
    }
})

export const { setMap } = mapSlice.actions

export default mapSlice.reducer