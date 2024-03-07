import Image from "next/image";
import React from "react";

const Sell = () => {
  return (
    <div className="relative overflow-hidden lg:pt-[251px] lg:pb-[241px] py-12 sm:py-16 md:py-24">
      <div className=" w-full h-[150px] bg-[#000942]  blur-[10px] absolute bottom-[-110px] z-[1]"></div>

      <div className=" w-full h-[150px] bg-[#000942] z-[1] blur-[50px] absolute bottom-[-73px] hidden md:block left-0 right-0 pointer-events-none"></div>
      <div className="w-[250px] h-[600px] bg-gradient-to-r from-[#FC1436] to-[#FFAD00] rotate-[90deg] z-10 rounded-full blur-[150px] absolute md:right-[15%] right-[50%] bottom-0"></div>
      <Image
        className="absolute left-0 top-0 md:w-[185px] md:h-20"
        width={100}
        height={40}
        src="/assets/images/sell/right-arrow.webp"
        alt="right-arrow"
      />
      <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto relative z-50">
        <div className=" flex flex-col-reverse lg:flex-row flex-wrap items-center">
          <div className=" lg:w-6/12 flex flex-col relative z-40 mt-9 lg:mt-0">
            <h3 className="text-cyanBlack font-Nunito font-black xl:text-5xl sm:text-[45px] text-3xl   md:text-start text-center leading-[110%]">
              When someone tries to ruin the pump and sell Infinicrease the{" "}
              <span className="linear_color2">Equilizer is activated</span>
            </h3>
            <p className="text-white opacity-80 z-10 font-Montserrat font-normal text-base pt-4 md:max-w-[500px] md:text-start text-center">
              The Equaliser is what protects the INF token from dropping in
              value and keeps the Infinians on edge!
            </p>
          </div>
          <div className=" lg:w-6/12 flex justify-center relative">
            <div className=" max-w-[351px] sm:max-w-[400px] lg:max-w-[100%]">
              <button className="sell-button absolute z-50 md:top-[23%] md:left-[5%] min-[576px]:top-[24%] top-[25%] min-[576px]:left-[4%] left-[7%] rounded-xl leading-[100%] lg:py-[25px] lg:px-[50px] py-4 hover:bg-black duration-300 px-8 border-2 border-opacity-50 border-white font-Orbitron font-medium text-white xl:text-4xl lg:text-3xl sm:text-2xl text-xl">
                SELL
              </button>
              <Image
                className="z-10"
                width={685}
                height={553}
                src="/assets/images/sell/technology.webp"
                alt="technology"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
