import React from 'react'
import Header from './Header'
import { useState } from 'react';
import Personalinformation from './Personalinformation';
import ManageAddress from './ManageAddress';


import {User,ShoppingBag,Heart,Ticket,HelpCircle,Package,LogOut} from "lucide-react"
import { Link } from 'react-router-dom';

function Profile() {

const [mobilePage, setMobilePage] = useState(null);
  const [activeMenu, setActiveMenu] = useState("profile");


const handleMenuClick = (menu) => {
  setActiveMenu(menu);

  // ON MOBILE → open full page
  if (window.innerWidth < 768) {
    setMobilePage(menu);
  }
};



  return (
    <>
    <Header/>
    <div className=' shadow-md  bg-gray-400 h-full ' >
   

  <div className="fixed md:px-32    items-center justify-center left-0 w-full p-4 h-full bg-slate-100 z-50 overflow-y-auto animate-slideDown">

    <div  className='  md:px-16  items-center justify-center   ' >
    
    {/* Header */}
    


    {/* Menu Items */}
    <div className="p-4  md:flex items-center justify-center grid  grid-cols-2 gap-10 md:gap-20">
     <Link to={'/Orders'} >
      <button className="md:flex-row flex flex-col items-center border justify-center border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
  <ShoppingBag className="md:w-6 md:h-10 text-blue-600" />
  <span className="text-base font-medium">Orders</span>
</button>
</Link>


      <button className="md:flex-row flex flex-col items-center border border-gray-200 hover:border-pink-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
        <Heart className="md:w-5 md:h-10 text-pink-600" />
        <span className='text-base font-medium' >Wishlist</span>
      </button>

      <button className="md:flex-row flex flex-col items-center border border-gray-200 hover:border-orange-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
        <Ticket className="md:w-6 md:h-10 text-orange-600" />
        <span className='text-base font-medium'  >Coupons</span>
      </button>

      <button className="md:flex-row flex flex-col items-center border border-gray-200 hover:border-green-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
        <HelpCircle className="md:w-6 md:h-10 text-green-600" />
        <span className='text-base font-medium' >Help Center</span>
      </button>

    </div>
   <div className="w-full h-full">

  {/* MOBILE SMALL SCREEN MODE */}
  <div className="md:hidden w-full">
    
    {/* If no page selected → show only sidebar */}
    {!mobilePage && (
      <div className="p-4 space-y-2">
 <div className='flex  ' > 
      <User className="text-blue-600 mt-1 " size={20} />
      <p className="font-semibold  p-1 text-gray-600 mb-3">ACCOUNT SETTINGS</p>
</div>
        <div
          className=" px-6 hover:bg-blue-900 hover:text-white bg-gray-100 rounded cursor-pointer"
          onClick={() => handleMenuClick("profile")}
        >
          Profile Information
        </div>

        <div
          className=" px-6 bg-gray-100 rounded cursor-pointer"
          onClick={() => handleMenuClick("address")}
        >
          Manage Address
        </div>


<div className="flex border-r items-center gap-2 text-gray-600 font-semibold mb-3">
   <ShoppingBag className="text-blue-600" size={18} /> 
   MYOWN 
   </div>
    <ul className="space-y-1"> 
      <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"> All Notification </li> 
      <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"> MY Review </li>
       <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer"> MY Wishlist </li> 
       </ul> 
       <div className="flex pt-4 border-t items-center gap-2 text-gray-600 font-semibold mb-3">
         <LogOut className="text-blue-600" size={18} /> Logout </div>
          



      </div>
    )}

    {/* If page selected → open full-screen page */}
    {mobilePage === "profile" && (
      <div>
        <button className="p-3" onClick={() => setMobilePage(null)}>← Back</button>
        <Personalinformation />
      </div>
    )}

    {mobilePage === "address" && (
      <div>
        <button className="p-3" onClick={() => setMobilePage(null)}>← Back</button>
        <ManageAddress />
      </div>
    )}
  </div>

  {/* DESKTOP VIEW */}
  <div className="hidden md:flex w-full h-full">

    {/* LEFT SIDEBAR */}
    <div className="w-72  border-r p-4">
      <div className='flex  ' > 
      <User className="text-blue-600 mt-1 " size={20} />
      <p className="font-semibold  p-1 text-gray-600 mb-3">ACCOUNT SETTINGS</p>
</div>
      <div
        className={` p-1 px-3 mb-2 hover:bg-blue-900 hover:text-white  cursor-pointer ${activeMenu === "profile" ? "text-blue-800   rounded-md shadow-md " : ""}`}
        onClick={() => handleMenuClick("profile")}
      >
        Profile Information
      </div>

      <div
        className={` p-1 mb-2 px-3 hover:bg-blue-900  hover:text-white cursor-pointer ${activeMenu === "address" ? "text-blue-800 rounded-md shadow-xl " : ""}`}
        onClick={() => handleMenuClick("address")}
      >
        Manage Address
      </div>




<div className="flex  border-r items-center gap-2 text-gray-600 font-semibold mb-3">
   <ShoppingBag className="text-blue-600" size={18} /> 
   MYOWN 
   </div>
    <ul className="space-y-1"> 
      <li className={`p-1 px-3  hover:bg-blue-900 hover:text-white rounded cursor-pointer ${activeMenu === "Notification" ? "text-blue-800 rounded-md shadow-xl " : ""}`}
        onClick={() => handleMenuClick("Notification")}> All Notification </li> 
      <li className={`p-1 px-3  hover:bg-blue-900 hover:text-white rounded cursor-pointer ${activeMenu === "Review" ? "text-blue-800 rounded-md shadow-xl " : ""}`}
        onClick={() => handleMenuClick("Review")}> MY Review </li>
       <li className={`p-1 px-3  hover:bg-blue-900 hover:text-white rounded cursor-pointer ${activeMenu === "Wishlist" ? "text-blue-800 rounded-md shadow-xl " : ""}`}
        onClick={() => handleMenuClick("Wishlist")}> MY Wishlist </li> 
       </ul> 
       <div className="flex pt-4 border-t items-center gap-2 text-gray-600 font-semibold mb-3">
         <LogOut className="text-blue-600" size={18} /> Logout </div>
          


    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 p-5">
      {activeMenu === "profile" && <Personalinformation />}
      {activeMenu === "address" && <ManageAddress />}
    </div>
  </div>
</div>



</div>
 
  </div>


    </div>
    </>
  )
}

export default Profile
