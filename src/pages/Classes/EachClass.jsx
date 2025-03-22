import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { useParams } from "react-router";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function EachClass() {
  const axiosFetch = useAxiosFetch();
  const [DispayEach, setDisplayEach] = useState([]);
  const { id } = useParams();
  // console.log(classID);

  useEffect(() => {
    if (id) {
      axiosFetch
        .get(`classes/${id}`)
        .then((data) => {
          setDisplayEach(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);
  // console.log(DispayEach);
  return (
    <div className="paddingcontroller ">
      
      <div>
        {DispayEach.map((detail, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row bg-blue-100 ">
              <div className="w-1/2 ml-4 mt-2 ">
                <h1 className="text-5xl font-bold">{detail?.name}</h1>
                <h3 className="text-lg ">
                  Instructor: {detail?.instructorName}
                </h3>
                <button className="mt-6 text-xl text-white p-4 bg-blue-500 hover:bg-blue-600 rounded-sm">
                  Enroll now
                </button>
                <p className="text-3xl mt-8 ">
                  {" "}
                  {detail?.totalEnrolled}{" "}
                  <span className="text-2xl font-bold">already enrolled </span>{" "}
                </p>
              </div>

              <div className="w-1/2">
                <img
                  src={detail?.image}
                  alt="Detail page image"
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x divide-gray-300  rounded-2xl shadow-2xl  mt-30 mr-8 h-30 ">
              <div className="px-6 py-4 border-r border-gray-300 text-center">
                <span className="text-xl font-bold">
                  {detail?.availableSeats}{" "}
                </span>
                <p className="text-sm text-gray-600 mt-4">
                  Seats are limited! Reserve yours before it's too late.
                </p>
              </div>
              <div className="px-6 py-4 border-r border-gray-300 text-center">
                <span className="text-xl font-bold">{detail?.Rating}</span>
                <p className="text-sm text-gray-600  mt-4">
                  Loved by students! Check out the top-rated class experience.
                </p>
              </div>
              <div className="px-6 py-4 border-r border-gray-300 text-center">
                <span className="text-xl font-bold">{detail?.Level}</span>
                <p className="text-sm text-gray-600  mt-4">
                  Tailored for your skill! Choose the right level and start
                  learning.
                </p>
              </div>
              <div className="px-6 py-4 border-r border-gray-300 text-center">
                <span className="text-xl font-bold">{detail?.Duration}</span>
                <p className="text-sm text-gray-600  mt-4">
                  Stay committed! Complete the course in just a few weeks.
                </p>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="text-xl font-bold">{detail?.Liked}</span>
                {/* <ThumbUpOffAltIcon/> */}
                <p className="text-sm text-gray-600  mt-4">
                  Highly recommended! Join the class that everyone loves
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-16">
              <div className="w-1/2 border-r-2 border-blue-500">
                <h1 className="text-7xl text-blue-500 font-bold mt-16 text-center ">
                  About
                </h1>
                {
                  <div>
                    <h1 className="text-2xl text-center ">
                      {detail?.description}
                    </h1>
                  </div>
                }
              </div>
              <div className="w-1/2">
                <h1 className="text-4xl mt-16 ">What you'll learn 👀</h1>
                {detail?.Skillsgain?.map((skill, index) => {
                  return (
                    <div className="mt-8">
                      <h3 className="text-2xl ml-6">✅ {skill}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className="text-7xl text-blue-500 font-bold mt-16 text-center ">
                Testimonials
              </h1>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {detail?.Testimonials?.map((testimonial) => {
                    return (
                      <div className="border-2 border-gray-500 mt-16 rounded-md ">
                        <h1 className="text-2xl font-bold">
                          {testimonial?.name}
                        </h1>
                        <p className="mt-4 text-lg">{testimonial?.feedback}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EachClass;
