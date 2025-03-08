import React from "react";
import Dumpel from "../assets/imgs/Dumpel.jpg";
import Flexy from "../assets/imgs/Flexy.jpg";
import Gymman from "../assets/imgs/Gymman.jpg";
import excerise from "../assets/imgs/Inclass.jpg";
import Swim from "../assets/imgs/Swim.jpg";

function Gallary() {
  return (
    <div className=" md:w-[80%] mx-auto my-28 ">
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-center  text-black mb-8">
          Our Gallary
        </h1>
      </div>

      <div className="md:grid-cols-2  justify-center items-start gap-4 flex">
        <div className="mb-4 md:mb-0">
            <img src={Gymman} alt="Gym man" className="md:h-[750px] w-full mx-auto rounded-sm"/>
        </div>

        <div className="gap-4 grid-cols-2 items-start">
          <div className="flex gap-2">
          <div className="mt-4">
                <img src={Flexy} alt="Flexy" className="md:h-[350px] rounded-sm" />
            </div>
            <div className="mt-4">
                <img src={Swim} alt="Swim" className="md:h-[350px] rounded-sm" />
            </div>
          </div>
           <div className="flex gap-2">
           <div className="mt-4">
                <img src={excerise} alt="Exercise" className="md:h-[350px] rounded-sm" />
            </div>
            <div className="mt-4">
                <img src={Dumpel} alt="Dumpel" className="md:h-[350px] rounded-sm" />
            </div>
           </div>
           
        </div>
      </div>

    </div>
  );
}

export default Gallary;
