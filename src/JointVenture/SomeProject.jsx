import React from "react";
import src123 from "../assets/bg-vcsomeproject.jpg";
import src111 from "../assets/vc-house.png";

const SomeProject = () => {
  return (
    <>
      <div>
        {/* second section */}
        <h2 className="font-semibold text-4xl text-orange-800 text-center">
          Some of the projects executed by us
        </h2>
        <div className="w-full h-[75vh] grid grid-rows-1 grid-cols-2">
          <img
            src={src123}
            alt="bgimageforsomeproject"
            className="absolute w-[200%] h-[75vh]"
          />
          <div className="grid grid-cols-2 grid-rows-1 w-[200%] h-[75vh] relative ">
            <div className="w-[100%] h-[100%] ">
              <img
                src={src111}
                alt="ProjectImage"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-[100%] h-[100%] ">
              <h1 className="text-white text-2xl text-justify mx-10 my-10 p-5">
                VF LAUREL @ Kolathur 2 & 3 BHK Flats{" "}
              </h1>
              <p className="text-justify text-white text-lg mx-10 my-10 line-clamp-4">
                Victory Foundation a proprietorship company, founded by first
                generation young entrepreneurs Mr. A. Anand Raj, professional by
                qualification having diverged experience in construction and
                real estate development. Victory Foundation is one of the well
                reckoned Property developer having most of its operations at
                North- Chennai, aiming mainly on sustainable space creation. The
                Company is having unique strategy of developing Budget homes,
                Residential apartments, Group housing and Commercial space, etc.
              </p>
              <p className="text-justify text-white text-lg mx-10 my-10 line-clamp-4">
                Victory Foundation a proprietorship company, founded by first
                generation young entrepreneurs Mr. A. Anand Raj, professional by
                qcial space, etc.
              </p>
            </div>
          </div>
        </div>

        {/*Third section  */}
        <h2 className="font-semibold text-4xl text-orange-800 text-center p-5">
          On Going Project
        </h2>
        <div className="w-full h-[75vh] grid grid-rows-1 grid-cols-2">
          <div className="grid grid-cols-2 grid-rows-1 w-[200%] h-[75vh]">
            <div className="w-[100%] h-[100%] ">
              <h1 className="text-black text-2xl text-justify mx-10 my-10">
                VF LAUREL @ Kolathur 2 & 3 BHK Flats{" "}
              </h1>
              <p className="text-justify text-black text-lg mx-10 my-10 line-clamp-4">
                Victory Foundation a proprietorship company, founded by first
                generation young entrepreneurs Mr. A. Anand Raj, professional by
                qualification having diverged experience in construction and
                real estate development. Victory Foundation is one of the well
                reckoned Property developer having most of its operations at
                North- Chennai, aiming mainly on sustainable space creation. The
                Company is having unique strategy of developing Budget homes,
                Residential apartments, Group housing and Commercial space, etc.
              </p>
              <p className="text-justify text-black text-lg mx-10 my-10 line-clamp-4">
                Victory Foundation a proprietorship company, founded by first
                generation young entrepreneurs Mr. A. Anand Raj, professional by
                qcial space, etc.
              </p>
            </div>
          </div>
          <div className="w-[100%] h-[100%] ">
            <img
              src={src111}
              alt="ProjectImage"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SomeProject;
