import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { useGetAddressQuery ,useGetCartQuery} from '../../../slices/userSlice';
import image2 from '../../assets/watch.png';

function Checkout() {


  const { data: cart, isLoading: cartLoading } = useGetCartQuery();
const cartItems = cart?.products || [];
const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);


 

  // ✅ Get saved address from backend
  const { data: savedAddress, isLoading } = useGetAddressQuery();

  // Local state for chosen / new address
  const [useSavedAddress, setUseSavedAddress] = useState(true);
  const [address, setAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    pincode: '',
  });

  // Populate saved address when fetched
  useEffect(() => {
    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, [savedAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    console.log('Proceed to payment with:', { address, cartItems, total });
    // Call backend checkout API here
  };

  if (isLoading) return <p>Loading address...</p>;

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto p-6 md:mt-7 mb-20 grid md:grid-cols-2 gap-14">
        {/* Left: Address */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>

          {savedAddress && (
            <div className="mb-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={useSavedAddress}
                  onChange={() => setUseSavedAddress(true)}
                />
                Use saved address
              </label>
              {useSavedAddress && (
                <div className="p-4 border rounded mt-2 bg-gray-50">
                  <p>{savedAddress.fullName}</p>
                  <p>{savedAddress.phone}</p>
                  <p>{savedAddress.address1}, {savedAddress.address2}</p>
                  <p>{savedAddress.city} - {savedAddress.pincode}</p>
                </div>
              )}
            </div>
          )}

          <label className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              checked={!useSavedAddress}
              onChange={() => setUseSavedAddress(false)}
            />
            Enter new address
          </label>

          {!useSavedAddress && (
            <form className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="inputStyle w-full border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                value={address.email}
                onChange={handleChange}
                placeholder="Email"
                className="inputStyle w-full border p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="inputStyle w-full border p-2 rounded"
              />
              <input
                type="text"
                name="address1"
                value={address.address1}
                onChange={handleChange}
                placeholder="Address Line 1"
                className="inputStyle w-full border p-2 rounded"
              />
              <input
                type="text"
                name="address2"
                value={address.address2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="inputStyle w-full border p-2 rounded"
              />
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                placeholder="City"
                className="inputStyle w-full border p-2 rounded"
              />
              <input
                type="text"
                name="pincode"
                value={address.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="inputStyle w-full border p-2 rounded"
              />
            </form>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="items-center justify-center flex-col">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-3 rounded"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
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

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
