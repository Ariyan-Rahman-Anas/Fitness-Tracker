import React from "react";

const FeaturedClassCard = ({ aClass }) => {
  const { title, img, description, classCategory } = aClass || {};
  return (
    <div>
          <div className="text-center">
              <img src={img} alt="" />
        <h1 className="mt-2 text-xl text-[#f82457]  ">{title} </h1>
      </div>
    </div>
  );
};

export default FeaturedClassCard;
