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
        },
        editUser(state, action) {
            const editedUser = action.payload;
            const userIndex = state.users.findIndex(user => user.id === editedUser.id);
            if (userIndex !== -1) {
                state.users[userIndex] = editedUser;
            }
        }
    }
})

export const { setAllUsers, deleteUser, editUser } = adminSlice.actions

export default adminSlice.reducer