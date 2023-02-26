import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../store/eventslice";
import signupSlice from "../store/authslice"
export const store = configureStore({
  reducer: { eventSlice,
    signupSlice },
});
