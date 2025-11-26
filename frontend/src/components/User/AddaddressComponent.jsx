import React from 'react'

function AddaddressComponent() {
  return (
    <div className='h-full' >
      <form className="space-y-10 ">
            <div className="grid grid-cols-2   gap-4">
          <input type="text" placeholder="Full Name" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400 " />
          <input type="email" placeholder="Email" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          <input type="text" placeholder="Phone Number" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          <input type="text" placeholder="Address Line 1" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          <input type="text" placeholder="Address Line 2" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
         
            <input type="text" placeholder="City" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
            <input type="text" placeholder="Pincode" className="inputStyle bw-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />

            <div className='  items-end justify-end flex gap-10' >
          <button className='bg-blue-600  w-20 h-10 rounded-md text-white ' >save</button>
          <button className='bg-red-600   w-20 h-10 rounded-md text-white ' >cancel</button>
          </div>

          </div>
         
        </form>
    </div>
  )
}

export default AddaddressComponent
