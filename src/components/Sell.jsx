import Image from "next/image";
import React from "react";

const Sell = () => {
  return (
    <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto pt-[58px] pb-[127px]">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-4 gap-10">
        <div className="flex flex-col">
          <h3 className="text-cyanBlack font-Nunito font-black text-5xl md:text-start text-center leading-[110%]">
            When someone tries to ruin the pump and sell Infinicrease the{" "}
            <span className="linear_color2">Equilizer is activated</span>
          </h3>
          <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-4 md:max-w-[500px] md:text-start text-center">
            The Equaliser is what protects the INF token from dropping in value
            and keeps the Infinians on edge!
          </p>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute">
            <button className="bg-white bg-opacity-50 rounded-xl leading-[100%] py-[25px] px-[50px] border-2 border-white font-Orbitron font-medium text-white text-4xl">
              SELL
            </button>
          </div>
          <Image
            width={685}
            height={553}
            src="/assets/images/sell/technology.webp"
            alt="technology"
          />
        </div>
      </div>
    </div>
  );
};

export default Sell;
