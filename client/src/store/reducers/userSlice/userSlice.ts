import { createSlice } from "@reduxjs/toolkit";

interface userSlice {
  token: string;
  id: string | null;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
}

const initialState: userSlice = {
  token: "",
  id: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  role: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    removeUser(state) {
      state.id = null;
      state.token = "";
      state.firstName = "";
      state.lastName = "";
      state.password = "";
      state.email = "";
      state.role = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
