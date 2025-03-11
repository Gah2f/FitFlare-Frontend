import React from "react";
import SwiperImg from "../../components/SwiperImg/SwiperImg";

function Gallary() {
  return (
    <div className=" ">
      <div className="mb-16 md:w-[80%] mx-auto my-28 ">
        <h1 className="text-5xl font-bold text-center  text-black mb-8">
          Our Gallary
        </h1>
      </div>

    
      <div className="flex justify-center items-center  mx-auto w-[150] h-[100]">
      <SwiperImg/>
      </div>
    </div>
  );
}

export default Gallary;
