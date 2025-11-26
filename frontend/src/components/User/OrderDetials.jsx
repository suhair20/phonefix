import React from 'react'
import Header from './Header'


function OrderDetials() {
  return (
    <div>
        <Header/>
       <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      
      {/* Main container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            
            {/* Text Info */}
            <div>
              <h1 className="text-xl font-semibold">
                SAFARI ASHPER CB With 6 Pockets 30 L Laptop Backpack
              </h1>
              <p className="text-gray-600 text-sm mt-1">Black</p>
              <p className="text-gray-500 text-sm mt-1">Seller: Wizrob Fashion</p>

              <p className="text-2xl font-bold mt-3">₹529</p>
            </div>

            {/* Image */}
            <img
              src="/your-image.png"
              alt=""
              className="h-24 w-24 object-contain mx-auto"
            />
          </div>

          {/* Status Timeline */}
          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-600 rounded-full h-5 w-5"></div>
              <p className="font-medium">Order Confirmed, Feb 19</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-green-600 rounded-full h-5 w-5"></div>
              <p className="font-medium">Delivered, Feb 21</p>
            </div>
          </div>

          <button className="text-blue-600 font-medium mt-4">See All Updates →</button>

          {/* Chat Button */}
          <div className="mt-8 flex justify-center">
            <button className="border rounded-full px-4 py-2 flex items-center gap-2">
              <span>💬</span> Chat with us
            </button>
          </div>

          {/* Order ID */}
          <p className="mt-8 text-sm text-gray-600">
            Order <span className="font-medium">#OD433683617872382100</span>
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">

          {/* Delivery Details */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold">Delivery details</h2>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2">
                <span>🏠</span>
                <p className="text-sm">
                  Brototype kinfra kakkemcherry Park View Lodge...
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span>👤</span>
                <p className="text-sm font-medium">Mohammad Zayed — 9745640979</p>
              </div>
            </div>
          </div>

          {/* Price Details */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold">Price details</h2>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <p>Listing price</p>
                <p className="line-through">₹2,999</p>
              </div>

              <div className="flex justify-between">
                <p>Special price</p>
                <p>₹479</p>
              </div>

              <div className="flex justify-between">
                <p>Total fees</p>
                <p>₹50</p>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-semibold text-lg">
                <p>Total amount</p>
                <p>₹529</p>
              </div>

              {/* Payment Method */}
              <p className="mt-4 text-sm font-medium">Payment method</p>
              <div className="border rounded-md p-3 flex items-center justify-between">
                <span className="text-sm">Cash On Delivery</span>
              </div>

              {/* Invoice Button */}
              <button className="mt-4 w-full border rounded-md py-2 flex justify-center items-center gap-2">
                ⬇ Download Invoice
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default OrderDetials
