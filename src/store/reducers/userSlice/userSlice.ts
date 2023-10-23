import { createSlice } from "@reduxjs/toolkit";

interface userSlice {
    token: string,
    id: number | null,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
}

const initialState: userSlice = {
    token: "",
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.firstName = action.payload.name;
            state.lastName = action.payload.secondName;
            state.password = action.payload.password;
            state.email = action.payload.email
        },
        removeUser(state) {
            state.id = null;
            state.token = "";
            state.firstName = "";
            state.lastName = "";
            state.password = "";
            state.email = ""
        }
    }

})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer