import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import bannerBG from "./../../../assets/banner/b.jpg"
import PlanCard from "./PlanCard";

const BookingTrainer = () => {
  const plans = useLoaderData()
  console.log(plans)
  return (
    <div className="bg-black mb-10  ">
      <Helmet>
        <title>Fitness | Book a Trainer</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${bannerBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative px-2  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[5rem] " />
            <h1 className="">TRAINER</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            YOU'RE GOING TO BOOK A TRAINER
          </h2>
        </div>
      </div>
      {/* //second section */}

      <div className="bg-black py-10 lg:py-16 w-full lg:w-[90%]  mx-auto px-2 ">
        <p className="text-center text-gray-400 w-full lg:w-[70%] mx-auto mb-8 ">
          Discover the perfect membership plan to elevate your fitness journey
          at our gym. We offer three distinctive plans designed to cater to a
          variety of preferences and fitness goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans?.map((plan, index) => (
            <PlanCard key={index} plan={plan}></PlanCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingTrainer;
