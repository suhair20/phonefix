import { Route } from "react-router-dom";
import UserHomeScreen from "../components/User/UserHomeScreen";
import UserProductScreen from "../components/User/UserProductScreen";
import ShowProduct from "../components/User/ShowProduct";
import UserLoginScreen from "../components/User/UserLoginScreen";
import UserRegister from "../components/User/UserRegister";
import CartPage from "../components/User/CartPage";
import Checkout from "../components/User/Checkout";
import Profile from "../components/User/Profile";
const UserRoutes=(
    <>
  <Route path="/" element={<UserHomeScreen/>}/>
  <Route path="/shop" element={<UserProductScreen/>} />
  <Route path="/product"  element={<ShowProduct/>}  />
  <Route path='/login' element={<UserLoginScreen/>} />
  <Route path="/Register" element={<UserRegister/>} />
  <Route path="/Cart" element={<CartPage/>} />
  <Route path="/Checkout" element={<Checkout/>} />
  <Route path="/profile" element={<Profile/>}/>
</>

)


export default UserRoutes