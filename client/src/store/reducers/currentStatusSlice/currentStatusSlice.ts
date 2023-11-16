import { createSlice } from "@reduxjs/toolkit";

const currentStatusSlice = createSlice({
  name: "currentStatus",
  initialState: {
    status: "close",
  },
  reducers: {
    setCurrentStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setCurrentStatus } = currentStatusSlice.actions;

export default currentStatusSlice.reducer;
