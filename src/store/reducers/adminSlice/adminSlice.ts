import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "interfaces/IUser";

interface adminState {
    users: IUser[],
}

const initialState: adminState = {
    users: []
}

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        setAllUsers(state, action) {
            state.users = action.payload
        },
        deleteUser(state, action) {
            state.users = state.users.filter(user => user.id != action.payload)
        }
    }
})

export const { setAllUsers, deleteUser } = adminSlice.actions

export default adminSlice.reducer