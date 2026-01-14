import { Route } from "react-router-dom";
import AdminLayout from "../../layouts/Adminlayouts"


import Dashboard from "../components/Admin/Dashboard";
import Product from "../components/Admin/Product";
import AddProduct from "../components/Admin/AddProduct";
import Category from "../components/Admin/Category";
import AdminLogin from "../components/Admin/AdminLogin";
import AddCategory from "../components/Admin/AddCategory";
import EditProduct from "../components/Admin/EditProduct";

const AdminRoutes = (
  <>
    {/* Admin Login */}
    <Route path="/admin/login" element={<AdminLogin />} />

    {/* Admin Protected Routes */}
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<Product />} />
      <Route path="products/addproduct" element={<AddProduct />} />
      <Route path="category" element={<Category />} />
      <Route path="category/addcategory" element={<AddCategory/>} />
      <Route path="products/Editproducts/:id"   element={<EditProduct/>} />

    </Route>
  </>
);

export default AdminRoutes;
