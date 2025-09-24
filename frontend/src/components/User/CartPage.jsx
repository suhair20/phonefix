  import React from 'react'
import { useState } from 'react';
import CartItem from './Cartitem';
import image2 from '../../assets/watch.png';
import image3 from '../../assets/headset.png';
import Header from './Header';
import { Link } from 'react-router-dom';

function CartPage() {

    const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Watch', price: 9600, image: image2, quantity: 1 },
    { id: 2, name: 'Headset', price: 1500, image: image3, quantity: 2 },
  ]);

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleUpdateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>
<Header/>
   
    <div className="max-w-7xl mx-auto p-6">
        
      <h1 className="text-2xl  mb-6">My Shopping Bag</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onRemove={handleRemove}
                onUpdateQty={handleUpdateQty}
              />
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-xl font-bold">₹{total}</p>
          </div>
       <Link to={'/Checkout'} >
          <button className="mt-4 w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900">
            Proceed to Checkout
          </button>
          </Link>
        </>
      )}
    </div>
     </div>
  )
}

export default CartPage
