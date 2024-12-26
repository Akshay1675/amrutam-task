import heroImage from "../assets/Rectangle 3464760.png";
import featureImage1 from "../assets/Frame 427319082.png";
import featureImage2 from "../assets/Frame 427319083.png";
import featureImage3 from "../assets/Frame 427319084.png";
import featureImage4 from "../assets/Frame 427319085.png";
import mobileHeroImg from "../assets/Rectangle 3464762.png";
import HeroFeatureCard from "./HeroFeatureCard";
import hamburgerMenu from "../assets/Frame 1000005821.png"
import logo from "../assets/image 45.png"
interface FeatureData {
  icon: string;
  text: string;
}
const Hero: React.FC = () => {
  const features: FeatureData[] = [
    {
      icon: featureImage1,
      text: "Convenient online & \nIn-clinic consultations",
    },
    {
      icon: featureImage2,
      text: "Safe and effective \ntreatment",
    },
    {
      icon: featureImage3,
      text: "Experienced Ayurvedic \nPractitioners",
    },
    {
      icon: featureImage4,
      text: "Personalized Treatment \nPlans & Guidance",
    },
  ];
  return (
    <section className="relative w-full h-[1208px] md:h-[868px] bg-[#FFF7E2] md:overflow-hidden">
      <div className="absolute top-[-2px] w-full h-[80px] bg-[#FFF7E2] flex items-center">
        <img src={hamburgerMenu} className="md:hidden absolute left-[19px] w-8 h-[14px] "/>
        <img src={logo} className="md:hidden w-[122px] h-6 text-center mx-auto"/>
      </div>
      <div className="relative top-[80px] w-full h-[639px]">
        {/* Left Rectangle */}
        <div
          className="hidden md:block absolute top-0 left-0 w-[50%] h-full bg-[#951D1C]"
          style={{
            backdropFilter: "blur(0.3px)",
          }}
        />

        {/* Right Rectangle with Image */}
        <div className="hidden md:block absolute top-0 right-0 w-[59%] h-full">
          <img
            src={heroImage}
            alt="Hero Right"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero image for mobile */}
        <div className="block md:hidden absolute top-0 w-full h-full">
          <img
            src={mobileHeroImg}
            alt="Hero Right"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient element */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(90.17deg, rgba(18, 18, 18, 0.88) 1.03%, rgba(18, 18, 18, 0.92) 44.18%, rgba(1, 1, 1, 0) 95.15%)",
          }}
        />
      </div>

      <div className="absolute top-[203px] left-[13px] md:left-[98px] w-[90%] md:w-[904px] h-[360px] md:h-[370px] flex flex-col gap-[40px] md:gap-[48px]">
        {/* First Frame */}
        <div className="flex flex-col gap-[8px]">
          {/* Title */}
          <h1
            className="text-[16px] md:text-[28px] text-[#FFF7E2] font-normal md:font-light md:leading-[28px] leading-[16px] text-left"
            style={{
              fontFamily: "Nexa Light",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Namaste, Welcome to Amrutam
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-[16px] text-[#FFF7E2] w-full">
            {/* Bold Heading */}
            <h2
              className="md:text-[48px] text-[24px] font-bold md:leading-[67.2px] leading-[33.6px] text-left"
              style={{
                fontFamily: "DINPro-Bold",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Step into Holistic Healing with{" "}
              <span
                className="underline"
                style={{
                  textDecorationStyle: "solid",
                }}
              >
                Ayurveda
              </span>
              <br />
              Book Consultation with certified Experts.
            </h2>

            {/* Subtext */}
            <p
              className="md:text-[20px] text-[14px] font-medium md:leading-[28px] leading-[19.6px] text-left md:w-[788px]"
              style={{
                fontFamily: "DINPro",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Dive into the world of ayurveda and Experience{" "}
              <span
                style={{
                  fontFamily: "DINPro",
                  fontWeight: 500,
                }}
              >
                Personalized Health Solutions
              </span>{" "}
              and Holistic Guidance from Trusted Ayurvedic Doctors Anytime,
              anywhere.
            </p>
          </div>
        </div>

        {/* Second Frame - Button */}
        <button className="md:w-[305px] w-[214px] md:h-[70px] h-[50px] px-[40px] bg-[#3A643B] text-white rounded-[16px] md:text-[20px] text-[12px] font-[DIN Medium] font-medium hover:bg-opacity-90 transition">
          Book an Appointment
        </button>
      </div>

      <div className="absolute top-[721px] md:left-[2%] left-[6%] md:flex gap-[16px]">
        {/* Map through features */}
        {features.map((feature, index) => (
          <HeroFeatureCard
            key={index}
            icon={feature.icon}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
