import Image from "next/image";
import React from "react";

const Sell = () => {
  return (
    <div className="relative">
      <Image
        className="absolute left-0 top-0 md:w-[185px]"
        width={185}
        height={80}
        src="/assets/images/sell/right-arrow.webp"
        alt="right-arrow"
      />
      <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto pt-[58px] pb-[127px]">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-4 gap-10">
          <div className="flex flex-col">
            <h3 className="text-cyanBlack font-Nunito font-black text-5xl md:text-start text-center leading-[110%]">
              When someone tries to ruin the pump and sell Infinicrease the{" "}
              <span className="linear_color2">Equilizer is activated</span>
            </h3>
            <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-4 md:max-w-[500px] md:text-start text-center">
              The Equaliser is what protects the INF token from dropping in
              value and keeps the Infinians on edge!
            </p>
          </div>
          <div className="flex justify-center relative">
            <button className="sell-button absolute md:top-[23%] md:left-[9%] min-[576px]:top-[33%] top-[25%] min-[576px]:left-[14%] left-[11%] rounded-xl leading-[100%] lg:py-[25px] lg:px-[50px] py-4 px-8 border-2 border-opacity-50 border-white font-Orbitron font-medium text-white xl:text-4xl lg:text-3xl sm:text-2xl text-xl">
              SELL
            </button>
            <Image
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
