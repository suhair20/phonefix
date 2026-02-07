import Header from './Header';
import React from 'react';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import toast from "react-hot-toast";
import { Link, useParams } from 'react-router-dom'; 
import { useGetProductsByCategoryQuery, useAddToCartMutation } from '../../../slices/userSlice';




const ProductSkeleton = () => (
  <div className="animate-pulse border border-gray-200 rounded-xl overflow-hidden">
     <div className="aspect-square bg-gray-300" />
     <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
     </div>
  </div>
);





function UserProductScreen() {
  const { categoryId } = useParams();
  const { data: products, isLoading } = useGetProductsByCategoryQuery(categoryId);
  const [addToCart, { isLoading: adding }] = useAddToCartMutation();

  const handleAddToCart = async (product) => {
    try {
      await addToCart({
        productId: product._id,
        quantity: 1,
      }).unwrap();
      toast.success("Added to cart!");
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add to cart");
    }
  };



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-6 text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            <HomeIcon className="h-4 w-4" />
          </Link>
          <ChevronRightIcon className="h-3 w-3" />
          <p className="text-xs font-medium uppercase tracking-wider">Products</p>
        </nav>

        {/* Category Title */}
       <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 capitalize">
  {isLoading ? (
    <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" /> // Skeleton for title
  ) : (
    products?.[0]?.category?.name || "Collection" 
  )}
</h1>

        {/* Product Grid - Fully Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {isLoading 
            ?(Array.from({ length: 10 }).map((_, i) => <ProductSkeleton key={i} />)) 
            : (products?.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Product Image Section */}
              <Link to={`/product/${product._id}`} className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product?.images?.[0]?.url}
                  alt={product?.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-1">
                  {product?.name}
                </h3>
                <p className="text-lg font-bold text-blue-900 mt-1">
                  ₹{product?.price?.toLocaleString()}
                </p>

                {/* Add to cart - Pushed to bottom */}
                <div className="mt-auto pt-4">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={adding}
                    className="w-full py-2.5 text-xs md:text-sm font-semibold text-white bg-blue-950 rounded-lg hover:bg-blue-800 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {adding ? "Adding..." : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          )))}
          

          




  


        </div>

        {/* Empty State */}
        {products?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default UserProductScreen;