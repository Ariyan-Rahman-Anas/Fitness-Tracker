import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { BsFacebook, BsLinkedin } from "react-icons/bs";

const Team = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch("teamMembers.json")
            .then(res => res.json())
            .then(data => {
                setMembers(data)
        })
    },[])
  return (
    <div className="bg-black my-16 py-10 lg:py-16 ">
      <div className="text-white text-center ">
        <h1>TRAINERS</h1>
        <p className="text-3xl md:text-5xl font-semibold ">
          OUR <span className="text-[#f82457] ">TEAM</span>{" "}
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper w-full lg:w-[80%] overflow-scroll   `}
          breakpoints={{
            // when window width is >= 1200px (for large screens)
            1200: {
              slidesPerView: 3,
            },
            // when window width is >= 992px (for medium-sized screens)
            992: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (for small screens)
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {members?.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="group">
                <div className="parent shadow-md border2 py-10 px-5 relative group-hover:transform group-hover:scale-110 duration-500 ">
                  <img
                    src={member.img}
                    alt=""
                    className="w-full rounded-t-md "
                  />
                </div>
                <div className="child group-hover:bg-black group-hover:bg-opacity-70 group-hover:text-white bg-gray-200 text-gray-600 py-2 px-4 w-full lg:w-[82%] mx-auto absolute bottom-2 left-8 rounded-t-md text-center ">
                  <h1 className="text-xl font-semibold">{member.name} </h1>

                  <div className=" items-center justify-center gap-5 text-3xl mt-2 hidden group-hover:flex duration-500 ">
                    <BsFacebook></BsFacebook>
                    <BsLinkedin></BsLinkedin>
                  </div>
                  <p className="text-sm mt-1 text-gray-500 group-hover:text-white hidden group-hover:block duration-500 ">
                    {member.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
