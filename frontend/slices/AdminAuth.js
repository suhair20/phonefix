import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    isAuthenticated: false,
    admin: null,
  },
  reducers: {
    setAdminAuthenticated: (state, action) => {
      state.isAuthenticated = true;
      state.admin = action.payload;
    },
    adminLogout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
    },
  },
});

export const { setAdminAuthenticated, adminLogout } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
