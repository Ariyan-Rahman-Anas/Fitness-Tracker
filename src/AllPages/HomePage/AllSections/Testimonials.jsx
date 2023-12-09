import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data);
      });
  }, []);
  return (
    <div className="bg-black my-16 py-10 lg:py-16 text-white text-center  ">
      <div className="w-full lg:w-[70%] mx-auto px-2 ">
        <div className="mb-10 lg:mb-16 ">
          <div className="flex items-center justify-start gap-3 w-full">
            <hr className="border-2 border-gray-300 w-[3rem] " />
            <h1 className="">CONSUMER SAY</h1>
          </div>
          <p className="text-3xl md:text-5xl font-semibold pb-6 text-left ">
            OUR <span className="text-[#f82457] ">TESTIMONIALS</span>{" "}
          </p>
        </div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper "
        >
          <div>
            {testimonials?.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="pt-5 lg:px-14  ">
                  <div className="rating rating-md rating-half">
                    <input
                      value={testimonial.rating}
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-1"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-2"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-1"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="bg-white mask mask-star-2 mask-half-2"
                    />
                  </div>
                  <FaQuoteLeft className="mx-auto my-8 text-5xl text-[#f82457] "></FaQuoteLeft>
                  <p className="text-sm text-gray-400 ">
                    {testimonial.comment}
                  </p>
                  <h1 className="text-3xl mt-4 font-semibold ">
                    {testimonial.name}{" "}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
