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
  const { data: cart, isLoading, refetch } = useGetCartQuery();
  const [updateCart] = useUpdateCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
 

  const [cartTotal, setCartTotal] = useState(0);

  // Update total whenever cart changes
  useEffect(() => {
    if (cart?.products) {
      const total = cart.products.reduce((sum, item) => sum + item.totalPrice, 0);
      setCartTotal(total);
    }
  }, [cart]);

  // Update quantity
  const handleUpdateQty = async (productId, qty) => {
    if (qty < 1) return;
    await updateCart({ productId, quantity: qty });
    refetch(); // refresh cart
  };

  // Remove product
  const handleRemove = async (productId) => {
    await removeFromCart(productId);
    refetch(); // refresh cart
  };

  // Place order
  const handlePlaceOrder = async () => {
    try {
     
      navigate("/Checkout");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl mb-6">My Shopping Bag</h1>

        {isLoading ? (
          <p>Loading cart...</p>
        ) : !cart?.products || cart.products.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.products.map((product) => (
                <CartItem
                  key={product.productId}
                  product={product}
                  onRemove={handleRemove}
                  onUpdateQty={handleUpdateQty}
                />
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-xl font-bold">₹{cartTotal}</p>
            </div>

            <button
              onClick={handlePlaceOrder}
             
              className="mt-4 w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 disabled:opacity-50"
            >
             Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
