import React from 'react'
import { useState ,useEffect} from 'react';
import AddaddressComponent from './AddaddressComponent';
import { useGetAddressQuery } from '../../../slices/userSlice';

function ManageAddress() {
    const [activeMenu, setActiveMenu] = useState("profile");
    const { data, isLoading, error,refetch } = useGetAddressQuery();

    useEffect(() => {
    if (activeMenu === "profile") {
        refetch();   // refresh the list when menu changes back
    }
}, [activeMenu]);
  return (
    <div>
      <div className='min-h-screen' >
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>

      <div onClick={()=>setActiveMenu("address")} className={`border p-4 rounded mb-5 flex items-center gap-2 text-blue-600 cursor-pointer `}>
        <span className="text-xl font-bold">+</span>
        ADD A NEW ADDRESS
      </div>
       <div className="flex-1 ">
      
  {activeMenu === "address" && (
    <div>
    <button 
      onClick={()=>setActiveMenu("profile")}
      className=" top-3 left-3 text-blue-600 hover:text-black text-xl"
    >
      ×
    </button>
    <AddaddressComponent onSaved={() => setActiveMenu("profile")} />
    </div>
  )}

 

</div>

      
        {isLoading && <p>Loading address...</p>}

        {error && <p className="text-red-500">Failed to load addresses</p>}

        {data?.addresses?.length > 0 ? (
          data.addresses.map((addr) => (
            <div key={addr._id} className="border rounded p-5 flex justify-between my-3">
              <div>
                <span className="bg-gray-200 px-2 py-1 text-xs rounded">{addr.type}</span>

                <p className="font-semibold mt-2">
                  {addr.fullName}  {addr.phone}
                </p>

                <p className="text-gray-700 mt-1">
                  {addr.addressLine}, {addr.city}, {addr.state} - {addr.pincode}
                </p>
              </div>

              <div className="cursor-pointer">
                <span className="text-gray-500">⋮</span>
              </div>
            </div>
          ))
        ) : (
          <p>No addresses found.</p>
        )}
    </div>
    </div>
  )
}

export default ManageAddress
