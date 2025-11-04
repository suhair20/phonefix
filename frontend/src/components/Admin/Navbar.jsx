
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

function  Navbar(){
    return(

       
    <div className="bg-white shadow h-16 flex items-center justify-between px-8  fixed top-0 w-full">
      <h1 className="text-3xl font-bold">Phonefix</h1>
      <div className="flex items-center gap-6">
        <FaBell className="text-gray-600 text-xl cursor-pointer" />
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>
    </div>
 
    )
}

export default Navbar