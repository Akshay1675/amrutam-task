import React, { useRef, useState } from "react";
interface CardData {
  id: number;
  heading: string;
  text: string;
}

const ApproachSection: React.FC = () => {
  const cards: CardData[] = [
    {
      id: 1,
      heading: "Make Appointment",
      text: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      id: 2,
      heading: "Consultations",
      text: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      id: 3,
      heading: "Treatment Planning",
      text: "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      id: 4,
      heading: "Maintenance",
      text: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeCard, setActiveCard] = useState<number>(0);


  const scrollToCard = (index: number) => {
    setActiveCard(index)
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };
  return (
    <section className="w-full md:h-[759px] h-[832px] flex flex-col items-center bg-white">
      <div className="md:w-[772px] md:h-[164px] w-[323px] h-[232px] mt-20 md:mt-[95px] flex flex-col items-center gap-6 ">
        <div className="w-full flex flex-col items-center">
          <h2 className="md:text-[48px] text-[32px] font-[DINPro-Bold] font-bold leading-[41.22px] md:leading-[54px] text-[#3A643B] text-center md:border-b-[5px] border-b-[#C3D0C4] ">
            Our Ayurvedic Approach
          </h2>
        </div>

        {/* Description */}
        <p className="md:w-[772px] md:h-[78px] w-[302px] h-[126px] md:text-[20px] text-[16px] font-normal leading-[20.61px] md:leading-[28px] text-[#666666] text-center">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>

      <div className="md:w-[1232px] md:h-[315px] w-[323px] h-[348px] mt-16 md:mt-[77px] flex overflow-x-scroll md:overflow-x-hidden  gap-[24px] scrollbar-hide">
        {cards.map((card,index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[290px] h-[315px] p-[28px_20px] flex flex-col items-center gap-2.5 rounded-[20px] border-t-[4px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)]"
            style={{
              backgroundColor: "#FFF7E2",
              borderTopColor: "#3A643B",
            }}
          >
            {/* Circle */}
            <div
              className="w-[90px] h-[90px] rounded-full border border-[#3A643B] bg-[#3A643BA8] font-[DINPro-Bold] font-bold text-[48px] flex items-center justify-center text-white"
              style={{
                borderWidth: "1px",
                left: "81.5px",
              }}
            >
              {card.id}
            </div>

            {/* Text Container */}
            <div
              className="w-[253px] h-[134px] mt-2 font-[DINPro-Bold] flex flex-col items-center gap-[8px] "
            >
              <p className="text-center font-bold text-2xl text-[#3A643B]">{card.heading}</p>
              <p className="text-center font-normal text-xl text-[#2E2E2E]">{card.text}</p>

            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden w-[96px] mx-auto my-6 md:my-0 flex justify-between items-center gap-[12px]">
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-[12px] h-[12px] rounded-full cursor-pointer ${
              activeCard === index ? "bg-[#3A643B]" : "bg-[#C3C3C3]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ApproachSection;
