// import axios from "axios";
import { useForm} from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscription = () => {
  const axiosPublic = useAxiosPublic();
      const {
        register,
        reset,
    handleSubmit,
    formState: { errors },
      } = useForm()
    
    const onSubmit = (data) => {
      console.log(data)
      const userInfo = {
        name: data.name,
        email: data.email,
      };
      axiosPublic.post("/subscribers", userInfo)
        .then(res => {
          reset()
          if (res?.data?.insertedId) {
            toast("You've got a Premium Membership!")
          } else {
            toast("Premium Membership is Already Exist!")
          }
        console.log("subscriber user is:" ,res.data)
      })
    }
    
  return (
    <div className="bg-black px-2 my-16 py-10 lg:py-16 ">
      <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 ">
        <div className="flex-1">
          <h1 className="text-[#f82457] font-semibold text-3xl md:text-5xl ">
            Make a Subscription
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Unlock exclusive content and updates – subscribe today for a richer
            experience!
          </p>
        </div>
        <div className="flex-1 w-full ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", { required: true })}
              className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
            />
            {errors.name && (
              <span className="text-sm text-[#f82457] ">Name's required</span>
            )}
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
              type="submit"
              value="Do Subscribe"
              className="p-2 rounded-md text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
