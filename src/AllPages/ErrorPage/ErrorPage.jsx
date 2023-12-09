import { Link } from "react-router-dom";
import errorBG from "../../assets/errorBG.png"

const ErrorPage = () => {
    return (
        <div
            className="bg-[#f82457] h-[80vh] flex flex-col items-center justify-center gap-3 ">
            <div>
                <img className="w-full  md:w-8/12 mx-auto " src={errorBG} alt="" />
            </div>
            <Link to={"/"} className="font-semibold text-md px-4 py-1 rounded-md text-black hover:text-[#015987] hover:bg-white border-2 border-white " >Back to your Home</Link>
        </div>
    );
};
export default ErrorPage;