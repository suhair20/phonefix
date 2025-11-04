import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// import SalesChart from "./SalesChart";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="ml-64 mt-16  w-full p-8 space-y-6 bg-gray-50 min-h-screen">

        {/* Cards Section */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded p-6">
            <h4 className="text-sm text-gray-500">Total Orders</h4>
            <p className="text-2xl font-bold mt-2">1,245</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h4 className="text-sm text-gray-500">Total Sales</h4>
            <p className="text-2xl font-bold mt-2">₹8,50,000</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h4 className="text-sm text-gray-500">Users</h4>
            <p className="text-2xl font-bold mt-2">532</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h4 className="text-sm text-gray-500">Products</h4>
            <p className="text-2xl font-bold mt-2">350</p>
          </div>
        </div>

        {/* Sales Chart */}
        {/* <SalesChart /> */}

        {/* Recent Products Table */}
        <div className="bg-white shadow rounded p-6">
          <h3 className="text-lg font-bold mb-4">Recent Products</h3>
          <table className="w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Image</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Category</th>
                <th className="p-2 border">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border"><img src="https://via.placeholder.com/50" alt="Product" /></td>
                <td className="p-2 border">iPhone 15 Pro</td>
                <td className="p-2 border">Mobiles</td>
                <td className="p-2 border">₹1,20,000</td>
              </tr>
              <tr>
                <td className="p-2 border"><img src="https://via.placeholder.com/50" alt="Product" /></td>
                <td className="p-2 border">Samsung S23</td>
                <td className="p-2 border">Mobiles</td>
                <td className="p-2 border">₹90,000</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
