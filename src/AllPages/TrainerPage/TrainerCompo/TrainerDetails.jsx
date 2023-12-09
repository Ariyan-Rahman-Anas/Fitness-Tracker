import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Helmet } from "react-helmet-async";


const TrainerDetails = () => {
  const trainers = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);

  const checkingTrainerId = trainers.find((trainer) => trainer.id === intId);

  return (
    <div className="bg-black mb-10  ">
      <Helmet>
        <title>Fitness | Trainer Details</title>
      </Helmet>
      <div className="mb-10 pb-16 ">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${checkingTrainerId.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[40vh] lg:h-[70vh] relative px-2  "
        >
          <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
            <div className="flex items-center justify-start gap-3 w-full">
              <hr className="border-2 border-gray-300 w-1/12 " />
              <h1 className="">TRAINER</h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold">
              {checkingTrainerId.specialist_on}
            </h2>
          </div>
        </div>
        {/* //second section */}
        <div className="w-full lg:w-[60%] mx-auto py-12 px-2 ">
          <div className="flex items-center justify-start gap-2 text-white ">
            <div className="w-[5rem] lg:w-[8rem] rounded-full border-2 border-[#f82457] ">
              <img
                src={checkingTrainerId.img}
                alt=""
                className="w-full rounded-full "
              />
            </div>
            <h1 className="text-3xl font-semibold ">
              {checkingTrainerId.name}{" "}
            </h1>
          </div>
          <div className="text-white flex flex-col lg:flex-row items-center lg:items-start justify-between gap-5 mt-8  ">
            <div className="text-center">
              <p className="text-lg">An experienced trainer as </p>
              <span className=" text-3xl font-semibold text-[#f82457] ">
                {checkingTrainerId.years_of_experience} years{" "}
              </span>
            </div>

            <div className="text-center">
              <p className="text-lg">Time slots available on:</p>
              <div className=" text-xl text-[#f82457] font-extrabold ">
                {checkingTrainerId.slots_are?.map((slot, index) => (
                  <li key={index} className="list-none">
                    <button className=" my-3 ">
                      <Link
                        to={"/bookingTrainer"}
                        className="px-4 py-2 hover:text-white bg-gray-200 hover:bg-[#f82457] rounded-md duration-500 "
                      >
                        {slot}
                      </Link>
                    </button>
                  </li>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg">Available for </p>
              <span className=" text-3xl text-[#f82457] font-semibold ">
                {checkingTrainerId.time_slot} slots
              </span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-4xl font-semibold text-white pb-3 ">
            Connect me on:
          </p>
          <div>
            <div className=" p-2 text-5xl   text-[#f82457] flex items-center justify-center gap-12 ">
              <BsFacebook className="hover:text-white"></BsFacebook>
              <BsLinkedin className="hover:text-white "></BsLinkedin>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6 lg:mt-16 ">
          <Link
            to={"/beATrainer"}
            className="px-5 py-2 rounded-md text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500  "
          >
            Become a Trainer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
