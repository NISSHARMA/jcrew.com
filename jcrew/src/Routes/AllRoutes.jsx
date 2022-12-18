import { Route, Routes } from "react-router-dom"
import LandingPage from "../Component/LandingPage";
import AllCloths from "../Pages/AllCloths";
import SingleProductPage from "../Pages/SingleProductPage"
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout"
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";

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

    </Routes>
  </div>;
}

export default AllRoutes;