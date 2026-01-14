import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Package, Upload } from "lucide-react";
import {
  useGetCategoryQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../slices/AdminSlice";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // API calls
  const { data, isLoading } = useGetProductByIdQuery(id);
  const { data: catData } = useGetCategoryQuery();
  const [updateProduct, { isLoading: updating }] =
    useUpdateProductMutation();

    useEffect(() => {
  console.log("PRODUCT IMAGES 👉", data?.product?.images);
}, [data]);

  // Form states
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [existingImages, setExistingImages] = useState([]);
  const [images, setImages] = useState([null, null, null, null]);
  const [imageIndexes, setImageIndexes] = useState([]);

  // Prefill form
  useEffect(() => {
    if (data?.product) {
      const p = data.product;
      setName(p.name);
      setPrice(p.price);
      setStock(p.stock);
      setCategory(p.category?._id);
      setDescription(p.description || "");
      setExistingImages(p.images || []); 
    }
  }, [data]);

  // Image change
  const handleImageChange = (e, index) => {
  const file = e.target.files[0];
  if (!file) return;

  const newImages = [...images];
  newImages[index] = file;
  setImages(newImages);

  setImageIndexes((prev) =>
    prev.includes(index) ? prev : [...prev, index]
  );
};

  // Submit update
  const handleUpdateProduct = async () => {
    if (!name || !price || !stock || !category) {
      toast.error("Required fields missing");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("description", description);

    // Only append images if replaced
    images.forEach((img,idx) => {
       if (img) {
    formData.append("images", img);
    formData.append("imageIndexes", idx);
       }
    });

    try {
      const res = await updateProduct({ id, formData }).unwrap();
      if (res.success) {
        toast.success("Product updated successfully");
        navigate("/admin/products");
      }
    } catch (error) {
        console.log(error);
        
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-950 via-black to-blue-950 shadow">
            <Package className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Edit Product</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-slate-100 p-8 rounded-2xl shadow max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left */}
            <div className="grid md:grid-cols-2 gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Stock"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="">Select Category</option>
                {catData?.categories?.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Description"
                className=" w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500 outline-none md:col-span-2 input resize-none"
              />
            </div>

       <div className="grid grid-cols-2 gap-4">
  {[0, 1, 2, 3].map((idx) => (
    <div
      key={idx}
      className="border-2 border-dashed rounded-lg h-36 flex items-center justify-center overflow-hidden relative"
    >
      {/* New image preview */}
      {images[idx] ? (
        <img
          src={URL.createObjectURL(images[idx])}
          className="w-full h-full object-cover"
          alt="New upload"
        />
      ) : existingImages[idx]?.url ? (
        /* Existing image from DB */
        <img
          src={existingImages[idx].url}
          className="w-full h-full object-cover"
          alt="Existing product"
        />
      ) : (
        <Upload className="text-gray-400" />
      )}

      <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={(e) => handleImageChange(e, idx)}
      />
    </div>
  ))}
</div>


          </div>

          <button
            onClick={handleUpdateProduct}
            disabled={updating}
            className="mt-6 bg-gradient-to-tr from-blue-950 via-black to-blue-950 text-white px-6 py-3 rounded-md"
          >
            Update Product
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditProduct;
