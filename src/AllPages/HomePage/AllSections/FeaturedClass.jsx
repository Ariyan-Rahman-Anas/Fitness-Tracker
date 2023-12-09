import { useEffect } from "react";
import { useState } from "react";
import FeaturedClassCard from "../HomeCompo/FeaturedClassCard";

const FeaturedClass = () => {
    const [featuredClass, setFeaturedClass] = useState([])
    useEffect(() => {
        fetch("featuredClass.json")
            .then(res => res.json())
            .then(data => {
            setFeaturedClass(data)
        })
    },[])
    return (
      <div className="bg-black mb-16 py-10 lg:py-16 px-2 text-white  ">
        <div className="w-full lg:w-[90%] mx-auto">
          <div className="lg:ml-[16%] ">
            <div className="flex items-center justify-start gap-3 w-full">
              <hr className="border-2 border-gray-300 w-[3rem] " />
              <h1 className="">OUR SPECIAL SERVICES</h1>
            </div>
            <p className="text-3xl md:text-5xl font-semibold pb-6 ">
              OUR <span className="text-[#f82457] ">FEATURED CLASS</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {featuredClass?.map((aClass) => (
              <FeaturedClassCard key={aClass.id} aClass={aClass}></FeaturedClassCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default FeaturedClass;