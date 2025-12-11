import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Upload } from "lucide-react";
import Navbar from "./Navbar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  bg-gray-50">
  <Navbar />

  {/* Header Section */}
   

  <div className="bg-white mt-20 shadow border-b">
    <div className="flex justify-between items-center px-6 py-4">
      
      {/* Title */}
      <div className="flex items-center gap-3">
        
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
      </div>

      {/* Add Product Button */}
      <button
        onClick={() => navigate("/admin/products/addproduct")}
        className="bg-gradient-to-br from-blue-950 via-black to-blue-950 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
      >
        + Add Product
      </button>
    </div>





 <div className="w-full px-6 mt-6 overflow-x-auto">
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden bg-white">
      
      {/* Desktop Header */}
      <thead className="hidden md:table-header-group">
        <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
          <th className="p-3 text-center border">Image</th>
          <th className="p-3 text-center border">Name</th>
          <th className="p-3 text-center border">Category</th>
          <th className="p-3 text-center border">Price</th>
          <th className="p-3 text-center border">Stock</th>
          <th className="p-3 text-center border">Actions</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="text-gray-700">
        <tr className="md:table-row block md:mb-0 mt-5 bg-slate-50 md:bg-transparent rounded-md shadow md:shadow-none p-4 md:p-0 border md:border-0">
          
          {/* Image */}
          <td className="border p-3 flex justify-center md:table-cell block text-center">
            <img
              src="/your-image.jpg"
              className="w-16 h-16 object-cover rounded-lg shadow-sm mx-auto"
              alt="product"
            />
          </td>

          {/* Name */}
          <td className="p-3 text-center  md:table-cell block font-medium">
            helo
          </td>

          {/* Category */}
          <td className="p-3 text-center  md:table-cell block">
            hgjk
          </td>

          {/* Price */}
          <td className="p-3 text-center  font-semibold text-gray-800 md:table-cell block">
            hgbj
          </td>

          {/* Stock */}
          <td className="p-3 text-center  font-semibold text-gray-800 md:table-cell block">
            hgbj
          </td>

          {/* Actions */}
          <td className="p-3 text-center md:table-cell block">
            <div className="flex justify-center  space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          </td>

        </tr>
      </tbody>

    </table>
  </div>



  </div>
 

  {/* Table Section */}
 

</div>

  );
};

export default Products;


