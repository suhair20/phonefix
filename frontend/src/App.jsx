import React, { useState, useEffect } from "react";
import './App.css'
import {Outlet} from 'react-router-dom'
import Intropage from "./components/User/Intropage"
import { useDispatch } from "react-redux";
import {Toaster}from 'react-hot-toast'
import { useCheckAuthQuery } from "../slices/userSlice";
import { setauthenticated,logout } from "../slices/AuthSlice";


function App() {
 
const [showIntro, setShowIntro] = useState(true);

const dispatch=useDispatch()


  const { data, error, isLoading } = useCheckAuthQuery();

  useEffect(() => {
    if (data) {
    
      
      dispatch(setauthenticated(data.user));
    }

    if (error) {
     
      
      dispatch(logout());
    }
  }, [data, error, dispatch]);


  useEffect(() => {
    // Hide intro after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  ///

  return (
     <div>
       <Toaster position="bottom-center" />
      {showIntro ? <Intropage /> : <Outlet/>}
    </div>
  )
}

export default App
