import { Route, Routes } from "react-router-dom"
import LandingPage from "../Component/LandingPage";
import AllCloths from "../Pages/AllCloths";
import SingleProductPage from "../Pages/SingleProductPage"

function AllRoutes() {

  return <div>{/* Add Home, Login and dashboard  */}
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/women" element={<AllCloths />} />
      <Route path="/ProductDetails/:id" element={<SingleProductPage />}/>

      

    </Routes>
  </div>;

}

export default AllRoutes;