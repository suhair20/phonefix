import { useState } from "react";

import { useAddAddressMutation } from "../../../slices/userSlice";

function AddaddressComponent({ onSaved }) {

const [form, setForm] = useState({
    fullName: "",
    phone: "",
    district: "",
    city: "",
    pincode: "",
    addressLine: "",
    landmark: "",
  });


 const [errors, setErrors] = useState("");
  const [addAddress] = useAddAddressMutation();





const handleChange = (e) =>
  setForm({ ...form, [e.target.name]: e.target.value });





 const validate = () => {
    const newErrors = {};

    // Full Name
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";

    // Phone Number (10 digits)
    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";

    // District
    if (!form.district) newErrors.district = "District is required.";

    // City
    if (!form.city.trim()) newErrors.city = "City / Local area is required.";

    // Pincode (6 digits & belongs to Kerala range 670000–699999)
    if (!/^\d{6}$/.test(form.pincode))
      newErrors.pincode = "Pincode must be 6 digits.";

    else if (Number(form.pincode) < 670000 || Number(form.pincode) > 699999)
      newErrors.pincode = "Enter a valid Kerala pincode.";

    // Address Line
    if (!form.addressLine.trim())
      newErrors.addressLine = "Address line is required.";

    return newErrors;
  };












const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      console.log("its oke");
      console.log("Form data:", form);
      await addAddress(form).unwrap();
         if (onSaved) onSaved();
    } catch (err) {
      console.log("Error from API:", err);
      alert(err?.data?.message || "Failed to save address");
    }
  };





  return (
    <div className='h-full' >
    <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 p-1">

    {/* Full Name */}
    <div>
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
    </div>

    {/* District */}
    <div>
      <select
        name="district"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      >
        <option value="">Select District</option>
        <option>Thiruvananthapuram</option>
        <option>Kollam</option>
        <option>Pathanamthitta</option>
        <option>Alappuzha</option>
        <option>Kottayam</option>
        <option>Idukki</option>
        <option>Ernakulam</option>
        <option>Thrissur</option>
        <option>Palakkad</option>
        <option>Malappuram</option>
        <option>Kozhikode</option>
        <option>Wayanad</option>
        <option>Kannur</option>
        <option>Kasaragod</option>
      </select>
      {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
    </div>

    {/* Phone Number */}
    <div>
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>

    {/* Address Line */}
    <div>
      <input
        type="text"
        name="addressLine"
        placeholder="Address Line"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      />
      {errors.addressLine && <p className="text-red-500 text-sm">{errors.addressLine}</p>}
    </div>

    {/* Landmark */}
    <div>
      <input
        type="text"
        name="landmark"
        placeholder="Landmark (optional)"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      />
    </div>

    {/* City */}
    <div>
      <input
        type="text"
        name="city"
        placeholder="City"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      />
      {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
    </div>

    {/* Pincode */}
    <div>
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
        onChange={handleChange}
      />
      {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
    </div>

  </div>

  {/* Save Button */}
  <div className="flex justify-start">
    <button
      type="submit"
      className="bg-blue-950 w-24 h-10 rounded-md text-white font-semibold"
    >
      Save
    </button>
  </div>
</form>


    </div>
  )
}

export default AddaddressComponent
