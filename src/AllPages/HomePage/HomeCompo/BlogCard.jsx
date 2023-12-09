import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const {id, img, title, description, posting_date, posting_month, category } = blog || {}
    
    return (
        <div className="">
            <div className=" rounded-md border-2 border-gray-500 group overflow-hidden relative ">
                <img src={img} alt="" className="rounded-md group-hover:transform group-hover:scale-110 duration-500 " />
                <div className="absolute top-4 right-4 text-white bg-[#f82457] rounded-sm px-2 text-center  ">
                    <h1 className="text-sm">{posting_month}</h1>
                    <h2 className="text-2xl">{posting_date}</h2>
                </div>
                <div className=" w-full bg-white px-2 py-1 pt-5 ">
                    <p className="text-sm lg:pb-2 ">#{category}</p>
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="text-sm text-gray-500 lg:pb-1.5 ">{description.slice(0,40)} <Link to={`blogDetails/${id}`} className="text-black " >read more...</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;