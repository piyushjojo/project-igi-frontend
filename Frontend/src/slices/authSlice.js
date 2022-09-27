import { createSlice } from "@reduxjs/toolkit";

// create an auth slice to maintain the user signin status
const authSlice = createSlice({
  name: "auth",
  initialState: {
    // user is not logged in
    status: false,
  },
  reducers: {
    login: (state, action) => {
      // the user is now signed in
      state.status = true;
      console.log("inside sigin Action " + state.status);

      // localStorage
      // - built-in javascript object
      // - used to store something (key-value pairs)
      // - will NOT be cleared untill the keys get removed explicitly

      // sessionStorage
      // - built-in javascript object
      // - used to store something (key-value pairs)
      // - will be cleared automatically after the session gets killed

      // get the token from response and save it in sessionStorage
      // const token = result.data.token

      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("id", response.data.id);
      // localStorage.setItem("name", response.data.name);

      // sessionStorage["token"] = action.payload["token"];
      // sessionStorage["name"] = action.payload["name"];
      // sessionStorage["id"] = action.payload["id"];
    },
    logout: (state, action) => {
      // the user is signed out
      state.status = false;

      // remove the user token and name from sessionStorage
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("id");
    },
  },
});

// export the reducer for authSlice
export default authSlice.reducer;

// export the actions
export const { login, logout } = authSlice.actions;
