import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Config } from "firebase/auth";
import Useevent from "../customhooks/useevents";
import { auth } from "../firebase/configration";

const newuserSignup = createAsyncThunk("user/setuser", async (item) => {
  try {
    await createUserWithEmailAndPassword(auth, item.email, item.password);
  } catch (error) {
    console.log("error from signup");
  }
});

const newSignin = createAsyncThunk("signin/setsignin", async (item) => {
  try {
    signInWithEmailAndPassword(auth, item.newemail, item.newpassword);
  } catch (error) {}
});

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    singupUser: {},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(newuserSignup.fulfilled, (state, action) => {
      let newArray: any = { ...state, singupUser: action.payload };
      return newArray;
    });
  },
  extraReducers: (builer) => {
    builer.addCase(newSignin.fulfilled, (state, action) => {
      if (action.payload.newemail) {
        let newstate: any = { ...state, user: action.payload?.newemail };
        return newstate;
      }
    });
  },
});

export default signupSlice.reducer;
export { newuserSignup,newSignin };
