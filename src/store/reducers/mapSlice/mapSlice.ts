import { createSlice } from "@reduxjs/toolkit";

interface mapState {
    mapRef: google.maps.Map | null,
    travelInfo: {
        distanceTraveled: string,
        distance: {
            kilometrs: string
        },
        placeGeometry: google.maps.LatLng | undefined,
        time: string,
        progress: number
    }
}

const initialState: mapState = {
    mapRef: null,
    travelInfo: {
        placeGeometry: undefined,
        distanceTraveled: "",
        distance: {
            kilometrs: ""
        },
        time: "",
        progress: 0
    },
}


const mapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {
        setMap(state, action) {
            state.mapRef = action.payload
        },
        setTravelPlaceGeometry(state, action) {
            state.travelInfo.placeGeometry = action.payload
        },
        setTravelDistance(state, action) {
            state.travelInfo.distance = action.payload
        },
        setTravelDistanceTraveled(state, action) {
            state.travelInfo.distanceTraveled = action.payload
        },
        setTravelTime(state, action) {
            state.travelInfo.time = action.payload
        },
        setTravelProgress(state, action) {
            state.travelInfo.progress = action.payload
        },
        deleteTravel(state) {
            state.travelInfo.distance.kilometrs = ""
            state.travelInfo.distanceTraveled=""
            state.travelInfo.progress=0
            state.travelInfo.placeGeometry=undefined
            state.travelInfo.time=""
        }
    }
})

export const { setMap, deleteTravel, setTravelPlaceGeometry, setTravelDistance, setTravelDistanceTraveled, setTravelProgress, setTravelTime } = mapSlice.actions

export default mapSlice.reducer