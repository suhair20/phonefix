import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Upload } from "lucide-react";
import { FaTag } from "react-icons/fa";

const Category = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-white shadow border-b  ">
      {/* Header Section */}
      <div className="flex justify-between px-2 py-2 items-center ">
       <div className="container mx-auto px-4  flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-950 via-black to-blue-950 shadow">
            <FaTag className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">category</h1>
            
          </div>
        </div>
        <button
          onClick={() => navigate("/admin/products/addproduct")}
          className="bg-gradient-to-br from-blue-950 via-black to-blue-950 text-white px-5  rounded-lg hover:opacity-90 transition"
        >
          + Add Product
        </button>
      </div>

      {/* Table Section */}
    
    </div>





  


  <div className="overflow-x-auto mt-4 ">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
              <th className="p-3 text-left border">Image</th>
              <th className="p-3 text-left border">Name</th>
              <th className="p-3 text-left border">Category</th>
              <th className="p-3 text-left border">Price</th>
              <th className="p-3 text-left border">Stock</th>
              <th className="p-3 text-center border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr
                  key={p._id}
                  className="hover:bg-gray-50 transition text-gray-700"
                >
                  <td className="p-3 border">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 object-cover rounded-lg shadow-sm"
                    />
                  </td>
                  <td className="p-3 border font-medium"> helo{p.name}</td>
                  <td className="p-3 border">{p.category}</td>
                  <td className="p-3 border font-semibold text-gray-800">
                    ₹{p.price}
                  </td>
                  <td
                    className={`p-3 border ${
                      p.stock > 0 ? "text-green-600" : "text-red-600"
                    } font-medium`}
                  >
                    {p.stock}
                  </td>
                  <td className="p-3 border text-center">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                      Edit
                    </button>
                    <button className="ml-2 px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="p-6 text-center text-gray-500 italic"
                >
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>






    </>

  );
};

export default Category;


