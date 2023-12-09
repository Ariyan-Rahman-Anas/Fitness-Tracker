import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AOS from "aos";
import "aos/dist/aos.css";
const LIMIT = 5;
import galleryBG from "./../../assets/about/1.jpg";
import { Helmet } from "react-helmet-async";


const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [activePage, setActivePage] = useState(12);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    if (loading) return;

    setLoading(true);

    axios
      .get("https://gym-server-eight.vercel.app/gallery", {
        params: {
          page: activePage,
          size: LIMIT,
        },
      })
      .then(({ data }) => {
        setActivePage(activePage + 1);
        setGallery((prevGallery) => [...prevGallery, ...data]);
        setTotalData(data.length);
      })
      .catch((error) => {
        console.error("Error:", error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Fitness | Gallery</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${galleryBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[40vh] lg:h-[70vh] relative  "
      >
        <div className="lg:w[33vw]  text-white flex flex-col items-start absolute bottom-5 left-5 lg:left-80 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[3rem] " />
            <h1 className="">KNOW MORE ABOUT US</h1>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold">
            FITNESS GALLERY
          </h2>
        </div>
      </div>
      <InfiniteScroll
        className="bg-black pt-10 "
        dataLength={gallery.length}
        next={fetchData}
        hasMore={gallery.length < totalData}
        loader={<span className="loading loading-spinner loading-lg"></span>}
        endMessage={
          <p className="text-center text-5xl text-[#f82457] font-bold mt-5">
            <span className="loading loading-spinner text-error"></span>
          </p>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 ">
          {gallery.map((galleryItem, index) => (
            <div
              data-aos="zoom-in-up"
              key={index}
              className="rounded-md relative group w-full h-[13rem] "
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0.01)), url(${galleryItem.img})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <p className="absolute top-0 right-0 text-white bg-[#f82457] px-2 rounded-t-md rounded-l-none ">
                {index + 1}
              </p>
              <div className=" ">
                <div className="px-4 text-center text-white bg-black group-hover:bg-opacity-70 w-full h-[13rem] hidden group-hover:flex items-center justify-center duration-500 ">
                  <div className=" duration-500">
                    <h1 className="text-xl font-semibold ">
                      {galleryItem.title}
                    </h1>
                    <p className="text-sm">{galleryItem.description} </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GalleryPage;
