import { useLoaderData, useParams } from "react-router-dom";
import blogBG from "./../../../assets/blogs/2.jpg";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const BlogDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const intId = parseInt(id);
  console.log(intId);
  const blogAre = useLoaderData();
  console.log(blogAre);
  const checkingBlogId = blogAre.find((blog) => blog.id === intId);
  const {
    img,
    title,
    posting_date,
    posting_month,
    posting_year,
    author_name,
    author_img,
    author_description,
    description,
  } = checkingBlogId || {};
  console.log(title);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-black mb-10 pb-16 ">
      <Helmet>
        <title>Fitness | Blog Details</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative px-2  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-1/12 " />
            <h1 className="">BLOG & NEWS</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">{title} </h2>
        </div>
      </div>
      {/* //second section */}
      <div className="text-white w-full lg:w-[70%] mx-auto px-2 pt-10 lg:pt-20 ">
        <p className="text-sm text-gray-400">{description} </p>
        <div className="pt-10 lg:pt-16 flex flex-col lg:flex-row items-start justify-between gap-10 ">
          <div className="author-side lg:flex flex-ro items-start justify-start gap-3 w-full flex-1 ">
            <div className="w-[5rem] lg:w-[8rem] pb-2 ">
              <img
                src={author_img}
                alt=""
                className="rounded-full w-full border-2 border-[#f82457] "
              />
            </div>
            <div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:gap-5 pb-2 lg:pb-5 ">
                <h1 className="text-2xl font-semibold ">{author_name} </h1>
                <p>
                  {posting_date} {posting_month} {posting_year}{" "}
                </p>
              </div>
              <p className="text-sm  text-gray-400">{author_description} </p>
            </div>
          </div>
          <div className="from-side w-full lg:flex-1">
            <h1 className="text-2xl font-semibold pb-2 lg:pb-5 ">
              Leave a reply
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-5 w-full "
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
                className="w-full p-2 rounded-b-md focus:outline-none bg-gray-800 border-b-2 border-b-transparent focus:border-white  "
              />
              {errors.name && (
                <span className="text-sm text-[#f82457] ">Name's required</span>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full p-2 rounded-b-md focus:outline-none bg-gray-800 border-b-2 border-b-transparent focus:border-white  "
              />
              {errors.email && (
                <span className="text-sm text-[#f82457] ">
                  Email's required
                </span>
              )}
              <textarea
                name="comment"
                cols="2"
                rows="2"
                {...register("comment", { required: true })}
                className="w-full p-2 rounded-b-md focus:outline-none bg-gray-800 border-b-2 border-b-transparent focus:border-white  "
              ></textarea>
              {errors.comment && (
                <span className="text-sm text-[#f82457] ">
                  Comment's required
                </span>
              )}
              <input
                type="submit"
                value="Send Comment"
                className="px-5 py-2 text-white bg-[#f82457] rounded-md cursor-pointer  "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetails;
