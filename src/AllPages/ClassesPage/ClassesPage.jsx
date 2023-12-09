import { useLoaderData } from "react-router-dom";
import classBG from "./../../assets/class/14.jpg";
import ClassCard from "./ClassCompo/ClassCard";
import { Helmet } from "react-helmet-async";


const ClassesPage = () => {
  const classes = useLoaderData();
  return (
    <div className="bg-black pb-10 lg:pb-16 mb-16 ">
      <Helmet>
        <title>Fitness | Classes</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${classBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[80vh] relative px-2  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[3rem] " />
            <h1 className="">LEARN MORE</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            EXPLORE OUR CLASS
          </h2>
        </div>
      </div>

      {/* //second section */}
      <div className="mt-5 lg:pt-5 px-2">
        <div className="my-4 text-gray-500 w-full md:[85%] lg:w-[70%] mx-auto text-center ">
          <p>
            Revitalize your cardio fitness with our high-energy class. Quick,
            intense, and perfect for all levels, this session is designed to
            elevate your heart rate and leave you feeling invigorated. Join us
            for a Cardio Boost – a fast and effective way to enhance your
            endurance.{" "}
            <span className="font-light text-xl text-[#f82457] ">
              Let's get moving!
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {classes?.map((aClass) => (
            <ClassCard key={aClass.id} aClass={aClass}></ClassCard>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
