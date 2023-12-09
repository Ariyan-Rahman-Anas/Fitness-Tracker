import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../AllPages/ErrorPage/ErrorPage";
import Home from "../AllPages/HomePage/Home";
import GalleryPage from "../AllPages/GalleryPage/GalleryPage";
import ClassesPage from "../AllPages/ClassesPage/ClassesPage";
import TrainerPage from "../AllPages/TrainerPage/TrainerPage";
import DashboardPage from "../AllPages/DashboardPage/DashboardPage";
import LoginPage from "../AllPages/LoginPage/LoginPage";
import CommunityPage from "../AllPages/CommunityPage/CommunityPage";
import BlogDetails from "../AllPages/HomePage/HomeCompo/BlogDetails";
import TrainerDetails from "../AllPages/TrainerPage/TrainerCompo/TrainerDetails";
import BeATrainer from "../AllPages/BeATrainerPage/BeATrainer";
import RegistrationPage from "../AllPages/RegistrationPage/RegistrationPage";
import PrivateRoute from "./PrivateRoute";
import ClassDetails from "../AllPages/ClassesPage/ClassCompo/ClassDetails";
import BookingTrainer from "../AllPages/TrainerPage/TrainerCompo/BookingTrainer";
import AllUsers from "../AllPages/DashboardPage/DashboardCopmo/AllUsers/AllUsers";
import AllSubscriber from "../AllPages/DashboardPage/DashboardCopmo/AllSubscribers/AllSubscriber";
import AdminHome from "../AllPages/DashboardPage/DashboardCopmo/AdminHome/AdminHome";
import AllTrainer from "../AllPages/DashboardPage/DashboardCopmo/AllTrainer/AllTrainer";
import AppliedTrainer from "../AllPages/DashboardPage/DashboardCopmo/AppliedTrainer/AppliedTrainer";
import Balance from "../AllPages/DashboardPage/DashboardCopmo/Balance/Balance";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch(`blogs.json`),
      },
      {
        path: "/gallery",
        element: <GalleryPage></GalleryPage>,
        loader: () => fetch("gallery.json"),
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
        loader: () => fetch("classes.json"),
      },
      {
        path: "/classDetails/:id",
        element: <ClassDetails></ClassDetails>,
        loader: () => fetch("classes.json"),
      },
      {
        path: "/trainer",
        element: <TrainerPage></TrainerPage>,
        loader: () => fetch("trainer.json"),
      },
      {
        path: "/trainer/trainerDetails/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: () => fetch("trainer.json"),
      },
      {
        path: "/bookingTrainer",
        element: (
          <PrivateRoute>
            <BookingTrainer></BookingTrainer>
          </PrivateRoute>
        ),
        loader: () => fetch("plans.json"),
      },
      {
        path: "/beATrainer",
        element: (
          <PrivateRoute>
            <BeATrainer></BeATrainer>
          </PrivateRoute>
        ),
      },
      {
        path: "/community",
        element: <CommunityPage></CommunityPage>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardPage></DashboardPage>
          </PrivateRoute>
        ),
        children: [
          //dashboard routes

          //admin route
          {
            path: "/dashboard",
            element: <AdminHome></AdminHome>,
          },
          {
            path: "allSubscribers",
            element: <AllSubscriber></AllSubscriber>,
          },
          {
            path: "allUsers",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "allTrainers",
            element: <AllTrainer></AllTrainer>,
          },
          {
            path: "appliedTrainer",
            element: <AppliedTrainer></AppliedTrainer>,
          },
          {
            path: "balance",
            element: <Balance></Balance>,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signUp",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
]);
export default MainRoute;
