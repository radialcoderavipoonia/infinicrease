import Image from "next/image";
import React from "react";

const Sell = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-[250px] h-[600px] bg-gradient-to-r from-[#FC1436] to-[#FFAD00] rotate-[90deg] z-10 rounded-full blur-[150px] absolute md:right-[15%] right-[50%] bottom-0"></div>
      <Image
        className="absolute left-0 top-0 translate-y-[-50%]"
        width={1440}
        height={200}
        src="/assets/images/stabilies/shadow.png"
        alt="shadow"
      />
      <Image
        className="absolute left-0 top-0 md:w-[185px] md:h-20 xl:block hidden"
        width={100}
        height={40}
        src="/assets/images/sell/right-arrow.webp"
        alt="right-arrow"
      />
      <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto sm:pt-[58px] lg:pb-[214px] md:pb-24 sm:pb-16 py-12 overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center  md:gap-4 gap-10">
          <div className="flex flex-col z-10">
            <h3 className="text-cyanBlack font-Nunito font-black text-5xl md:text-start text-center leading-[110%]">
              When someone tries to ruin the pump and sell Infinicrease the{" "}
              <span className="linear_color2">Equilizer is activated</span>
            </h3>
            <p className="text-white opacity-80 z-10 font-Montserrat font-normal text-base pt-4 md:max-w-[500px] md:text-start text-center">
              The Equaliser is what protects the INF token from dropping in
              value and keeps the Infinians on edge!
            </p>
          </div>
          <div className="flex justify-center relative">
            <button className="sell-button absolute z-10 md:top-[23%] md:left-[9%] min-[576px]:top-[33%] top-[25%] min-[576px]:left-[14%] left-[11%] rounded-xl leading-[100%] lg:py-[25px] lg:px-[50px] py-4 hover:bg-black duration-300 px-8 border-2 border-opacity-50 border-white font-Orbitron font-medium text-white xl:text-4xl lg:text-3xl sm:text-2xl text-xl">
              SELL
            </button>
            <Image
              className="z-10 pointer-events-none"
              width={685}
              height={553}
              src="/assets/images/sell/technology.webp"
              alt="technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
