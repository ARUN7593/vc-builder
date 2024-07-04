import React from "react";
import paint1 from "./assets/vcpainting1.png"; // Update with the correct path to your image
import paint2 from "./assets/vbpainting2.png"; // Update with the correct path to your image

const PaintingGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 md:mx-20 border-2 border-blue-600 p-4">
      {/* First Image */}
      <div className="w-full h-auto border-2 border-red-600">
        <img
          src={paint2}
          alt="Painting 2"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* First Welcome Card */}
      <div className="flex items-center justify-center">
        <div className="grid grid-rows-3 w-full sm:w-96 md:w-[600px] h-72 border-2 border-black bg-white p-4">
          <div className="flex items-center justify-center h-10">
            <h1 className="text-center text-lg font-bold">
              Welcome to Painting
            </h1>
          </div>
          <div className="flex items-center justify-center h-10">
            <p className="text-center">
              Enjoy our collection of beautiful paintings.
            </p>
          </div>
          <div className="flex items-center justify-center h-10">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Second Welcome Card */}
      <div className="flex items-center justify-center">
        <div className="grid grid-rows-3 w-full sm:w-96 md:w-[600px] h-72 border-2 border-black bg-white p-4">
          <div className="flex items-center justify-center h-10">
            <h1 className="text-center text-lg font-bold">
              Welcome to Painting
            </h1>
          </div>
          <div className="flex items-center justify-center h-10">
            <p className="text-center">Explore our latest artwork.</p>
          </div>
          <div className="flex items-center justify-center h-10">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full h-auto border-2 border-red-600">
        <img
          src={paint1}
          alt="Painting 1"
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default PaintingGrid;
