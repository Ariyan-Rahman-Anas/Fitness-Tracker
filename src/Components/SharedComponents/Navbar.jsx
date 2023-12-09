import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/lg2.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Log out Successfully.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/classes"}>Classes</NavLink>
      </li>
      <li>
        <NavLink to={"/trainer"}>Trainer</NavLink>
      </li>
      <li>
        <NavLink to={"/community"}>Community</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      {user ? (
        <>
          <img
            src={user.photoURL}
            alt=""
            className=" w-10 h-10 rounded-full border-2 border-[#f82457] block md:hidden  "
          />
          <li>
            <Link to={"/"}>
              <p className="text-sm text-white block lg:hidden  ">
                {user.displayName}
              </p>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed bg-black bg-opacity-50 border-b-2 border-gray-500 z-50 text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 border-2 border-gray-500 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="w-1/2 md:w-1/3 ">
            <Link to={"/"}>
              <img src={logo} alt="" className="border- w-full" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center justify-center gap-1">
              <img
                src={user.photoURL}
                alt=""
                className="hidden md:block w-10 h-10 rounded-full border-2 border-[#f82457] "
              />
              <p className="text-sm text-white hidden lg:block ">
                {user.displayName}
              </p>
              <Link
                onClick={handleLogOut}
                to={"/login"}
                className="px-5 py-1.5 text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 rounded-md "
              >
                Log out
              </Link>
            </div>
          ) : (
            <Link
              to={"login"}
              className="px-5 py-1.5 text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 rounded-md "
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
