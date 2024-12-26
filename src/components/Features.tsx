import React from "react";
import img1 from "../assets/Rectangle 4144.png";

const Features: React.FC = () => {
  return (
    <section
      className="relative w-full md:h-[876px] h-[2320px] gap-0"
      style={{
        background: "linear-gradient(110.23deg, #FFF7E2 1.25%, #FFFAEE 100%)",
        opacity: 1,
      }}
    >
      {/* Title */}
      <div className="w-full flex flex-col items-center">
        <h2
          className="text-[#3A643B] text-center md:text-[48px] text-[32px] font-bold leading-[41.22px] md:leading-[61.82px] md:border-b-[5px] border-b-[#C3D0C4] "
          style={{
            height: "61px",
            marginTop: "79px",
            opacity: 1,
          }}
        >
          What sets Ayurvedic consultations apart?
        </h2>
      </div>

      <div className="md:w-[1240px] md:h-[579px] w-[328px] h-[2077px] mt-14  mx-auto gap-6 md:gap-4 flex flex-wrap ">
        <div
          className="md:w-[522px] md:h-[286px] w-[328px] h-[267px] p-[48px_32px] flex flex-col gap-[8px] rounded-[20px] border-t-[5px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundColor: "#FFFFFF",
            borderTopColor: "#3A643B",
          }}
        >
          <div className="md:w-[458px] md:h-[190px] text-center gap-[19px] md:gap-0 text-[#3A643B]">
            <h1 className="font-[InknutAntiqua] md:text-[32px] text-[24px] font-normal md:leading-[50.88px] leading-[38.16px] text-center">स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h1>
            <p className="font-[DINPro] text-[15px] md:text-[18px] font-normal leading-[19.32px] md:leading-[23.18px] text-center">
            [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
        </div>

        <img
          src="https://s3-alpha-sig.figma.com/img/176b/ed5d/116ec373d4d09fe1dc2dad43869868d9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEio~S8ISYcEEyBMJGEVw-c824nXCzL82QZVZA4249uSwaAZW~JdRS3uwTCgBOnrpQAI-wKfhoy9iKM~GALYwGeeaMdvxInVzqPEhP8pjyPJyXV9ipcb~6EODp1L3p9dAVFYaIXGgKpnFP8b0rwI2azYNnaEUU3h-6PJAQe5GsvxVIHnvoA4qbbx6ySCxgLaHAGTwLd54i0Fxq21~H-X5jLSWgZwyQMNMzBYAWJmX1nCAxCbEndSqbYSyNmZ0tL5CQ4eC4lgcF3YcVC53sHFAORZMuAleGkNLjjpBmVp0WIc~St6EEsBXOLiOys5pFMtqYTw26IDb75jJslVAkFNaQ__"
          alt="img"
          className="md:w-[371px] w-[328px] h-[285px] rounded-[20px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)] object-cover"
        />

        <div
          className="md:w-[311px] w-[328px] h-[285px] p-[49px_24px] flex flex-col gap-4 md:gap-[10px] rounded-[20px] border-t-[5px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundColor: "#FFFFFF",
            borderTopColor: "#3A643B",
          }}
        >
          <div className=" text-[#3A643B]">
            <h1 className="font-[DINPro-Bold] text-[24px] font-bold leading-[30.91px] text-center">precise diagnosis</h1>
            <p className="font-[DINPro] text-[20px] font-normal leading-[23.18px] text-center text-[#414141] mt-4">
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
        </div>

        <div
          className="md:w-[293px] w-[328px] h-[277px] p-[48px_24px] flex flex-col gap-4 md:gap-[10px] rounded-[20px] border-t-[5px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundColor: "#FFFFFF",
            borderTopColor: "#3A643B",
          }}
        >
          <div className=" text-[#3A643B]">
            <h1 className="font-[DINPro-Bold] text-[24px] font-bold leading-[30.91px] text-center">Zero side-effects</h1>
            <p className="font-[DINPro] text-[20px] font-normal leading-[23.18px] text-center text-[#414141] mt-4">
            Ayurvedic treatments are devoid of chemicals, and are based completely on natural herbs
            </p>
          </div>
        </div>

        <img
          src="https://s3-alpha-sig.figma.com/img/23ad/ed32/94aa2a9dd47c19df140900a908a8c26c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wdgvl5hv-obWHbSaxnB9XnXXzV0Znc~dkNOXVZ4AGhclEem5IDv-OY1GGSQhzUB2nchiP3pR9qRr80othdj3fNgmGr6jSBBKWGnJGcq1wvFkX~2iMFQNdf9-X88qWLV6WAgXydkhZsP0Ek5GTbnN59Zdu6bGR-gYEj9t8esqPQzxT6VpkzZPTimbvN6xEGxilVYLjJvQ4v0xKUZwYVU0k6aCWM3uJZg9MIRXxV7bv9ldbLoxqNbC5J3GPJ1ewxsR47zH26tL6P6jJRpZckl33BNOeJ0rXWbNv~Oqg5vScjricK5pxipd5W63-CZ3kwMqqJV6H7nf1Ep1C3r07zSBMQ__"
          alt="img"
          className="md:w-[293px] w-[328px] h-[274px] rounded-[20px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)] object-cover"
        />

        <div
          className="md:w-[298px] w-[328px] h-[269px] p-[48px_24px] flex flex-col gap-4 md:gap-[10px] rounded-[20px] border-t-[5px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)]"
          style={{
            backgroundColor: "#FFFFFF",
            borderTopColor: "#3A643B",
          }}
        >
          <div className=" text-[#3A643B]">
            <h1 className="font-[DINPro-Bold] text-[24px] font-bold leading-[30.91px] text-center">Individual Treatment
            </h1>
            <p className="font-[DINPro] text-[20px] font-normal leading-[23.18px] text-center text-[#414141] mt-4">
            all Treatments are personalized based on a person's unique constitution and health concerns.
            </p>
          </div>
        </div>

        <img
          src="https://s3-alpha-sig.figma.com/img/63a4/2853/caf304c4ff88f018f79dedae521d759e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVykztJaXXkIVoiLRQhbiHL3c1cyMkc5fmiq13nnra5AJRTaPYmMMIRmsbOfQomEiabSGmP89X38WeCGdJAn5-2ksqSqrqCiOF~b6qPndhdXkf9isV4-bkyBwaIBeubhLnTat6GEgt8YuebxWAJw7nXM7AVCtjKhEdV4wZ-KIG3Ig9gfBC~z0qMsVWwkWeHvn0Jzn5dtiPV99mqEK0wXgC6eHSxPY4WAziiIwCKnNP3mW4xoR92oe1mo-zsf6biTefZPyIDv7FbzoyuN0NLlOHalEtr1Rz8dNH7kZgIb7R4nfLjiTcJ0u8ofj7Y~6GQCh3P8Qwos-fM4SoC9NMhrhA__"
          alt="img"
          className="md:w-[294px] w-[328px] h-[276px] rounded-[20px] shadow-[0px_4px_8.9px_0px_rgba(0,0,0,0.06)] object-cover"
        />
      </div>
    </section>
  );
};

export default Features;
