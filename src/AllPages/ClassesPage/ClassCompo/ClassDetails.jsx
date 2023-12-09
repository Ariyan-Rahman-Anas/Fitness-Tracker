import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const ClassDetails = () => {
    const classes = useLoaderData()
    const { id } = useParams()
    const intId = parseInt(id)

    const checkingClassId = classes.find(aClass => aClass.id === intId)

    return (
      <div className="bg-black pb-10 lg:pb-16 mb-16 ">
        <Helmet>
          <title>Fitness | Classes Details</title>
        </Helmet>
        ;
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${checkingClassId.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[40vh] lg:h-[80vh] relative px-2  "
        >
          <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
            <div className="flex items-center justify-start gap-3 w-full">
              <hr className="border-2 border-gray-300 w-[3rem] " />
              <h1 className="">NOW THE CLASS IS</h1>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold uppercase ">
              {checkingClassId.title}
            </h2>
          </div>
        </div>
        {/* //Second section */}
        <div className="w-full md:[85%] lg:w-[70%] mx-auto text-gray-400 px-2 ">
          <div className="my-4   flex flex-col items-start justify-start ">
            <span className="font-light text-xl text-[#f82457] ">
              Let's get moving!
            </span>
            <p>{checkingClassId.description}</p>
          </div>
          <div className="flex items-start justify-start gap-2 mb-2">
            <span className="font-semibold text-[#f82457] ">
              Class Duration:{" "}
            </span>{" "}
            <p>{checkingClassId.class_duration} hour</p>
          </div>
          <div className="flex items-start justify-start gap-2 mb-2">
            <span className="font-semibold text-[#f82457] ">Class Timing:</span>
            <p>{checkingClassId.class_timing}</p>
          </div>
          <div className="flex items-start justify-start gap-2 mb-2">
            <span className="font-semibold text-[#f82457] ">
              Required Foods:
            </span>
            <p>{checkingClassId.need_foods}</p>
          </div>
          <div className="flex items-start justify-start gap-2 mb-8">
            <span className="font-semibold text-[#f82457] ">Class Topics:</span>
            <p>{checkingClassId.topic_description}</p>
          </div>
          <Link
            to={"/trainer"}
            className=" text-white bg-[#f82457] px-5 py-2 rounded-md  "
          >
            Join Now
          </Link>
        </div>
      </div>
    );
};

export default ClassDetails;