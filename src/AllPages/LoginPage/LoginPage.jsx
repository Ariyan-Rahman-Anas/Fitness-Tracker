import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import loginBg from "./../../assets/login/2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub, BsFacebook, BsGoogle } from "react-icons/bs";
import logo from "./../../assets/lg2.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const LoginPage = () => {
  const axiosPublic = useAxiosPublic();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [logInError, setLogInError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //log in
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setLogInError("");
        navigate(from, { replace: true });
        toast("Log in Successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        setLogInError("Invalid email or password");
      });
  };

  //log in with google
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        setLogInError("");
        navigate(from, { replace: true });
        toast("Log in Successfully!");
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic .post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        setLogInError(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-2 h-[100vh] flex flex-col lg:flex-row items-center justify-center "
    >
      <Helmet>
        <title>Fitness | Log in</title>
      </Helmet>
      <div className="form-side w-full md:w-[80%] lg:w-[40%]  ">
        <div className="w-[8rem] lg:w-[12rem] mb-5 ">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-full " />
          </Link>
        </div>

        <h1 className="font-semibold text-4xl mb-4 lg:mb-6 text-center text-[#f82457] ">
          Log in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
          />
          {errors.email && (
            <span className="text-sm text-[#f82457] ">Email's required</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
          />
          {errors.password && (
            <span className="text-sm text-[#f82457] ">Password's required</span>
          )}
          <p className="text-[#f82457] text-center">{logInError} </p>
          <input
            type="submit"
            value="Log in"
            className="p-2 rounded-md text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 "
          />
        </form>
        <div className="text-white text-center mt-6 mb-4 ">
          <p>Or log in with</p>
          <div className="flex items-center justify-center gap-4 mt-1 text-2xl ">
            <BsFacebook className="hover:text-[#f82457] duration-300 hover:transform hover:scale-125 "></BsFacebook>
            <BsGoogle
              onClick={handleGoogleLogIn}
              className="hover:text-[#f82457] cursor-pointer duration-300 hover:transform hover:scale-125 "
            ></BsGoogle>
            <BsGithub className="hover:text-[#f82457] duration-300 hover:transform hover:scale-125 "></BsGithub>
          </div>
        </div>
        <div className="text-white flex items-center justify-center gap-2">
          <p>Don't have an account?</p>
          <Link to={"/signUp"} className="text-[#f82457] font-semibold ">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
