import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Upload } from "lucide-react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([null, null, null, null]); // 4 image slots
  const navigate = useNavigate();

  const categories = ["Watches", "Shoes", "Mobiles", "Clothes", "Accessories"];

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    images.forEach((img) => {
      if (img) formData.append("images", img);
    });

    // Example API call
    // await axios.post("http://localhost:5000/api/products", formData, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // navigate("/admin/products");
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
      <main className="container mx-auto px-4 py-8">
        <div className="bg-slate-100 border border-gray-200 shadow rounded-2xl p-8 max-w-6xl mx-auto">
           <div className="flex gap-2" >
            <Package className="h-7 p-1 shadow  rounded-md bg-gradient-to-tr from-blue-950 via-black to-blue-950 w-7 text-white" />
            <h2 className="text-xl font-semibold mb-6 text-black">Product Details</h2>
        </div>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side inputs */}
            <div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Product Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter product name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Stock</label>
                <input
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Enter stock quantity"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg  p-3 focus:ring-2 focus:ring-green-500 outline-none"
                >
                    <div className="" >
                  <option className="" value="">Select Category</option>
                  {categories.map((cat, idx) => (
                    <option className="" key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                  </div>
                </select>
              </div>
            </div>

            {/* Right side — 4 image upload boxes */}
            <div>
              

              <div className="grid grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <label
                    key={idx}
                    htmlFor={`imageUpload-${idx}`}
                    className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-green-500 transition relative h-36"
                  >
                    {img ? (
                      <img
                        src={URL.createObjectURL(img)}
                        alt={`Product ${idx + 1}`}
                        className="object-cover w-full h-full rounded-md"
                      />
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-gray-500 mb-2" />
                        <p className="text-gray-600 text-xs">Image {idx + 1}</p>
                      </>
                    )}
                    <input
                      id={`imageUpload-${idx}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, idx)}
                      className="hidden"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
         
            <button
              onClick={handleAddProduct}
              className="bg-gradient-to-tr from-blue-950 via-black to-blue-950 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Save Product
            </button>
          
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
