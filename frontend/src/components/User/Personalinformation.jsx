import React from 'react'

function Personalinformation() {
  return (
    <div className="flex-1 p-10">

        {/* Personal Info Section */}
        <div className="max-w-3xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Personal Information
            </h2>
            <p className="text-blue-600 cursor-pointer font-medium">Edit</p>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-8">
            <input
              type="text"
              className="border p-3 rounded bg-gray-100 w-full"
              placeholder=""
            />
            <input
              type="text"
              className="border p-3 rounded bg-gray-100 w-full"
              placeholder=""
            />
          </div>

          {/* Gender */}
          <p className="font-medium text-gray-700 mb-2">Your Gender</p>

          <div className="flex items-center gap-6 mb-10">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              <span>Male</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              <span>Female</span>
            </label>
          </div>

          {/* Email Address */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Email Address
            </h2>
          
          </div>

          <input
            type="email"
            className="border p-3 rounded bg-gray-100 w-80"
            value="mozayed7736@gmail.com"
            disabled
          />

           <div className="flex pt-4 justify-between items-center mb-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Phone Number
            </h2>
          
          </div>
          <input
            type="email"
            className="border p-3 rounded bg-gray-100 w-80"
            value="8606990014"
            disabled
          />
        </div>
      </div>
  )
}

export default Personalinformation
