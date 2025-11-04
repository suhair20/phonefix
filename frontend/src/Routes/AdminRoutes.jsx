import { Route } from "react-router-dom";
import Dashboard from "../components/Admin/Dashboard";
import Product from "../components/Admin/Product"
import AddProduct from "../components/Admin/AddProduct";
import Category from "../components/Admin/Category";



const AdminRoutes=(


    <>

  <Route  path="/admin"  element={<Dashboard/>}  />
<Route  path="/admin/products"  element={<Product/>}  />
<Route  path="/admin/products/addproduct"  element={<AddProduct/>}  />
<Route  path="/admin/ctegory"  element={<Category/>}  />
    </>
)




export default AdminRoutes