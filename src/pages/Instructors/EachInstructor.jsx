import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function EachInstructor() {
  const axiosFetch = useAxiosFetch();
  const [EachInstructor, SetEachInstructor] = useState([]);
  const instructorId = useParams();
  console.log(instructorId);
  useEffect(() => {
    axiosFetch
      .get(`instructors/${instructorId.id}`)
      .then((data) => {
        SetEachInstructor(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(EachInstructor);
  return (
    <div className="p-16 ">
      {EachInstructor.map((each, index) => (
        <div className="flex mt-8 gap-8">
          <div
            className=" w-1/2 h-3/4  "
            key={index}
          >
            <div>
              <img className="rounded-md shadow-2xl hover:-translate-y-2 " src={each?.photoUrl} alt="Picture of the instructors" />
            </div>
            <div className="p-8 border-2 mt-28 border-blue-500 shadow-2xl ">
            <h1 className="text-2xl font-bold">See more on: </h1>

              <div className="flex mt-4 gap-10 text-[12px] ">
                          <a href="">
                            <FontAwesomeIcon
                              icon={faFacebook}
                              size="2xl"
                              className="text-gray-500 hover:text-blue-700 hover:-translate-y-2 duration-300"
                            />
                          </a>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faInstagram}
                              size="2xl"
                              className="text-[#E4405F] hover:text-blue-700 hover:-translate-y-2 duration-300"
                            />
                          </a>
                          
                          <a href="">
                            <FontAwesomeIcon
                              icon={faYoutube}
                              size="2xl"
                              className="text-[#FF0000] hover:text-blue-700 hover:-translate-y-2 duration-300"
                            />
                          </a>
                      
                          <a href="">
                            <FontAwesomeIcon
                              icon={faTiktok}
                              size="2xl"
                              className="text-black hover:text-blue-700 hover:-translate-y-2 duration-300"
                            />
                          </a>
                        </div>
            </div>
          </div>

          <div className="p-16 border-3 border-blue-500">
          <div className="w-1/2 dark:text-white">
          <h1 className="text-5xl font-bold">{each?.name}</h1>
            <p className="mt-2">{each?.about}</p>
            <h1 className="text-5xl mt-4 font-bold"> 
              Skills
            </h1>
            <h1>
              {each?.skills.map((skill,index)=>(
                <ul className="p-6 text-2xl gap-3 " key={index}>
                  <li>{skill}</li>
                </ul>
              ))}
            </h1>
          </div>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default EachInstructor;
