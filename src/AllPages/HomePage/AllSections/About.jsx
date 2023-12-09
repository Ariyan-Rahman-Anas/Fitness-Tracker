import { Link } from "react-router-dom";
import aboutBG from "./../../../assets/about/1.jpg";
import aboutBG3 from "./../../../assets/about/3.jpg";
import aboutBG4 from "./../../../assets/about/4.jpg";
import { GiCheckMark } from "react-icons/gi";

const About = () => {
  return (
    <div className="mb-16 pt-10 bg-black ">
      {/* //first section of about section */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${aboutBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative px-2 "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[3rem] " />
            <h1 className=""> WHO ARE WE</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">ABOUT THE GYM</h2>
        </div>
      </div>
      {/* //second section of about section */}
      <div className="bg-black text-white px-2 pb-8 lg:py-16 ">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 w-full lg:w-[80%] mx-auto ">
          <div className="info flex-1">
            <h1 className="text-3xl md:text-5xl font-semibold ">
              THE STORY BEHIND
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#f82457] my-3 ">
              OUR GYM
            </h2>
            <p className="text-gray-400 text-sm">
              Nulla quis efficitur lacus, pulvinar posuere augue duis eu
              vestibulum auman mauris luctus nulla a scelerisque ultricies vitae
              tellus.
            </p>
            <p className="text-gray-400 my-3 text-sm ">
              Quisque tortor risus, pharetra ut venenatis ac, rutrum eget ante
              fusce inconvallis nibh felis rana hendrerit diam rhoncus eget
              sonec dictum acuselement sifend nisa efficitur venenatis.
            </p>
            <ul>
              <li className="flex items-center justify-start gap-1">
                <GiCheckMark className="text-[#f82457]"></GiCheckMark>{" "}
                <p>Certified Trainers</p>
              </li>
              <li className="flex items-center justify-start gap-1">
                <GiCheckMark className="text-[#f82457]"></GiCheckMark>{" "}
                <p>Exceptional work quality</p>
              </li>
              <li className="flex items-center justify-start gap-1">
                <GiCheckMark className="text-[#f82457]"></GiCheckMark>{" "}
                <p>Over 15 years of experience</p>
              </li>
            </ul>
          </div>
          <div className="media flex-1 hidden lg:block ">
            <div>
              <div
                className="rounded-md "
                style={{ boxShadow: "1rem 1rem #f82457, -.5rem -.5rem gray " }}
              >
                <img
                  src={aboutBG3}
                  alt=""
                  className="w-full  transform scale-100 hover:transform hover:scale-90 duration-500 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //third section of about section */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${aboutBG4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white bg-black px-2 py-16 bg-fixed h-full "
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 w-full lg:w-[80%] mx-auto ">
          <div className="info flex-1">
            <h1 className="text-3xl md:text-5xl font-semibold ">
              FREE TRIAL TRAINING
            </h1>
            <p className="text-gray-400 text-sm mt-3 mb-7 ">
              Make an appointment today for your free and non-binding trial
              session with or without one of our personal trainers.
            </p>
            <Link className="text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 px-5 py-3 rounded-md  ">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;