import React from "react";
import NavBar from "./navBar/NavBar";
import CustomButton from "./common/CustomButton";
import Image from "next/image";
import { Equalizerbot, GenieIcon, WhaleWallet } from "./common/Icons";

const Hero = () => {
  return (
    <>
      <div className=" bg-hero bg-cover bg-no-repeat ">
        <NavBar />
        <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 mt-[109px] pb-[102px]">
          <div className=" flex flex-col-reverse flex-wrap relative items-center">
            <div className=" lg:w-7/12 relative z-50">
              <h1 className="text-white  font-black font-Nunito text-7xl leading-[122%]">
                Infinicrease
              </h1>
              <p className=" font-Montserrat text-base sm:text-lg text-white opacity-80 mt-4">
                Infinicrease is a community project on the Binance Smart Chain.
              </p>
              <p className=" font-Montserrat text-base sm:text-lg text-white opacity-80 mt-[10px] w-full max-w-[375px] md:max-w-[597px]">
                The native INF token is designed to increase in price infinitely
                regardless of market conditions while incentivising holders with
                complex tools embedded into the smart contract.{" "}
              </p>
              <div className=" mt-7">
                <CustomButton type="buy" content="Buy INF" />
              </div>
              <div className=" mt-8 md:flex">
                <div className="Equalizerbot rounded-lg w-[188px] h-[149px] flex justify-center items-center flex-col ">
                  <Equalizerbot />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Equalizer bot
                  </p>
                </div>
                <div className="Equalizerbot rounded-lg w-[188px] h-[149px] flex justify-center items-center flex-col sm:translate-x-[-41px]">
                  <WhaleWallet />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Whale wallet
                  </p>
                </div>
                <div className="Genie rounded-lg w-[188px] h-[149px] flex justify-center items-center flex-col sm:translate-x-[-75px]">
                  <GenieIcon />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Genie
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={160}
                  height={106}
                  src="/assets/images/hero/infinicrease_hero_logo.svg"
                  alt="infinicrease_hero_logo"
                  className=" ms-3 sm:translate-x-[-75px]"
                />
              </div>
            </div>
            <div className=" lg:w-3/12 xl:w-5/12">
              <Image
                loading="lazy"
                width={347}
                height={347}
                src="/assets/images/hero/hand_logo.webp"
                alt="page_logo"
                className="relative  md:ms-[60px]  z-20 hand-ball "
              />

              <Image
                loading="lazy"
                width={643}
                height={252}
                src="/assets/images/hero/hand.png"
                alt="page_logo"
                className=" absolute w-[80%] md:w-[74%] bottom-[44%] lg:right-0 lg:bottom-0 lg:w-[51%] xl:right-[-12%] xl:bottom-[-80px] hand xl:w-[60%] z-[1]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
