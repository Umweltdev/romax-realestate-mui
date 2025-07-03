import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
  errorMessage: "",
  registerFlag: false,
  isRegistering: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 🔐 Login
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = "";
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload || "Login failed";
    },

    // 🚪 Logout
    logout: () => ({ ...initialState }),

    // 📝 Register
    registerStart: (state) => {
      state.isRegistering = true;
      state.error = false;
      state.errorMessage = "";
    },
    registerSuccess: (state) => {
      state.isRegistering = false;
      state.registerFlag = true;
    },
    registerFailure: (state, action) => {
      state.isRegistering = false;
      state.error = true;
      state.errorMessage = action.payload || "Registration failed";
    },

    // 🔄 Reset (e.g. after showing alert or navigating away)
    resetState: (state) => {
      state.error = false;
      state.errorMessage = "";
      state.isFetching = false;
      state.registerFlag = false;
      state.isRegistering = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
  resetState,
} = userSlice.actions;

export default userSlice.reducer;
