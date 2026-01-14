import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import { useParams } from "react-router-dom";
import { useGetProductByIdQueryQuery } from '../../../slices/userSlice';



function ShowProduct() {
   const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQueryQuery(id);

      const [mainImage, setMainImage] = useState('');


   useEffect(() => {
  if (product?.images?.length > 0) {
    setMainImage(product.images[0].url);
  }
}, [product]);



  return (
    <div className='bg-[#fefffdd8] mb-20' >
        <Header/>
         
      <div className="flex flex-col  md:flex-row mt-10 gap-6 p-6 bg-[#fefffdd8] rounded-lg shadow-md max-w-6xl mx-auto">
  {/* Left Side - Images */}
  <div className="flex flex-col gap-2  items-center justify-center md:w-1/2">
    <img src={mainImage} alt="Main Watch" className=" object-cover w-80 h-80" />

   <div className="flex gap-2 mt-3">
    {product?.images?.map((img, index) => (
      <img
        key={index}
        src={img.url}
        alt={`Thumbnail ${index}`}
        className={`w-16 h-16 rounded-md border cursor-pointer hover:opacity-80 ${
          mainImage === img.url ? "ring-2 ring-blue-500" : ""
        }`}
        onClick={() => setMainImage(img.url)}
      />
    ))}
  </div>
  </div>

  {/* Right Side - Product Details */}
  <div className="md:w-1/2 flex flex-col justify-between">
    <div>
      <h1 className="text-2xl font-semibold mb-2">{product?.name}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {product?.description}
      </p>
      <p className="text-3xl font-bold text-black my-4">${product?.price}</p>

      {/* Payment Icons */}
      

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <Link  to={'/Cart'} >
        <button className="bg-blue-950 text-white py-2 px-6 rounded hover:bg-blue-900">Add to Cart</button>
        </Link>
      
      </div>

      {/* Security Box */}
      <div className="border p-4 rounded-md bg-gray-50 text-sm">
        <p className="font-semibold mb-2">Security on ponefix</p>
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
