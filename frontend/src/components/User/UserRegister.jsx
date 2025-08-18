import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

function UserRegister() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow border">
        {/* Logo */}
       

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-blue-950 tracking-wide mb-8">
          PHONEFIX
        </h1>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email address</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                placeholder="••••••••"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 cursor-pointer text-gray-400"
              >
                👁
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <p>
              I would like to receive{" "}
              <a href="#" className="text-blue-600 underline">
                newsletters
              </a>{" "}
              about price changes, offers and updates. I can unsubscribe at any
              time.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-semibold py-2 rounded hover:bg-blue-900"
          >
            Register for free
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-t" />
        </div>

        {/* Google & Apple Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_Logo.png"
              className="w-5 h-5"
              alt="Google"
            />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              className="w-5 h-5"
              alt="Apple"
            />
            Continue with Apple
          </button>
        </div>
         <p className="text-center text-sm mt-6">

          Alredy have an Acount ?
          <Link to={'/login'} >
           <a href="#" className="text-blue-600 hover:underline">Log in Now</a>
           </Link>
        </p>
      </div>
    </div>
  );
}

export default UserRegister
