import { IUser } from "@/interfaces/IUser";
import { createSlice } from "@reduxjs/toolkit";

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
            state.users = state.users.filter(user => user.uid != action.payload)
        },
        editUser(state, action) {
            const editedUser = action.payload;
            const userIndex = state.users.findIndex(user => user.uid === editedUser.uid);
            if (userIndex !== -1) {
                state.users[userIndex] = editedUser;
            }
        }
    }
})

export const { setAllUsers, deleteUser, editUser } = adminSlice.actions

export default adminSlice.reducer