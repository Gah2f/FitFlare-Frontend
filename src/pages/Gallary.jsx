import React from "react";
import Dumpel from "../assets/imgs/Dumpel.jpg";
import Flexy from "../assets/imgs/Flexy.jpg";
import Gymman from "../assets/imgs/Gymman.jpg";
import excerise from "../assets/imgs/Inclass.jpg";
import Swim from "../assets/imgs/Swim.jpg";
import CarouselImg from "../components/Carusel/CarouselImg";

function Gallary() {
  return (
    <div className=" md:w-[80%] mx-auto my-28 ">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-center  text-black mb-8">
          Our Gallary
        </h1>
      </div>

    
      <div className="justify-center pl-90">
      <CarouselImg/>
      </div>
    </div>
  );
}

export default Gallary;
