// src/utils/checkAuth.js
import {jwtDecode}from  'jwt-decode'
import { logout,setauthenticated } from "../../slices/AuthSlice";

export const checkAuthOnLoad = (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp > currentTime) {
     
      dispatch(setauthenticated(decoded));
    } else {
    
      console.log("Token expired, logging out...");
      localStorage.removeItem("token");
      dispatch(logout());
    }
  } catch (error) {
    console.log("Invalid token", error);
    localStorage.removeItem("token");
    dispatch(logout());
  }
};
