// src/TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import src123 from "../assets/bg-vcsomeproject.jpg";
import slideimg1 from "../assets/vbimage1.png";
import slideimg2 from "../assets/vbimage2.png";
import slideimg3 from "../assets/vbimage3.png";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is a fantastic product! It really helped our business grow.",
    image: slideimg1,
  },
  {
    name: "Jane Smith",
    title: "Marketing Director",
    text: "I love using this service, it's absolutely wonderful.",
    image: slideimg2,
  },
  {
    name: "Alice Johnson",
    title: "Developer",
    text: "Amazing experience, highly recommend to others.",
    image: slideimg3,
  },
];

const TestimonialSomeProject = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    horizontal: true,
    horizontalSwiping: true,
    arrows: false,
  };

  return (
    <div className="container md:w-full ml-15">
      <div className="w-full h-[75vh] grid grid-rows-1 grid-cols-2">
        <img
          src={src123}
          alt="bgimageforsomeproject"
          className="absolute w-[200%] h-[75vh]  md:px-10 md:py-5"
        />
        <div className=" w-[85vw] h-[55vh] relative mx-20 my-20 border-2 border-red-800 ">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="items-center text-center bg-transparent border-2 border-blue-800 rounded-lg md:grid-cols-2 md:grid-rows-1 md:w-[85vw] md:h-[55vh] md:mx-15 md:my-15 sm:grid-cols-1 sm:w-full"
              >
                <div className="grid grid-cols-2 grid-rows-1 bg-transparent border-2 border-red-800 rounded-lg w-[85vw] h-[55vh]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-[55vh] rounded-lg w-[85vw]"
                  />
                  <div className=" bg-transparent border-2 border-white rounded-lg h-[55vh] w-[42vw] px-10 py-3 text-justify">
                    <h1 className="py-5 text-2xl text-justify text-white ">
                      VF LAUREL @ Kolathur 2 & 3 BHK Flats{" "}
                    </h1>
                    <p className="py-5 text-justify text-white md:text-lg sm:line-clamp-4 ">
                      Victory Foundation a proprietorship company, founded by
                      first generation young entrepreneurs Mr. A. Anand Raj,
                      professional by qualification having diverged experience
                      in construction and real estate development. Victory
                      Foundation is one of the well reckoned Property developer
                      having most of its operations at North- Chennai, aiming
                      mainly on sustainable space creation.
                    </p>
                    <p className="py-5 text-lg text-justify text-white sm:line-clamp-4">
                      Victory Foundation a proprietorship company, founded by
                      first generation young entrepreneurs Mr. A. Anand Raj,
                      professional by qcial space, etc.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSomeProject;
