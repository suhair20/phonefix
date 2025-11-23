import React from 'react'
import Header from './Header'
import { useState } from 'react';
import Personalinformation from './Personalinformation';
import ManageAddress from './ManageAddress';

import {User,ShoppingBag,Heart,Ticket,HelpCircle,Package,LogOut} from "lucide-react"

function Profile() {


  const [activeMenu, setActiveMenu] = useState("profile");
  return (
    <>
    <Header/>
    <div className=' shadow-md  bg-gray-400  ' >
   

  <div className="fixed px-32    items-center justify-center left-0 w-full p-4 h-full bg-slate-100 z-50 overflow-y-auto animate-slideDown">

    <div  className='  px-16  items-center justify-center   ' >
    
    {/* Header */}
    


    {/* Menu Items */}
    <div className="p-4 flex items-center justify-center  gap-20">
      
      <button className="flex items-center border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
  <ShoppingBag className="w-6 h-10 text-blue-600" />
  <span className="text-base font-medium">Orders</span>
</button>

      <button className="flex items-center border border-gray-200 hover:border-pink-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
        <Heart className="w-5 h-10 text-pink-600" />
        <span className='text-base font-medium' >Wishlist</span>
      </button>

      <button className="flex items-center border border-gray-200 hover:border-orange-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
        <Ticket className="w-6 h-10 text-orange-600" />
        <span className='text-base font-medium'  >Coupons</span>
      </button>

      <button className="flex items-center border border-gray-200 hover:border-green-500 hover:bg-blue-50 transition-all shadow-md p-8 rounded-xl gap-3">
        <HelpCircle className="w-6 h-10 text-green-600" />
        <span className='text-base font-medium' >Help Center</span>
      </button>

    </div>
       <div className="w-full flex border min-h-screen">

      {/* LEFT SIDEBAR */}
      <div className="w-72 border ">

       

        {/* My Orders */}
       

        {/* Account Settings */}
        <div className="px-4 mt-4">
          <div className="flex items-center gap-2 text-gray-600 font-semibold mb-3">
            <User className="text-blue-600" size={18} />
            ACCOUNT SETTINGS
          </div>

          <ul className="space-y-1">
           <li
  onClick={() => setActiveMenu("profile")}
  className={`py-2 px-3 cursor-pointer ${
    activeMenu === "profile" ? "bg-blue-50 text-blue-600" : "text-gray-700"
  }`}
>
  Profile Information
</li>

           <li
  onClick={() => setActiveMenu("address")}
  className={`py-2 px-3 cursor-pointer ${
    activeMenu === "address" ? "bg-blue-50 text-blue-600" : "text-gray-700"
  }`}
>
  Manage Addresses
</li>

            <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
            
            </li>
          </ul>

           <div className="flex border-r items-center gap-2 text-gray-600 font-semibold mb-3">
            <ShoppingBag className="text-blue-600" size={18} />
            MYOWN
          </div>
          <ul className="space-y-1">
             <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
            All Notification
            </li>

           <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
            MY Review
            </li>

            <li className="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
            MY Wishlist
            </li>
          </ul>
           <div className="flex pt-4 border-t items-center gap-2 text-gray-600 font-semibold mb-3">
            <LogOut className="text-blue-600" size={18} />
            Logout
          </div>
        </div>
      </div>

      {/* RIGHT SIDE CONTENT */}
     <div className="flex-1 p-10">

  {activeMenu === "profile" && (
    <Personalinformation />
  )}

  {activeMenu === "address" && (
    <ManageAddress />
  )}

</div>
    </div>
</div>
 
  </div>


    </div>
    </>
  )
}

export default Profile
