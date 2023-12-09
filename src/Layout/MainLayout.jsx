import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar";
import Footer from "../Components/SharedComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter =
      location.pathname.includes("login") ||
      location.pathname.includes("signUp") 
      ||
      location.pathname.includes("dashboard")
    return (
      <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default MainLayout;