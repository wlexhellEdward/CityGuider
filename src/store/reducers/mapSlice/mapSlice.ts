import { createSlice } from "@reduxjs/toolkit";
import { MAP_THEME } from "utils/consts";

interface mapState {
    mapRef: google.maps.Map | null,
    options: {
        theme: google.maps.MapTypeStyle[],
        zoom: number
    },
    isLoaded: boolean,
    directionsRenderer: google.maps.DirectionsRenderer | null,
    travelInfo: {
        distanceTraveled: number,
        distance: number,
        placeGeometry: {
            lat: number,
            lng: number,
        },
        time: string,
    }
}

const initialState: mapState = {
    mapRef: null,
    options: {
        theme: MAP_THEME,
        zoom: 15
    },
    isLoaded: false,
    directionsRenderer: null,
    travelInfo: {
        placeGeometry: { lat: 0, lng: 0 },
        distanceTraveled: 0,
        distance: 0,
        time: "",
    },
}


const mapSlice = createSlice({
    name: 'mapSlice',
    initialState,
    reducers: {
        setMap(state, action) {
            state.mapRef = action.payload
        },
        setDirectionRenderer(state, action) {
            state.directionsRenderer = action.payload
        },
        clearDirection(state) {
            state.directionsRenderer?.setMap(null)
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
        deleteTravel(state) {
            state.travelInfo.distance = 0
            state.travelInfo.distanceTraveled = 0
            state.travelInfo.placeGeometry.lat = 0
            state.travelInfo.placeGeometry.lng = 0
            state.travelInfo.time = ""
        },
        setIsLoaded(state, action) {
            state.isLoaded = action.payload
        },
        setThemeMap(state, action) {
            state.options.theme = action.payload
        }
    }
})

export const { setMap, setThemeMap, clearDirection, setDirectionRenderer, setIsLoaded, deleteTravel, setTravelPlaceGeometry, setTravelDistance, setTravelDistanceTraveled, setTravelTime } = mapSlice.actions

export default mapSlice.reducer