import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Upload } from "lucide-react";
import { FaTag } from "react-icons/fa";
import Navbar from "./Navbar";
import { useGetCategoryQuery,useToggleCategoryMutation } from "../../../slices/AdminSlice";
import { toast } from "react-toastify";

const Category = () => {
 
  const navigate = useNavigate();


    const { data, isLoading } = useGetCategoryQuery();
  const [toggleCategory] = useToggleCategoryMutation();

 console.log(data);
 
  const handleToggle = async (id) => {
    try {
      await toggleCategory(id).unwrap();
      toast.success("Category status updated");
    } catch(error) {
      console.log("Toggle error:", error);
  toast.error(error?.data?.message || "Failed to update category");
    }
  };



  return (
    <>
    <div className="min-h-screen  bg-gray-50">
  <Navbar />

  {/* Header Section */}
   

  <div className="bg-white mt-20 shadow border-b">
    <div className="flex justify-between items-center px-6 py-4">
      
      {/* Title */}
      <div className="flex items-center gap-3">
        
        <h1 className="text-2xl font-bold text-gray-800">Category</h1>
      </div>

      {/* Add Product Button */}
      <button
        onClick={() => navigate("/admin/category/addcategory")}
        className="bg-gradient-to-br from-blue-950 via-black to-blue-950 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
      >
        + Add Ctaegory
      </button>
    </div>





 <div className="w-full px-6 mt-6 overflow-x-auto">
    <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden bg-white">
      
      {/* Desktop Header */}
      <thead className="hidden  md:table-header-group bg-gray-100">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Description</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

      {/* Table Body */}
     <tbody className="text-gray-700">
  {data?.categories.map((cat) => (
    <tr
      key={cat._id}
      className="md:table-row block md:mb-0 mt-5 bg-slate-50 md:bg-transparent rounded-md shadow md:shadow-none p-4 md:p-0 border md:border-0"
    >
      {/* Category Icon (instead of image) */}
      

      {/* Name */}
      <td className="p-1 text-center md:table-cell block font-bold ">
        {cat.name}
      </td>

      {/* Description */}
      <td className="p-1 text-center md:table-cell block text-gray-600">
        {cat.description}
      </td>

     

      {/* Status */}
      <td className="p-1 text-center font-semibold md:table-cell block">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            cat.is_list
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {cat.is_list ? "Active" : "Disabled"}
        </span>
      </td>

      {/* Actions */}
      <td className="p-1 text-center md:table-cell block">
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => handleToggle(cat._id)}
            className="px-3 py-1 bg-red-700 text-white text-sm rounded-md hover:opacity-90 transition"
          >
            {cat.is_list ? "Disable" : "Enable"}
          </button>

          <button
            onClick={() => navigate(`/admin/edit-category/${cat._id}`)}
            className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>


    </table>
  </div>



  </div>
 

  {/* Table Section */}
 

</div>
</>
  );
};

export default Category;


