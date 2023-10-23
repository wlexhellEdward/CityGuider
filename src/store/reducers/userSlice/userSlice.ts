import { createSlice } from "@reduxjs/toolkit";

interface userSlice {
    token: string,
    id: number | null,
    email: string,
    password: string,
    name: string,
    secondName: string,
}

const initialState: userSlice = {
    token: "",
    id: 0,
    email: "",
    password: "",
    name: "",
    secondName: "",
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.secondName = action.payload.secondName;
            state.password = action.payload.password;
            state.email = action.payload.email
        },
        removeUser(state) {
            state.id = null;
            state.token = "";
            state.name = "";
            state.secondName = "";
            state.password = "";
            state.email = ""
        }
    }

})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer