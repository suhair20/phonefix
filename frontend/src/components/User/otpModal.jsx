import React, { useState } from "react";
import { useVerifyOtpMutation } from "../../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setauthenticated } from "../../../slices/AuthSlice";

const otpModal = ({ email,  onClose }) => {

const dispatch=useDispatch();

  const [otp, setOtp] =useState("");
  
  const [error, setError] =useState("");
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
    const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await verifyOtp({ email, otp }).unwrap();
    console.log("OTP verified:", data);

    if (data.success) {
      localStorage.setItem("token", data.token);
      dispatch(setauthenticated(data.user));
      navigate("/");
    } else {
      setError("Invalid OTP");
    }

  } catch (err) {
    console.error("OTP error:", err);
    setError(err?.data?.message || "Invalid OTP");
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Verify OTP</h2>
        <p className="text-sm mb-4 text-center">
          Enter the 6-digit code sent to your email: <span className="font-medium">{email}</span>
        </p>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="border border-gray-300 rounded p-2 text-center text-lg"
            maxLength={6}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default otpModal;
