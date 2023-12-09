import { FaRegCheckCircle } from "react-icons/fa";

const PlanCard = ({ plan }) => {
  const { name, description, features, monthlyFee } = plan || {};
  return (
    <div className=" shadow-md text-white hover:text-gray-700 bg-[#f82457] hover:bg-gray-400 duration-500 bg-opacity50 rounded-md pb-4 hover:transform hover:scale-110 ">
      <div className="text-center">
        <h1 className="text-2xl text-[#f82457] py-2 rounded-t-md bg-white font-semibold">{name} </h1>
        <p className="text-lg font-light p-2">{description} </p>
      </div>
      <div className="flex flex-col items-start gap-2 my-2 px-2 ">
        {features?.map((feature, index) => (
          <div
            key={index}
            className=" text-sm flex items-center justify-start gap-2 "
          >
            <FaRegCheckCircle></FaRegCheckCircle>
            <li className="list-none">{feature} </li>
          </div>
        ))}
      </div>
          <p className="text-center font-semibold text-2xl px-2 ">Monthly fee: {monthlyFee}$</p>
          <button className="text-center mx-auto block mt-3 text-[#f82457] hover:text-white bg-white hover:bg-black px-5 py-2 rounded-md duration-500 ">Join Now</button>
    </div>
  );
};

export default PlanCard;
