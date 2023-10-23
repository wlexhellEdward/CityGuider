import { createSlice } from "@reduxjs/toolkit";

interface ErrorState {
    type: string,
    message: string,
    isOpen: boolean
}

const initialState: ErrorState = {
    type: '',
    message: '',
    isOpen: false
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            state.message = action.payload.message
            state.isOpen = action.payload.isOpen
            state.type = action.payload.type
        }
    }
})

export const { setError } = errorSlice.actions

export default errorSlice.reducer