import React, { useEffect, useState } from "react";
import CartItem from "./Cartitem";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import {
  useGetCartQuery,
  useUpdateCartMutation,
  useRemoveFromCartMutation,
} from "../../../slices/userSlice";

function CartPage() {
  const navigate = useNavigate();
  const { data: cart, isLoading, refetch, isError } = useGetCartQuery();
  const [updateCart] = useUpdateCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();

  const [cartTotal, setCartTotal] = useState(0);

  // Sync total price
  useEffect(() => {
    if (cart?.products) {
      const total = cart.products.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setCartTotal(total);
    }
  }, [cart]);

  const handleUpdateQty = async (productId, qty) => {
    if (qty < 1) return;
    try {
      await updateCart({ productId, quantity: qty }).unwrap();
      refetch(); 
    } catch (err) {
      console.error("Failed to update quantity:", err);
      alert("Could not update quantity. Please try again.");
    }
  };

  const handleRemove = async (productId) => {
    // This log helps you verify if the button is even firing
    console.log("Removing Product ID:", productId);
    
    try {
      // .unwrap() is critical to catch 404/500 errors
      await removeFromCart(productId).unwrap();
      refetch(); 
    } catch (err) {
      console.error("Remove Mutation Error:", err);
      alert(`Error: ${err.data?.message || "Failed to remove item"}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold text-blue-950 mb-8">My Shopping Bag</h1>

        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your cart...</p>
          </div>
        ) : !cart?.products || cart.products.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow-sm text-center">
            <p className="text-gray-500 text-xl">Your cart is empty.</p>
            <button 
              onClick={() => navigate('/')}
              className="mt-6 text-blue-600 font-semibold hover:underline"
            >
              Go back to shopping
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="space-y-2">
              {cart.products.map((item) => (
                <CartItem
                  // Key must be a unique string
                  key={item.productId?._id || item._id}
                  product={item}
                  onRemove={handleRemove}
                  onUpdateQty={handleUpdateQty}
                />
              ))}
            </div>

            <div className="mt-10 border-t pt-6">
              <div className="flex justify-between items-center">
                <p className="text-lg text-gray-600">Total Amount</p>
                <p className="text-3xl font-black text-blue-950">₹{cartTotal.toLocaleString()}</p>
              </div>

              <button
                onClick={() => navigate("/Checkout")}
                className="mt-8 w-full bg-blue-950 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all shadow-lg active:scale-[0.99]"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;