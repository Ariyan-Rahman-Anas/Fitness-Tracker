import blogBG from "./../../../assets/blogs/2.jpg";
import { useEffect, useState } from "react";
import BlogCard from "../HomeCompo/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => {
      setBlogs(data)
    })
  },[])
  return (
    <div className="my-16">
      {/* //first section of blog section */}
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${blogBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[3rem] " />
            <h1 className="">BLOG & NEWS</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">LATEST NEWS</h2>
        </div>
      </div>
      {/* //second section of blog section */}
      <div className="bg-black px-1 py-10 lg:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[90%] mx-auto  ">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>

      {/* //third section of blog section */}
    </div>
  );
};

export default Blogs;
