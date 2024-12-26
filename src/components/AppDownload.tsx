import React from "react";
import androidImg from "../assets/image 67.png";
import iosImg from "../assets/image 68.png";
import smartphone from "../assets/Group 39489.png";
import smallScreenImg from "../assets/iPhone 13.png";

const AppDownload = () => {
  return (
    <div className="w-full md:h-[707px] h-[940px] font-[DINPro-Bold] bg-[#FFF7E2] mt-12">
      <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="md:mt-[75px] mt-10 md:w-[574px] md:ml-[146px] text-center">
          <h2 className="md:text-[48px] md:-ml-4 text-[32px] font-bold text-gray-800 mb-2">
            <span className="text-[#3A643B]">Amrutam Ayurveda App</span>
          </h2>
          <p className="md:text-base text-[14px] font-normal  text-[#676767] mb-4">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <img
            src={smallScreenImg}
            className="md:hidden ml-2 w-[358px] h-[328px]"
          />
          <p className="md:text-[32px] text-[20px] font-normal font-[DIN Medium]  text-[#000000] mb-6">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe
          </p>
          <p className="text-4xl font-bold font-[DINPro-Bold]  text-[#000000] mb-6">
            Get the App now
          </p>
          <div className="md:flex md:gap-4 ml-[75px] md:ml-0">
            <img
              src={androidImg}
              alt="Google Play"
              className="md:w-[200px] w-[270px] mb-4 md:mb-0"
            />

            <img
              src={iosImg}
              alt="App Store"
              className="md:w-[200px] w-[270px]"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block mt-[65px]">
          <img
            src={smartphone}
            alt="Amrutam Ayurveda App"
            className="w-[734px] h-[565px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
