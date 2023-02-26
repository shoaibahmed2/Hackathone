import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
export const eventSlice = createSlice({
  name: "Eventplanner",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: { value: [] },
  reducers: {},
});

export default eventSlice.reducer