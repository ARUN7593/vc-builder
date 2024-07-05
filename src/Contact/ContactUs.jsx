import React from "react";
import imageSrc from "../assets/vcbglocation.png";
import victorylogo from "../assets/victory-logo.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapLocation from "./MapLocation";

const ContactUs = () => {
  return (
    <>
      <div className="flex justify-center items-center text-white">
        <div className="relative w-full h-[550px]">
          <img
            src={imageSrc}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 mx-30">
            <div className="w-1/2  flex flex-col ">
              <div className="flex flex-col relative md:w-full md:h-80 md:mb-8 md:pl-6 ">
                <div className="flex items-center mb-4 mr-6  ">
                  <img
                    src={victorylogo}
                    alt="VFR Logo"
                    className="mr-2 w-28 h-28"
                  />
                  <div>
                    <h1 className="text-3xl font-bold text-orange-950">
                      VICTORY
                    </h1>
                    <p className="text-lg text-orange-950">
                      FOUNDATIONS & REALTORS
                    </p>
                  </div>
                </div>
                <br />
                <h2 className="mb-4 text-2xl font-bold text-black ml-7">
                  Contact Info
                </h2>
                <div className="flex items-center mb-2 w-full text-black mr-1 ">
                  <div>
                    <FaMapLocation className="mr-2 text-orange-950 ml-8 mb-10 size-4" />
                  </div>
                  <p className="lg:text-lg lg:w-1/2 md:text-md md:w-1/2 sm:text-sm sm:w-96 ">
                    No 10A, North Mada Street, Kolathur, Chennai, Tamil Nadu
                    600008
                  </p>
                </div>
                <div className="flex items-center mb-2 text-black">
                  <FaEnvelope className="mr-2 text-orange-950 ml-8" />
                  <p className="lg:text-lg lg:w-1/2 md:text-md md:w-1/2 sm:text-sm sm:w-96 ">
                    saidigiservtechnologies.com
                  </p>
                </div>
                <div className="flex items-center text-black">
                  <FaPhone className="mr-2 text-orange-950 ml-8" />
                  <p className="lg:text-lg lg:w-1/2 md:text-md md:w-1/2 sm:text-sm sm:w-96 ">
                    +91-93451 39639
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-1/2 flex">
              <div className="relative w-full h-80 ">
                <MapLocation className=" border-2 border-black sm:w-96 sm:h-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
