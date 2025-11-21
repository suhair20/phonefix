import React from 'react'
import Header from './Header'

import {ShoppingBag,Heart,Ticket,HelpCircle} from "lucide-react"

function Profile() {
  return (
    <>
    <Header/>
    <div className='  ' >
   

  <div className="fixed  px-28 left-0 w-full p-4 h-full bg-slate-100 z-50 overflow-y-auto animate-slideDown">
    
    {/* Header */}
    <div className="flex items-center shadow-md bg-white w-48 rounded-md justify-between p-4 border-b">
      <h2 className="text-lg font-semibold">My Account</h2>
      
    </div>

    {/* User Info */}
    <div className="p-4   border-b shadow-md inline-block ">
      <p className="font-medium w-full ">moidheesuhair@gmail.com </p>
     
    </div>

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

  </div>


    </div>
    </>
  )
}

export default Profile
