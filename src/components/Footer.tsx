import React from "react";
import socialIcons from "../assets/Frame 1000006082.png";

const Footer = () => {
  return (
    <div className="w-full h-[924px] md:h-[500px] md:flex bg-[#3A643B2E]">
      <div className="md:hidden w-full gap-6 flex flex-col justify-center text-center ">
        <p className="ml-5 mt-12 font-[DINPro-Bold] text-[18px] font-bold leading-[23.18px] tracking-[0.03em] text-left text-[#3A643B]">
          Get in touch
        </p>
        <p className="ml-5 font-[DINPro-Bold] text-[18px] font-bold leading-[23.18px] tracking-[0.03em] text-left text-[#000000]">
          support@amrutam.co.in
        </p>
        <p className="ml-5 font-[DINPro-Bold] text-[18px] font-bold leading-[23.18px] tracking-[0.03em] text-left text-[#000000]">
          Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
        </p>
        <p className="ml-5 font-[DINPro-Bold] text-[18px] font-bold leading-[23.18px] tracking-[0.03em] text-left text-[#000000]">
          +91 9713171999
        </p>
        <img src={socialIcons} className="w-[280px] ml-5" />
      </div>
      <div className="w-full flex flex-col md:justify-center md:items-center text-center">
        <div className=" ml-5 gap-2">
          <p className="mt-8 font-[DINPro-Bold] text-[18px] font-bold leading-[23.18px] tracking-[0.03em] text-left text-[#3A643B]">
            Information
          </p>
          <div>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              About Us
            </p>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              Terms and Conditions
            </p>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              Privacy Policy
            </p>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              Privacy Policy for Mobile Apps
            </p>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              Shipping and Returns Policy
            </p>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              International Delivery
            </p>
            <p className="font-[DINPro] text-[18px] font-normal leading-[27px] text-left text-[#474747]">
              For Businesses, Hotels and Resorts
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden w-full gap-6 flex flex-col justify-center text-center ">
        <p className="w-[307px] ml-5 mt-20 font-[DINPro-Bold] text-[18px] font-bold leading-[23.18px] tracking-[0.03em] text-left text-[#3A643B]">
          Subscribe to our Newsletter and join Amrutam Family today!
        </p>
        <div className="flex ml-5 items-center w-[303px] h-[56px] border border-[#3A643B] rounded-[40px_0px_0px_40px] overflow-hidden ">
          <input
            type="text"
            placeholder="Search here..."
            className="flex-grow h-full pl-[24px] text-[16px] font-[DINPro] font-normal leading-[20.61px] text-left outline-none"
            style={{
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          />
          <button
            className="w-[121px] h-[54px] bg-[#000000] text-white rounded-[0px_40px_40px_0px] text-center"
            style={{
              padding: "14px 17px",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
