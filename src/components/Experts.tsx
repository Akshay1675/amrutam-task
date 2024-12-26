import React, { useRef, useState } from "react";
import expertImg from "../assets/Ellipse 725.png";
import experienceLogo from "../assets/Frame.png";
import spacilityLogo from "../assets/Frame (1).png";
import rightArrow from "../assets/Frame 1000006104.png";
import leftArrow from "../assets/Frame 1000006105.png";
interface Expert {
  id: number;
  rating: number;
  name: string;
  specialization: string;
  experience: string;
  speciallity: string;
  image: string;
}
const Experts: React.FC = () => {
  const experts: Expert[] = [
    {
      id: 1,
      rating: 4.5,
      name: "Dr. Vaishali sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      speciallity: "Skin Specialist",
      image: expertImg,
    },
    {
      id: 2,
      rating: 4.5,
      name: "Dr. Vaishali sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      speciallity: "Skin Specialist",
      image: expertImg,
    },
    {
      id: 3,
      rating: 4.5,
      name: "Dr. Vaishali sharma",
      specialization: "Ayurveda Practitioner (BAMS, MD)",
      experience: "25 years of experience",
      speciallity: "Skin Specialist",
      image: expertImg,
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCard, setActiveCard] = useState<number>(0);

  const scrollToCard = (index: number) => {
    setActiveCard(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  return (
    <section className="w-full md:h-[808px] flex flex-col items-center bg-[#FFFFFF]">
      <div className="md:w-[597px] md:h-[62px] w-[269px] h-[82px] mt-[77px] flex items-center gap-6 ">
        <h2 className="w-[269px] md:w-full md:text-[48px] text-[32px] font-[DINPro-Bold] font-bold leading-[61.82px] text-[#3A643B] text-center md:border-b-[5px] border-b-[#C3D0C4] ">
          Meet our Ayurveda experts
        </h2>
      </div>

      <div className="relative w-[341px] md:w-[981px] h-[446px] mt-[77px] flex overflow-x-scroll md:overflow-hidden gap-12 scrollbar-hide">
        <img
          src={rightArrow}
          alt="Left Arrow"
          className="hidden md:block absolute left-[-140px] mt-[156px]  w-[72px] h-[69px] cursor-pointer"
        />
        {experts.map((expert, index) => (
          <div
            key={expert.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[295px] ml-4 md:ml-0 h-full rounded-[40px] flex flex-col items-center border-[1px] bg-[#FFF7E2] p-6 font-[DINPro-Bold]"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-[149px] h-[150px] object-cover mt-3 rounded-full"
            />
            <div className="hidden md:flex items-center justify-center w-[70px] h-[28px]  gap-3 rounded-[17px] bg-gradient-to-b from-[#0B0B0B] to-[rgba(11,11,11,0.79)] text-white text-sm font-medium -mt-6">
              <p className=" font-bold text-base">{expert.rating}⭐</p>
            </div>
            <h3 className="text-xl font-[350] font-[Gotham Rounded] mt-4">
              {expert.name}
            </h3>
            <p className="text-[15px] font-medium font-[Inter] text-[#838383]">
              {expert.specialization}
            </p>
            <p className="text-base font-normal font-[Nunito] mt-2">
              <div className="flex justify-between items-center">
                <img src={experienceLogo} alt="experience" />
                <span className="font-semibold">{expert.experience}</span>
              </div>
            </p>
            <p className=" w-[150px] h-[30px] text-base text-[#3A643B] bg-[#3A643B1F]  rounded-[18px] bg font-normal font-[Nunito] mt-2">
              <div className="flex justify-center items-center">
                <img src={spacilityLogo} alt="spaciality" />
                <span className="font-semibold">{expert.speciallity}</span>
              </div>
            </p>
            <button className="md:mt-[44px] mt-[70px] w-[295px] h-[65px] px-[77px] py-[19px] gap-[10px] rounded-bl-[40px] rounded-br-[40px] bg-[#3A643B] text-white text-[20px] font-[600] leading-[18px] tracking-[-0.01em] text-left font-Nunito">
              Book a session
            </button>
          </div>
        ))}

        <img
          src={leftArrow}
          alt="Right Arrow"
          className="hidden md:block absolute right-[-140px] mt-[156px] w-[72px] h-[69px]  cursor-pointer"
        />
      </div>

      <div className="md:hidden w-[96px] mx-auto my-6 md:my-0 flex justify-between items-center gap-[12px]">
        {experts.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-[12px] h-[12px] rounded-full cursor-pointer ${
              activeCard === index ? "bg-[#3A643B]" : "bg-[#C3C3C3]"
            }`}
          ></div>
        ))}
      </div>

      <div className="hidden w-[96px] h-[9px] mx-auto mt-16 md:flex justify-between items-center gap-[30px]">
        <div className="w-[12px] h-[12px] rounded-full bg-[#3A643B]"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-[#C3C3C3]"></div>
      </div>

      <button className="w-[276px] h-[62px] px-[25px] mt-10 py-0 gap-[2px] rounded-[7px]  border-[1px] border-[#3A643B] bg-[#DBE3DC63] text-[#3A643B] text-[24px] font-DINPro font-medium leading-[58px] tracking-[-0.01em] text-left">
        Find more experts
      </button>
    </section>
  );
};

export default Experts;
