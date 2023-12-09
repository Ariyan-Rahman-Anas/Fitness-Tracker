import { useContext } from "react";
import trainerBG from "./../../assets/trainer/3.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet} from "react-helmet-async";


const BeATrainer = () => {
  const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-black mb-16 py-10 lg:py-16">
      <Helmet>
        <title>Fitness | Be a Trainer</title>
      </Helmet>
      ;
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${trainerBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative px-2  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-1/12 " />
            <h1 className="">WORK WITH US</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Become a Trainer
          </h2>
        </div>
      </div>
      <div className="trainer-form">
        <div className=" w-full lg:w-[60%] mx-auto px-2 mt-10 lg:mt-16 ">
          <h1 className="text-gray-400 my-5 ">
            <span className="text-5xl font-light  text-[#f82457] ">R</span>eady
            to kickstart your journey with us? <br />
            🚀 Follow these quick steps to submit your Gym Trainer Application:
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full  ">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                  className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                />
                {errors.name && (
                  <span className="text-sm text-[#f82457] ">
                    Name's required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={user.email}
                  readOnly
                  {...register("email", { required: true })}
                  className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                />
                {errors.email && (
                  <span className="text-sm text-[#f82457] ">
                    Email's required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  {...register("age", { required: true })}
                  className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                />
                {errors.age && (
                  <span className="text-sm text-[#f82457] ">
                    Age's required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  defaultValue={user.photoURL}
                  {...register("photoURL", { required: true })}
                  className="p-2 rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                />
                {errors.photoURL && (
                  <span className="text-sm text-[#f82457] ">
                    PhotoURL's required
                  </span>
                )}
              </div>
            </div>
            <div className="skill-checking mt-4 ">
              <h1 className="text-white text-3xl font-semibold mb-2 ">
                Check out your <span className="text-[#f82457] ">skills</span>
              </h1>
              <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 ">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Demonstrating Exercises
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Equipment Proficiency
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Spotting Techniques
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Program Design
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Motivational Coaching
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Circuit Training
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Form Correction
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Functional Training
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Flexibility Training
                  </label>
                </div>
              </div>
            </div>
            <div className="available-days-checking mt-4 ">
              <h1 className="text-white text-3xl font-semibold mb-2 ">
                Available days in a{" "}
                <span className="text-[#f82457] ">week</span>
              </h1>
              <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 ">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Saturday
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Sunday
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Monday
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Tuesday
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Wednesday
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Thursday
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Friday
                  </label>
                </div>
              </div>
            </div>
            <div className="available-hours-checking mt-4 ">
              <h1 className="text-white text-3xl font-semibold mb-2 ">
                Available hours in a{" "}
                <span className="text-[#f82457] ">day</span>
              </h1>
              <div className="textwhite grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Saturday
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1   w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Sunday{" "}
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1   w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Monday{" "}
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1   w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value=""
                    />
                    Tuesday{" "}
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1   w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Wednesday{" "}
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1   w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Thursday{" "}
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1   w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input   "
                      value=""
                    />
                    Friday{" "}
                    <input
                      type="text"
                      placeholder="Enter your free hour"
                      className="p-1  w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
                    />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-white text-3xl font-semibold mt-3 mb-1 ">
                Describe <span className="text-[#f82457]  ">yourself</span>
              </h1>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="Describe yourself within a short message:"
                className="p-1 w-full rounded-md focus:outline-none border-2 border-transparent focus:border-[#f82457] "
              ></textarea>
            </div>
            <input
              type="submit"
              value="Apply"
              className="p-2 w-full rounded-md text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeATrainer;
