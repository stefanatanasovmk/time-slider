import { configureStore } from "@reduxjs/toolkit";
import busyScheduleReducer from "../features/busyScheduleSlice";
export const store = configureStore({
  reducer: {
    busySchedule: busyScheduleReducer,
  },
});
