import { Link } from "react-router-dom";
import bannerBG from "./../../../assets/banner/b.jpg";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${bannerBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[100vh] flex items-center justify-center text-center "
    >
      <div className="px-2 md:px-0">
        <h1 className="text-white text-2xl md:text-6xl font-semibold capitalize ">
          BE A HAPPIER, HEALTHIER,
        </h1>
        <h2 className="text-[#f82457] text-2xl md:text-6xl mb-2 font-semibold ">
          STRONGER YOU
        </h2>
        <p className="text-white mb-8 font-light md:text-xl capitalize ">
          Achieve your health & fitness goals at any stage.
        </p>
        <Link
          to={"/classes"}
          className="text-white hover:text-[#f82457] bg-[#f82457] hover:bg-white duration-500 px-5 py-3 rounded-md  "
        >
          OUR CLASSES
        </Link>
      </div>
    </div>
  );
};

export default Banner;
