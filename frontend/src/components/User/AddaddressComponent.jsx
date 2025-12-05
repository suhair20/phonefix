import React from 'react'

function AddaddressComponent() {
  return (
    <div className='h-full' >
     <form className="space-y-6">
  <div className="grid grid-cols-2   p-1 md:grid-cols-2 gap-4">

    {/* Full Name */}
    <input
      type="text"
      placeholder="Full Name"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
    />

    {/* District */}
   <select
  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400  z-50"
>
      <option className=''  value="">Select District</option>
      <option>Thiruvananthapuram</option>
      <option>Kollam</option>
      <option>Pathanamthitta</option>
      <option>Alappuzha</option>
      <option>Kottayam</option>
      <option>Idukki</option>
      <option>Ernakulam</option>
      <option>Thrissur</option>
      <option>Palakkad</option>
      <option>Malappuram</option>
      <option>Kozhikode</option>
      <option>Wayanad</option>
      <option>Kannur</option>
      <option>Kasaragod</option>
    </select>

    {/* Phone Number */}
    <input
      type="text"
      placeholder="Phone Number"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
    />

    {/* Address Line */}
    <input
      type="text"
      placeholder="Address Line"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
    />

    {/* Landmark */}
    <input
      type="text"
      placeholder="Landmark (optional)"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
    />

    {/* City */}
    <input
      type="text"
      placeholder="City"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
    />

    {/* Pincode */}
    <input
      type="text"
      placeholder="Pincode"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
    />

      <div className="flex justify-start">
    <button
      type="submit"
      className="bg-blue-950 w-24 h-10 rounded-md text-white font-semibold"
    >
      Save
    </button>
  </div>

  </div>

  {/* Save Button */}

</form>

    </div>
  )
}

export default AddaddressComponent
