
import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaTags, FaUsers, FaChartBar, FaImage } from "react-icons/fa";

function Sidebar() {
  return (
      <div className="w-52  shadow-md   h-screen bg-gradient-to-tr from-blue-950 via-black to-blue-950 text-white fixed">
  
      <nav className="mt-6">
        <ul>
          <li className="p-4 hover:bg-gray-700 flex items-center gap-3"><FaTachometerAlt /><Link to="/admin">Dashboard</Link></li>
          <li className="p-4 hover:bg-gray-700 flex items-center gap-3"><FaBox /><Link to="/admin/products">Products</Link></li>
          <li className="p-4 hover:bg-gray-700 flex items-center gap-3"><FaTags /><Link to="/admin/category">Categories</Link></li>
          <li className="p-4 hover:bg-gray-700 flex items-center gap-3"><FaImage /><Link to="/admin/Banner">Banners</Link></li>
          <li className="p-4 hover:bg-gray-700 flex items-center gap-3"><FaUsers /><Link to="/admin/users">Users</Link></li>
          <li className="p-4 hover:bg-gray-700 flex items-center gap-3"><FaChartBar /><Link to="/admin/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar


