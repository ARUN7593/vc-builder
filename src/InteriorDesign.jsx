import React from "react";
import img1 from "./assets/vbimage1.png";
import img2 from "./assets/vbimage2.png";
import img3 from "./assets/vbimage3.png";

const InteriorDesign = () => {
  return (
    <>
      <div
        className="border-2 border-blue mx-20 w-auto h-auto lg:grid lg:grid-cols-2 lg:grid-rows-3 
      md:grid md:grid-cols-2 md:grid-rows-3 
      sm:grid sm:grid-cols-2 sm:gird-rows-3
      "
      >
        {/* <div className="border-2 border-blue mx-auto max-w-7xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3"> */}
        <div className="border-2 border-blue w-full h-96">
          <img
            src={img1}
            alt="interiorimg1"
            srcset=""
            className="w-full h-96"
          />
        </div>
        <div className="border-2 border-blue w-500px h-auto text-black text-justify">
          <p className="md:mx-10 md:my-10 sm:mx-0 sm:my-0 line-clamp-6 lg:line-clamp-none">
            Space: The foundation of any interior design. It involves
            understanding the physical space and how to use it effectively.
            Line: Lines guide the eye and create shapes in a space. They can be
            horizontal, vertical, or dynamic (like diagonal or curved lines).
            Form: Forms are shapes with volume, such as furniture or decor. They
            can be geometric or organic. Light: Essential for visibility and
            mood. Natural and artificial lighting are both crucial. Color:
            Influences mood and perception. Color schemes are carefully chosen
            to match the purpose and style of the space. Texture: Adds depth and
            interest. Space: The foundation of any interior design. It involves
            understanding the physical space and how to use it effectively.
            Line: Lines guide the eye and create shapes in a space. They can be
            horizontal, vertical, or dynamic (like diagonal or curved lines).
            Form: Forms are shapes with volume, such as furniture or decor.
          </p>
        </div>
        <div className="border-2 border-blue w-500px h-auto text-black text-justify">
          <p className="md:mx-10 md:my-10 sm:mx-0 sm:my-0 line-clamp-6 lg:line-clamp-none">
            Space: The foundation of any interior design. It involves
            understanding the physical space and how to use it effectively.
            Line: Lines guide the eye and create shapes in a space. They can be
            horizontal, vertical, or dynamic (like diagonal or curved lines).
            Form: Forms are shapes with volume, such as furniture or decor. They
            can be geometric or organic. Light: Essential for visibility and
            mood. Natural and artificial lighting are both crucial. Color:
            Influences mood and perception. Color schemes are carefully chosen
            to match the purpose and style of the space. Texture: Adds depth and
            interest. Space: The foundation of any interior design. It involves
            understanding the physical space and how to use it effectively.
            Line: Lines guide the eye and create shapes in a space. They can be
            horizontal, vertical, or dynamic (like diagonal or curved lines).
            Form: Forms are shapes with volume, such as furniture or decor.
          </p>
        </div>
        <div className="border-2 border-blue w-full h-96">
          <img
            src={img2}
            alt="interiorimg1"
            srcset=""
            className="w-full h-96"
          />
        </div>
        <div className="border-2 border-blue w-full h-96">
          <img
            src={img3}
            alt="interiorimg1"
            srcset=""
            className="w-full h-96"
          />
        </div>
        <div className="border-2 border-blue w-500px h-auto text-black text-justify">
          <p className="md:mx-10 md:my-10 sm:mx-0 sm:my-0 line-clamp-6 lg:line-clamp-none">
            Space: The foundation of any interior design. It involves
            understanding the physical space and how to use it effectively.
            Line: Lines guide the eye and create shapes in a space. They can be
            horizontal, vertical, or dynamic (like diagonal or curved lines).
            Form: Forms are shapes with volume, such as furniture or decor. They
            can be geometric or organic. Light: Essential for visibility and
            mood. Natural and artificial lighting are both crucial. Color:
            Influences mood and perception. Color schemes are carefully chosen
            to match the purpose and style of the space. Texture: Adds depth and
            interest. Space: The foundation of any interior design. It involves
            understanding the physical space and how to use it effectively.
            Line: Lines guide the eye and create shapes in a space. They can be
            horizontal, vertical, or dynamic (like diagonal or curved lines).
            Form: Forms are shapes with volume, such as furniture or decor.
          </p>
        </div>
      </div>
    </>
  );
};

export default InteriorDesign;
