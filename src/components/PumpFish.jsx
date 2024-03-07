import Image from "next/image";
import React from "react";
import CustomButton from "./common/CustomButton";

const PumpFish = () => {
  return (
    <div className=" bg-byPump bg-no-repeat bg-cover bg-center">
      <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto lg:pt-36 lg:pb-[106px] py-12 sm:py-16 md:py-24">
        <div className="flex items-center flex-wrap">
          <div className=" lg:w-6/12 sm:w-7/12 w-10/12 lg:mx-0 mx-auto">
            <Image
              src="/assets/images/buyPump/pump_fish.webp"
              width={618}
              height={576}
              alt="pump fish"
              className=" xl:scale-125 lg:scale-105 xl:translate-x-[-2%] sm:max-w-[100%] max-w-[321px] sm:mx-0 mx-auto"
            />
          </div>
          <div className=" lg:w-6/12 w-full xl:ps-[75px] lg:ps-10 lg:text-start text-center ">
            <p className=" font-Nunito font-black text-cyanBlack  leading-[110%] mb-4 xl:text-5xl sm:text-[45px] text-3xl">
              <span className=" block">The More You Buy,</span> The More it{" "}
              <span className=" linear_color">Pumps!</span>
            </p>
            <p className=" font-Montserrat font-normal md:text-base text-sm text-pastelGray mb-5">
              Every buy and sell has a 8% tax applied onto it. The deducted tax
              is sent to the equaliser wallet which periodically buys back INF
              to make sure it infinitely increases in price!
            </p>
            <div className=" shadow-[-6px_6px_20px_0px_#00000026] pt-4 px-[17px] pb-5 rounded-[20px] bg-blueZodiac flex flex-col lg:items-start items-center">
              <p className=" font-Montserrat font-normal md:text-base text-sm text-talishlavender mb-4">
                0x4495c3857f49138d397 6e7793eb04811da9f71ee
              </p>
              <div className="flex items-center gap-4 mb-5">
                <Image
                  src="/assets/images/buyPump/wallet.png"
                  width={44}
                  height={32}
                  alt="wallet"
                />{" "}
                <p className=" font-Montserrat font-normal md:text-base text-sm text-talishlavender">
                  5 Infinicrease
                </p>
              </div>
              <CustomButton content="Whale wallet Explorer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpFish;
