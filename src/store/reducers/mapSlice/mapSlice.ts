import { createSlice } from "@reduxjs/toolkit";

interface mapState {
    map: google.maps.Map | null,
    travelInfo:{
        distance:string,
        // time:string,
    }
}

const initialState: mapState = {
    map: null,
    travelInfo:{
        distance:"",
        // time:"",
    },
}


const mapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {
        setMap(state, action) {
            state.map = action.payload
        },
        setTravelKilometrs(state, action) {
            console.log(action.payload)
            state.travelInfo.distance = action.payload
        }
    }
})

export const { setMap, setTravelKilometrs } = mapSlice.actions

export default mapSlice.reducer