import React from "react";
import image1 from "../assets/image 54.png";
import image2 from "../assets/image 57.png";
import icon1 from "../assets/heartbeat (1) 1.png";
import icon2 from "../assets/ribbon 1.png";
import icon3 from "../assets/lotus-position 1.png";
import icon4 from "../assets/protection 1.png";
import icon5 from "../assets/ayurveda 1.png";
import icon6 from "../assets/strong 1.png";

interface Card {
  id: number;
  title: string;
  description: string;
  icon: string;
  position: { top: number; left: number };
  width: number;
  textWidth: number;
}
const Benefits: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Personalized Wellness",
      description:
        "Get treatments made just for you based on your individual doshas (body type).",
      icon: icon1,
      position: { top: 293, left: 59 },
      width: 349,
      textWidth: 233,
    },
    {
      id: 2,
      title: "Focus on prevention",
      description: "Stop problems even before they start.",
      icon: icon2,
      position: { top: 477, left: 55 },
      width: 307,
      textWidth: 195,
    },
    {
      id: 3,
      title: "Mind-Body Connection",
      description: "Keep your mind and body in sync for a happy life.",
      icon: icon3,
      position: { top: 647, left: 59 },
      width: 361,
      textWidth: 245,
    },
    {
      id: 4,
      title: "Holistic Healing",
      description: "Fix the root problem for long-lasting health.",
      icon: icon4,
      position: { top: 295, left: 892 },
      width: 300,
      textWidth: 184,
    },
    {
      id: 5,
      title: "Natural Remedies",
      description: "Using herbs and natural therapies for healing.",
      icon: icon5,
      position: { top: 476, left: 947 },
      width: 318,
      textWidth: 202,
    },
    {
      id: 6,
      title: "Boosting immunity",
      description: "Stay strong and healthy for life, not just for today.",
      icon: icon6,
      position: { top: 650, left: 892 },
      width: 350,
      textWidth: 234,
    },
  ];

  return (
    <div className="relative md:ml-12 w-full md:max-w-screen-xl md:h-[849px] h-[1290px] flex flex-col items-center md:overflow-hidden">
      <div className="md:w-[806px] w-[334px] mt-[69px]  flex flex-col items-center gap-6">
        {/* Heading and Line */}
        <div className="w-full flex flex-col items-center">
          <h2 className="md:text-[48px] text-[32px] font-bold md:leading-[54px] leading-[36px] text-[#3A643B] text-center md:border-b-[5px] border-b-[#C3D0C4] ">
            Discover Ayurveda’s magic with us
          </h2>
        </div>

        {/* Description */}
        <p className="md:w-[671px] w-[298px] h-[84px] md:text-[20px] text-[14px] font-normal md:leading-[28px] leading-[21px] text-[#666666] text-center">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>
      {/* center image */}
      <div className="relative w-[209px] h-[228px] md:w-[503px] md:h-[522px] mt-8  md:mt-[40px]">
        {/* First Image */}
        <img
          src={image1}
          alt="Background Circle"
          className="absolute  md:w-[501px] md:h-[505px] top-0 left-0 rounded-[241px] md:rounded-[250.5px] object-contain"
        />

        {/* Second Image */}
        <img
          src={image2}
          alt="Foreground Circle"
          className="absolute  md:w-[492px] md:h-[482px] top-2.5 md:top-[40px]  rounded-[241px] object-contain"
        />
      </div>

      {/* Cards */}
      {cards.map((card) => {
        const isLeftCard = card.position.left < 700; 

        return (
          <div
            key={card.id}
            style={{
              position: "absolute",
              top: card.position.top,
              left: card.position.left,
              width: card.width,
            }}
            className="hidden md:flex items-center  h-[100px] gap-[16px]"
          >
            
            {isLeftCard ? (
              <>
                
                <div
                  style={{ width: card.textWidth }}
                  className="flex flex-col  gap-[8px]"
                >
                  <h3 className="text-[#3A643B] text-[20px] font-bold leading-[25.76px]">
                    {card.title}
                  </h3>
                  <p className="text-[#666666] text-[16px] leading-[20.61px]">
                    {card.description}
                  </p>
                </div>
                
                <div className="relative w-[100px] h-[100px] flex justify-center items-center bg-[#EDF5FA] rounded-full">
                  <img
                    src={card.icon}
                    alt={`${card.title} Icon`}
                    className="w-[65px] h-[55px]"
                  />
                </div>
              </>
            ) : (
              <>
               
                <div className="relative w-[100px] h-[100px] flex justify-center items-center bg-[#EDF5FA] rounded-full">
                  <img
                    src={card.icon}
                    alt={`${card.title} Icon`}
                    className="w-[64px] h-[64px]"
                  />
                </div>
                
                <div className="flex flex-col w-[233px] gap-[8px]">
                  <h3 className="text-[#3A643B] text-[20px] font-bold leading-[25.76px]">
                    {card.title}
                  </h3>
                  <p className="text-[#666666] text-[16px] leading-[20.61px]">
                    {card.description}
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}

      {/* mobile cards */}

      <div className="md:hidden mt-8 flex flex-wrap w-[329px] gap-5 ">
      {cards.map((card) => {
        return (
          <div className="w-[154px] h-[214px] p-[17px_9px] flex flex-col items-center gap-[10px] 
            rounded-[12px] border border-[#E4E4E4]" key={card.id}>
              <div className="w-[63px] h-[59px] flex items-center justify-center  bg-[#EDF5FA] rounded-full">
                  <img
                    src={card.icon}
                    alt={`${card.title} Icon`}
                    className="w-[42px] h-[42px]"
                  />
              </div>
              <div className="flex flex-col items-center w-[136px] mt-2 gap-[5px]">
                  <h3 className="text-[#3A643B] text-center text-[15px] font-bold leading-[19.32px]">
                    {card.title}
                  </h3>
                  <p className="text-[#666666] text-[13px] text-center font-medium leading-[16.74px]">
                    {card.description}
                  </p>
              </div>

            </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Benefits;
