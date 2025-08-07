import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image2 from '../../assets/watch.png';
import image3 from '../../assets/headset.png';
import image4 from '../../assets/earrrrpod.png';
import image5 from '../../assets/earpod.png';
import Header from './Header';

const images = [image2, image3, image4, image5];

function ShowProduct() {

      const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div className='bg-[#fefffdd8] mb-20' >
        <Header/>
         
      <div className="flex flex-col  md:flex-row mt-10 gap-6 p-6 bg-[#fefffdd8] rounded-lg shadow-md max-w-6xl mx-auto">
  {/* Left Side - Images */}
  <div className="flex flex-col gap-2  items-center justify-center md:w-1/2">
    <img src={mainImage} alt="Main Watch" className=" object-cover w-80 h-80" />

    <div className="flex gap-2 mt-3">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-16 h-16 rounded-md border cursor-pointer hover:opacity-80 ${
                mainImage === img ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
  </div>

  {/* Right Side - Product Details */}
  <div className="md:w-1/2 flex flex-col justify-between">
    <div>
      <h1 className="text-2xl font-semibold mb-2">Rolex GMT-Master Pepsi 16750</h1>
      <p className="text-sm text-gray-500 mb-2">
        Used (<span className="text-green-600">Very good</span>) | Year: 1985 (Approx.) <br />
        No original box | No original papers
      </p>
      <p className="text-3xl font-bold text-black my-4">$9,600</p>

      {/* Payment Icons */}
      <div className="flex items-center gap-2 mb-4">
        <img src="/visa.png" alt="Visa" className="h-6" />
        <img src="/mastercard.png" alt="MasterCard" className="h-6" />
        <img src="/amex.png" alt="Amex" className="h-6" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <Link  to={'/Cart'} >
        <button className="bg-blue-950 text-white py-2 px-6 rounded hover:bg-blue-900">Add to Cart</button>
        </Link>
        <button className="border border-blue-950 text-blue-950 py-2 px-6 rounded hover:bg-gray-100">Suggest a Price</button>
      </div>

      {/* Security Box */}
      <div className="border p-4 rounded-md bg-gray-50 text-sm">
        <p className="font-semibold mb-2">Security on Chrono24</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Payment via Escrow Service</li>
          <li>Ownership confirmed</li>
          <li className="line-through">No legal obligation to accept returns</li>
        </ul>
      </div>
    </div>

    {/* Seller */}
    <div className="mt-6">
      <p className="text-sm text-gray-600">Private Seller 🇺🇸</p>
    </div>
  </div>
</div>

    </div>
  )
}

export default ShowProduct
