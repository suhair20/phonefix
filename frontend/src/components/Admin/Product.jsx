import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Upload } from "lucide-react";
import Navbar from "./Navbar";
import { useDeleteProductMutation } from "../../../slices/AdminSlice";
import { useGetProductsQuery } from "../../../slices/AdminSlice";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";

const Products = () => {
  const [openDelete, setOpenDelete] = useState(false);
const [selectedId, setSelectedId] = useState(null);
const [loading, setLoading] = useState(false);
   const { data,loading:isLoading,  error } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();

const handleConfirmDelete = async () => {
  try {
      setLoading(true);
    await deleteProduct(selectedId).unwrap();
    toast.success("Product deleted successfully");
      setLoading(false);
    setOpenDelete(false);
  } catch (err) {
    toast.error(err?.data?.message || "Delete failed");
  }
};


    if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">Failed to load products</p>;
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
      <thead className="hidden  md:table-header-group">
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
       <tbody className="grid grid-cols-2 gap-4 md:table-row-group md:grid-cols-none">
  {data?.products?.map((product) => (
    <tr
      key={product._id}
      className="block md:table-row bg-slate-50 md:bg-transparent rounded-lg md:rounded-none shadow md:shadow-none p-3 md:p-0 border md:border-0"
    >
      <td className="block md:table-cell text-center p-2 md:p-3">
        <img
          src={ typeof product.images?.[0] === "string"
        ? product.images[0]
        : product.images?.[0]?.url}
          alt={product.name}
          className="h-20 w-20 object-cover rounded mx-auto"
        />
      </td>

      <td className="block md:table-cell text-center font-medium p-1">
        {product.name}
      </td>

      <td className="block md:table-cell text-center p-1">
        {product.category?.name}
      </td>

      <td className="block md:table-cell text-center font-semibold p-1">
        ₹{product.price}
      </td>

      <td className="block md:table-cell text-center p-1">
        Stock: {product.stock}
      </td>

      <td className="block md:table-cell text-center p-2">
        <div className="flex justify-center gap-2">
        <button
        onClick={() => navigate(`/admin/products/Editproducts/${product._id}`)}
           className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
>
         Edit
</button>
        <button
  onClick={() => {
    setSelectedId(product._id);
    setOpenDelete(true);
  }}
  className="text-red-600 hover:underline"
>
  Delete
</button>
<DeleteModal
  isOpen={openDelete}
  onClose={() => setOpenDelete(false)}
  onConfirm={handleConfirmDelete}
  loading={loading}
/>
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

  );
};

export default Products;


