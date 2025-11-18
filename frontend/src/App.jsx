import React, { useState, useEffect } from "react";
import './App.css'
import {Outlet} from 'react-router-dom'
import Intropage from "./components/User/Intropage"
import { useDispatch } from "react-redux";
import { checkAuthOnLoad } from "./utils/CheckAuth";


function App() {
 
const [showIntro, setShowIntro] = useState(true);

const dispatch=useDispatch()


useEffect(()=>{
    checkAuthOnLoad(dispatch);
},[dispatch])


  useEffect(() => {
    // Hide intro after 3 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



  return (
     <div>
      {showIntro ? <Intropage /> : <Outlet/>}
    </div>
  )
}

export default App
