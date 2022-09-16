import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  busySchedule: {},
};

export const busyScheduleSlice = createSlice({
  name: "busySchedule",
  initialState,
  reducers: {
    setSchedule: (state, action) => {
      const { id, timeRange, text, date } = action.payload;
      const newData = { timeRange, text, date };
      state.busySchedule[id] = newData;
    },
  },
});

export const { setSchedule } = busyScheduleSlice.actions;

export default busyScheduleSlice.reducer;
