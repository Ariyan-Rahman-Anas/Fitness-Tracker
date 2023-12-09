import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
          <div className=" bg-black h-[80vh] flex items-center justify-center ">
            <div>
              <span className="loading loading-dots loading-lg text-[#f82457]  "></span>
            </div>
          </div>
        );
    }


    if (user) {
        return children
    }
    else {
        toast("Please be logged in.")
    }

    return (
      <div>
        <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
      </div>
    );
};

export default PrivateRoute;