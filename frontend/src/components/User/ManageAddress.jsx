import React from 'react'
import { useState } from 'react';
import AddaddressComponent from './AddaddressComponent';

function ManageAddress() {
    const [activeMenu, setActiveMenu] = useState("profile");
  return (
    <div>
      <div className='min-h-screen' >
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>

      <div onClick={()=>setActiveMenu("address")} className={`border p-4 rounded mb-5 flex items-center gap-2 text-blue-600 cursor-pointer `}>
        <span className="text-xl font-bold">+</span>
        ADD A NEW ADDRESS
      </div>
       <div className="flex-1 ">
      
  {activeMenu === "address" && (
    <div>
    <button 
      onClick={()=>setActiveMenu("profile")}
      className=" top-3 left-3 text-blue-600 hover:text-black text-xl"
    >
      ×
    </button>
    <AddaddressComponent />
    </div>
  )}

 

</div>

      <div className="border rounded p-5 flex justify-between">
        <div>
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">WORK</span>

          <p className="font-semibold mt-2">Mohammad Zayed  9745640979</p>
          <p className="text-gray-700 mt-1">
            Brototype kinfra kakkenchery, Park View Lodge, Chelambra, Kerala - 673634
          </p>
        </div>

        <div className="cursor-pointer">
          <span className="text-gray-500">⋮</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ManageAddress
