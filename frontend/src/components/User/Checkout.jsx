import React from 'react'
import Header from './Header';
import Footer from './Footer';
import image2 from '../../assets/watch.png';

function Checkout() {

     const cartItems = [
    { id: 1, name: 'Watch', price: 9600, quantity: 1, image: image2 },
    { id: 2, name: 'Headset', price: 1500, quantity: 2, image: image2 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
 
  return (
    <div>
        <Header/>
        <div className="h-1 w-full bg-blue-950 mx-auto"></div>
    <div className="max-w-7xl mx-auto   p-6 md:mt-20 grid md:grid-cols-2 gap-14">
      {/* Left: User Info */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <form className="space-y-10 ">
            <div className="grid grid-cols-2   gap-4">
          <input type="text" placeholder="Full Name" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400 " />
          <input type="email" placeholder="Email" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          <input type="text" placeholder="Phone Number" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          <input type="text" placeholder="Address Line 1" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          <input type="text" placeholder="Address Line 2" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
         
            <input type="text" placeholder="City" className="inputStyle w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
            <input type="text" placeholder="Pincode" className="inputStyle bw-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:border-blue-400" />
          </div>
        </form>
      </div>

      {/* Right: Order Summary */}
      <div className='items-center justify-center flex-col' >
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border p-3 rounded">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p>₹{item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6 text-lg font-semibold border-t pt-4">
          <p>Total</p>
          <p>₹{total}</p>
        </div>

        <button className="w-full mt-6 bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900">
          Proceed to Payment
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Checkout
