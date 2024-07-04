import React from "react";
import paint1 from "./assets/vcpainting1.png";
import paint2 from "./assets/vbpainting2.png";

const PaintingPage = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:mx-20 md:grid md:grid-cols-2 md:grid-rows-2 md:mx-20 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:mx-2">
        <div className="z-50 w-96 h-96">
          <div className="grid grid-cols-1 grid-rows-3 w-[600px] h-[360px] bg-slate-100 mx-[200px]  my-20 px-20 py-5">
            <div className="w-full h-10 ">
              <h1 className="text-4xl font-extrabold text-justify text-orange-800">
                Welcome to Painting
              </h1>
            </div>
            <div className="w-full h-10">
              <p className="text-justify text-orange-800 w-96">
                Victory Foundation a proprietorship company, founded by first
                generation young entrepreneuers Mr. A.Anand Raj, professional by
                qualification having deverged experience in construcace
              </p>
            </div>
            <div className="w-full h-10">
              <button className="px-4 py-2 text-white bg-orange-900 rounded">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] ">
          <img src={paint1} alt="" srcset="" className="w-full h-[500px]" />
        </div>
        <div className="w-full h-[500px] ">
          <img src={paint2} alt="" srcset="" className="w-full h-[500px]" />
        </div>
        <div className="z-40 w-96 h-96">
          <div className="grid grid-cols-1 grid-rows-3 w-[600px] h-[360px] bg-slate-100 mx-[-105px] my-20 px-20 py-5">
            <div className="w-full h-10">
              <h1 className="text-4xl font-extrabold text-justify text-orange-800">
                Welcome to Painting
              </h1>
            </div>
            <div className="w-full h-10">
              <p className="text-justify text-orange-800 w-96">
                Victory Foundation a proprietorship company, founded by first
                generation young entrepreneuers Mr. A.Anand Raj, professional by
                qualification having deverged experience in construcace
              </p>
            </div>
            <div className="w-full h-10">
              <button className="px-4 py-2 text-white bg-orange-900 rounded">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaintingPage;
