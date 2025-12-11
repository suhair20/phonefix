
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Package, Upload } from "lucide-react";

function  Navbar(){
    return(

       
   <div className="bg-white shadow h-16 flex items-center justify-between px-8 fixed top-0 w-full">

  {/* LEFT SECTION → Logo + Title */}
  <div className="flex items-center gap-3">
    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-950 via-black to-blue-950 shadow">
      <Package className="h-7 w-7 text-white" />
    </div>

    <h1 className="text-3xl font-bold">LoBuy</h1>
  </div>

  {/* RIGHT SECTION */}
  <div className="flex items-center gap-6">
    <FaBell className="text-gray-600 text-xl cursor-pointer" />
    <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
  </div>
</div>
 
    )
}

export default Navbar