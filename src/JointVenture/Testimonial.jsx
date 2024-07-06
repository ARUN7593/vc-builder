// src/TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is a fantastic product! It really helped our business grow.",
    image:
      "https://st.depositphotos.com/1987395/1928/i/950/depositphotos_19288743-stock-photo-young-successful-business-man-at.jpg/150",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director",
    text: "I love using this service, it's absolutely wonderful.",
    image:
      "https://st.depositphotos.com/1987395/1928/i/950/depositphotos_19288743-stock-photo-young-successful-business-man-at.jpg/150",
  },
  {
    name: "Alice Johnson",
    title: "Developer",
    text: "Amazing experience, highly recommend to others.",
    image:
      "https://st.depositphotos.com/1987395/1928/i/950/depositphotos_19288743-stock-photo-young-successful-business-man-at.jpg/150",
  },
];

const Testimonial = () => {
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
    <div className="container md:w-4/6 md:p-8 md:mx-10 ml-15">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-8 text-center bg-white border-2 border-red-800 rounded-lg sm:grid-cols-1 sm:w-3/4 sm:w-6/7 "
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mb-4 rounded-full"
            />
            <p className="text-lg font-semibold">{testimonial.name}</p>
            <p className="mb-4 text-sm text-gray-600">{testimonial.title}</p>
            <p className="text-gray-800">{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
