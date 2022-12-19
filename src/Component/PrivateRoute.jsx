import  AuthContext  from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function PrivateRoute({children}) {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
  
    return children;


}

export default PrivateRoute;