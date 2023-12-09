import { useLoaderData } from "react-router-dom";
import TrainerCard from "./TrainerCompo/TrainerCard";
import trainerBG from "./../../assets/trainer/3.jpg";
import { Helmet } from "react-helmet-async";


const TrainerPage = () => {
  const trainers = useLoaderData();
  // console.log(trainers)
  return (
    <div className="bg-black mb-16 py-10 lg:pt-16 ">
      <Helmet>
        <title>Fitness | Trainer</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${trainerBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[3rem] " />
            <h1 className="">TRAINERS</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            EXPERT TRAINERS
          </h2>
        </div>
      </div>

      {/* //SECOND section */}
      <div className="py-10 w-full lg:w-[80%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 ">
          {trainers?.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer}></TrainerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
