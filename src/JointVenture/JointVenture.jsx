import React from "react";
import src1 from "../assets/vbpainting2.png";
import src2 from "../assets/victory-logo.png";

const JointVenture = () => {
  return (
    <>
      <div className="mx-10 my-10 w-2/2 h-48 grid grid-cols-2 grid-rows-1">
        <div className="bg-pink-200 h-[800px] w-[600px] border-2 border-black "></div>
        <div className="bg-slate-0 h-[800px] w-[600px] grid grid-cols-1 grid-rows-2">
          <div className="w-[1000px] h-[480px] my-10 -ml-96 -mr-60">
            <img src={src1} alt="" srcset="" className="w-[1000px] h-[480px]" />
          </div>
          <div className=" w-[850px] h-[340px] my-5 -ml-80 -mt-20 grid grid-cols-1 grid-rows-2 bg-slate-50">
            <div className=" w-full h-[180px] grid grid-cols-2 grid-rows-2 px-10 py-10">
              <div className=" row-span-2">
                <img src={src2} alt="img123" className="w-36 h-36" />
              </div>
              <div className=" text-black font-extrabold text-6xl -ml-40 justify-center">
                <h1>VICTORY</h1>
              </div>
              <div className=" text-black font-semibold text-xl -ml-40 mt-10">
                <h5>FOUNDATIONS & REALTORS</h5>
              </div>
            </div>
            <p className=" w-full h-[200px] sm:line-clamp-5 lg:line-clamp-none px-10 py-10">
              Victory Foundation a proprietorship company, founded by first
              generation young entrepreneurs Mr. A. Anand Raj, Victory
              foundation a proprietorship company, founded by first generation
              young entrepreneurs professional by qualification having deverged
              experience in construcace founded by first generation young
              entrepreneurs professional by qualification having deverged
              experience in construcace
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default JointVenture;
