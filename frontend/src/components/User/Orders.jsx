import React from 'react'
import { CheckCircle } from "lucide-react";
 import Header from './Header';
import { Link } from 'react-router-dom';

function Orders() {
  const orders = [
    {
      id: 1,
      title: "SAFARI ASHPER CB With 6 Pockets 30 L Laptop Backpack",
      color: "Black",
      price: "₹529",
      date: "Feb 21",
      img: "/your-image-1.png",
    },
    {
      id: 2,
      title: "HAVELLS BT5301 Trimmer 100 min Runtime",
      color: "Grey",
      price: "₹715",
      date: "Feb 21",
      img: "/your-image-2.png",
    },
    {
      id: 3,
      title: "Minimalist 2% Salicylic Acid For Oily Skin",
      price: "₹294",
      date: "Nov 29, 2024",
      img: "/your-image-3.png",
    },
    {
      id: 4,
      title: "Minimalist 10% Niacinamide Face Serum",
      price: "₹259",
      date: "Nov 16, 2024",
      img: "/your-image-4.png",
    },
  ];



    
  return (
    <div>
      
<Header/>
 
    <div className="p-4 md:p-8 max-w-5xl mx-auto">

      {/* Search Bar */}
      <div className="flex items-center  gap-3 mb-6">
        <input
          type="text"
          className="flex-1 border  p-3 rounded-md outline-none"
          placeholder="Search your orders here"
        />
        <button className="bg-blue-600 text-white px-4 py-3 rounded-md">
          Search Orders
        </button>
      </div>

      {/* Orders List */}
      <Link to={'/Orderdetials'} >
      <div className="space-y-4">
        {orders.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start shadow-md md:items-center gap-4 p-5 border rounded-md  bg-white"
          >
            {/* Image */}
            <img
              src={item.img}
              alt=""
              className="h-24 w-24 object-contain"
            />

            {/* Title & Color */}
            <div className="flex-1">
              <p className="font-medium text-sm md:text-base line-clamp-2">
                {item.title}
              </p>
              {item.color && (
                <p className="text-gray-500 text-sm mt-1">Color: {item.color}</p>
              )}
            </div>

            {/* Price */}
            <div className="font-semibold text-lg">{item.price}</div>

            {/* Delivery info */}
            <div className="text-sm">
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle className="h-4 w-4" />
                Delivered on {item.date}
              </div>
              <p className="text-gray-500">Your item has been delivered</p>

              <button className="text-blue-600 mt-1 hover:underline">
                ⭐ Rate & Review Product
              </button>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </div>
    </div>
  )
}

export default Orders
