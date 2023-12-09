const FeaturedCard = ({ feature }) => {
  const { img, title, description } = feature || {};
  return (
    <div className="group md:m-3 ">
      <div className="text-center text-white border-2 border-transparent group-hover:border-white rounded-md duration-500 p-2 pt-6 ">
        <img src={img} alt="" className="w-32 h-32 mx-auto  group-hover:transform group-hover:scale-125 duration-500 "/>
        <h1 className="text-2xl font-semibold my-3  ">{title} </h1>
        <p className="text-sm text-gray-400 ">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
