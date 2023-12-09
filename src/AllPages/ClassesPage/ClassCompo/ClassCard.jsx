import { Link } from "react-router-dom";

const ClassCard = ({ aClass }) => {
  const { title, img, id } = aClass || {};
  return (
    <div className=" group">
      <div className="text-white text-center relative overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full group-hover:transform group-hover:scale-110 duration-500 rounded-md "
        />
        <div className="w-full h-full border-2 border-gray-400  bg-black bg-opacity-70 hidden  group-hover:absolute group-hover:top-0 group-hover:left-0  group-hover:flex  items-center justify-center delay-500">
          <Link to={`/classDetails/${id}`} className="bg-[#f82457] px-5 py-2 rounded-md ">
            Show Details
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-white text-xl text-center mt-1 fontsemibold ">{title} </h1>
      </div>
    </div>
  );
};

export default ClassCard;
