import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Upload } from "lucide-react";
import { useAddCategoryMutation } from "../../../slices/AdminSlice";
import {toast} from "react-toastify"


const AddCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  

  const Navigate =useNavigate()

  const [addcategory,{isLoading}] = useAddCategoryMutation()
 


  
const handleAddProduct = async (e) => {
      e.preventDefault();
    console.log("heloo");
    
  if (!name.trim()) {
    toast.error("Category name is required");
    return;
  }

  if (!description.trim()) {
    toast.error("Description is required");
    return;
  }

  try {
    const res = await addcategory({
      name,
      description,
    }).unwrap();


    if(res.success){
    toast.success("Category added successfully");
Navigate('/admin/category')

    }
    // reset form
    

  } catch (error) {
    toast.error(
      error?.data?.message || "Failed to add category"
    );
  }
};
  

 

 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-950 via-black to-blue-950 shadow">
            <Package className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">phonefix</h1>
            <p className="text-sm text-gray-500">Create a new product entry</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container items-center justify-center mx-auto px-4 py-8">
        <div className="bg-slate-100 border border-gray-200 shadow rounded-2xl p-8 max-w-4xl mx-auto">
           <div className="flex gap-2" >
            <Package className="h-7 p-1 shadow  rounded-md bg-gradient-to-tr from-blue-950 via-black to-blue-950 w-7 text-white" />
            <h2 className="text-xl font-semibold mb-6 text-black">Category Details</h2>
        </div>
          

          <div className="grid grid-cols-1 items-center justify-center gap-8">
            {/* Left side inputs */}
            <div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700"> Category Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter product name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">discription</label>
                <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter category description"
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none resize-none"
        />
              </div>

             

             
            </div>

            {/* Right side — 4 image upload boxes */}
            <div>
              

             
            </div>
          </div>

          {/* Submit Button */}
         
            <button
              onClick={handleAddProduct}
               disabled={isLoading}
              className="bg-gradient-to-tr from-blue-950 via-black to-blue-950 text-white px-6 py-3 rounded-md font-medium transition"
            >
              {isLoading ? "Saving..." : "Save Category"}
            </button>
          
        </div>
      </main>
    </div>
  );
};

export default AddCategory;