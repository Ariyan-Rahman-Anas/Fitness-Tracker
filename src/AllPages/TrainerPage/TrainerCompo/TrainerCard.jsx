import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  const {id, img, name, years_of_experience, time_slot } = trainer || {};
  return (
    <div>
      <div className="lg:m-5 group relative ">
        <img src={img} alt="" className="rounded-t-md" />
        <div className="absolute bottom-0 w-full ">
          <div className=" w-full h-full relative border-b-[3rem] group-hover:border-b-[200px] duration-500 border-b-[#f82457] border-r-[3rem] border-r-transparent  ">
            <h1 className="absolute text-xl font-semibold p-2 text-white ">
              {name}
            </h1>
          </div>
          <p className="absolute bottom-[4.5rem] p-2 text-white opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 ">
            Available time slots{" "}
            <span className="font-semibold">{time_slot}</span>
          </p>
          <p className="absolute bottom-[3rem]  p-2 text-white opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 ">
            <span className="font-semibold">{years_of_experience}</span> years
            of experienced
          </p>
          <div className="flex items-center justify-start gap-6 absolute bottom-[.05rem] w-full ">
            <div className=" p-2 text-4xl  text-white opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 flex items-start justify-start gap-2 ">
              <BsFacebook className="hover:text-black"></BsFacebook>
              <BsLinkedin className="hover:text-black"></BsLinkedin>
            </div>
            <Link
              to={`trainerDetails/${id}`}
              className="rounded-md px-4 py-2  text-[#f82457] hover:text-white bg-white hover:bg-[#f82457] border-2 border-transparent hover:border-white opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 "
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrainerCard;
