import logo from "../../assets/lg2.png"
import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdUnsubscribe } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
// import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
  // const [cart] = useCart();

  // TODO: get isAdmin value from the database
  // const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <Helmet>
        <title>Fitness | Dashboard</title>
      </Helmet>
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen pt-[2rem] text-black  bg-gray-400 ">
        <div className="w-[70%] mx-aut ">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-full" />
          </Link>
        </div>
        <ul className="menu p-4">
          {/* { */}
          {/* // isAdmin ? */}
          {/* // ( */}
          {/* // <> */}
          <li className="hover:text-white ">
            <NavLink to="/dashboard">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/dashboard/allSubscribers">
              <MdUnsubscribe></MdUnsubscribe>
              All Subscriber
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/dashboard/allTrainers">
              <FaList></FaList>
              All Trainers
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/dashboard/appliedTrainer">
              <FaBook></FaBook>
              Applied Trainers
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/dashboard/allUsers">
              <FaUsers></FaUsers>
              All Users
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/dashboard/Balance">
              <FaUsers></FaUsers>
              Balance
            </NavLink>
          </li>
          {/* </> */}
          {/* // )  */}
          {/* // : */}
          {/* // ( */}
          {/* // <> */}
          {/* <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li> */}
          {/* <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li> */}
          {/* <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li> */}
          {/* </> */}
          {/* // ) */}
          {/* } */}
          {/* shared nav links */}
          <div className="divider"></div>
          <li className="hover:text-white ">
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li className="hover:text-white ">
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;