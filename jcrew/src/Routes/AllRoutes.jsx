import { Route, Routes } from "react-router-dom"
import LandingPage from "../Component/LandingPage";
import AllCloths from "../Pages/AllCloths";
import SingleProductPage from "../Pages/SingleProductPage"
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout"
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import Admin from "../Pages/Admin";
import Addproduct from  "../Pages/Addproduct"
import Deleteproduct from "../Pages/Deleteproduct";
import PrivateRoute from "../Component/PrivateRoute";




function AllRoutes() {

  return <div>{/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/women" element={<AllCloths />} />
      <Route path="/ProductDetails/:id" element={<SingleProductPage />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="cart/checkout" element={<Checkout/>}/>   
      <Route path="/login" element={<Login/>}/>    
      <Route path="/signup" element={<SignUp/>}/>  
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin/addproduct" element={<Addproduct/>}/>
      <Route path="/admin/deleteproduct" element={<Deleteproduct/>}/>
  

    </Routes>
  </div>;
}

export default AllRoutes;