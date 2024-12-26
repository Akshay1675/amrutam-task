import React from 'react'
import bgImg from "../assets/Rectangle 4167.png"

const Booking = () => {
  return (
    <div className='relative w-full h-[590px] mt-20 md:mt-0'>
      
      <img src={bgImg}
      alt='bg-image' className='absolute w-full h-full -mt-[2px] '
      />
      <div
        className="relative w-full h-full flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.59) 2.52%, rgba(0, 0, 0, 0.53) 22.87%, rgba(14, 14, 14, 0.4) 100%)',
        }}
      >
        <h2
          className="md:w-[856px] md:h-[164px] w-[246px] md:text-[64px] md:leading-[82.43px] text-[32px] leading-[41.52px] h-[164px] text-center "
          style={{
            fontFamily: 'DINPro',
            fontWeight: 500,
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: '#FFF7E2', 
          }}
        >
          Ready to restore harmony in your mind, body and spirit?
        </h2>
        <button
      className="md:w-[276px] md:h-[72px] w-[257px] h-[66px] px-[40px] py-[24px] flex items-center justify-center gap-[10px] rounded-[16px] shadow-[0px_4px_20.8px_0px_rgba(0,0,0,0.17)] text-[#FFFFFF] font-[DIN Medium] font-medium text-[18px] md:text-xl  bg-[#3A643B] mt-8"
      
    >
      Book a consultation
    </button>

      </div>
    </div>
  )
}

export default Booking