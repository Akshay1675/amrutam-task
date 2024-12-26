import React from "react";

interface HeroFeatureCardProps {
  icon: string;
  text: string;
}

const HeroFeatureCard: React.FC<HeroFeatureCardProps> = ({ icon, text }) => {
  return (
    <div className="md:w-[318px] w-[360px]  md:h-[147px] h-[122px] md:p-[40px_24px] p-[35px_16px] flex flex-col items-start md:gap-[16px] gap-2.5">
      <div className="flex items-center gap-[12px]">
        {/* Icon */}
        <div className="flex items-center justify-center w-[70px] h-[70px]">
          <img src={icon} alt="Feature Icon" className="w-full h-full object-cover" />
        </div>
        {/* Text */}
        <p
          className="text-[18px] text-[#3A643B] font-bold leading-[25.2px] text-left"
          style={{
            fontFamily: "DINPro-Bold",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default HeroFeatureCard;
