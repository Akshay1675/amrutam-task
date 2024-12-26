import React, { useRef, useState } from "react";
interface TestimonialData {
  id: number;
  consultedFor: string;
  userName: string;
  location: string;
  date: string;
  rating: number;
  heading: string;
  text: string;
}
const Testimonials: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      consultedFor: "Skin",
      userName: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      heading: "“One of a kind service”",
      text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 2,
      consultedFor: "Hair",
      userName: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      heading: "“One of a kind service”",
      text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 3,
      consultedFor: "Hair",
      userName: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      heading: "“One of a kind service”",
      text: "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
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
    <section className="w-full md:h-[710px] h-[730px] flex flex-col items-center bg-[#FFF7E2]">
      <div className="md:w-[808px] md:h-[62px] mt-[77px] flex items-center gap-6 ">
        <h2 className="w-full text-[32px] md:text-4xl font-[DINPro-Bold] font-bold leading-[41.22px] md:leading-[61.82px] text-[#3A643B] text-center md:border-b-[5px] border-b-[#C3D0C4] ">
          STORIES FROM OUR VALUED CUSTOMERS!
        </h2>
      </div>

      <div className="md:w-[1228px] md:h-[371px] w-[335px] h-[390px] mt-[77px] flex overflow-x-scroll md:overflow-hidden md:gap-[24px] gap-4 scrollbar-hide">
        {testimonials.map((testimonial,index) => (
          <div
            key={testimonial.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="md:w-[388px] w-[304px] h-auto flex flex-col rounded-[20px] border border-[#D7D7D7] shadow-md bg-white"
          >
            <div
              className={`md:w-[386px] h-[54px] px-[26px] flex items-center rounded-t-[20px] gap-1 ${
                testimonial.consultedFor.toLowerCase() === "hair"
                  ? "bg-[#ECFEE7]"
                  : "bg-[#ECE7FF]"
              }`}
            >
              <p className="md:text-[18px] text-[16px] font-bold font-[Nunito]">
                Consulted for {testimonial.consultedFor}
              </p>
            </div>

            <div className="p-4 mt-[20px]">
              {/* 1st Section - User Info and Date */}
              <div className="flex justify-between items-center">
                {/* User Info */}
                <div className="flex w-[197px] justify-between items-center">
                  <div className="md:h-[60px] md:w-[60px] w-[51px] h-[50px] rounded-full bg-[#515151]"></div>
                  <div className="flex w-[124px] flex-col">
                    <p className="md:text-[16px] text-[15px] font-semibold">
                      {testimonial.userName}
                    </p>
                    <p className="md:text-[14px] text-[13px] text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <p className="md:text-[16px] text-[12px] font-light">{testimonial.date}</p>
              </div>

              {/* 2nd Section - Rating */}
              <div className="flex items-center md:w-[140px] w-[129px] h-6 my-5">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* 3rd Section - Review Content */}
              <div className="mt-[3px]">
                {/* Heading */}
                <h3 className="md:text-[22px] text-[20px] font-bold font-DM-Sans leading-[22px]">
                  {testimonial.heading}
                </h3>
                {/* Text */}
                <p className="md:text-[18px] text-[16px] font-normal font-DM-Sans leading-[30px] mt-2">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden w-[96px] mx-auto my-10 md:my-0 flex justify-between items-center gap-[12px]">
        {testimonials.map((_, index) => (
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
    </section>
  );
};

export default Testimonials;
