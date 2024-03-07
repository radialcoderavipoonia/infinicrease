import React from "react";
import NavBar from "./navBar/NavBar";
import CustomButton from "./common/CustomButton";
import Image from "next/image";
import {
  EqualVector,
  Equalizerbot,
  GenieIcon,
  PlusVector,
  WhaleWallet,
} from "./common/Icons";

const Hero = () => {
  return (
    <>
      <div className=" bg-hero bg-cover bg-no-repeat  relative">
        <div className=" w-full h-[150px] bg-[#000942]  blur-[30px] absolute bottom-[-110px] z-[1]"></div>
        <NavBar />
        <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 mt-[109px] pb-14 md:pb-20 lg:pb-[180px]">
          <div className=" flex flex-col-reverse lg:flex-row flex-wrap relative items-center  ">
            <div className=" lg:w-7/12 relative z-50 pt-[80px] md:pt-[165px] sm:pt-[70px] lg:pt-0 text-center lg:text-start">
              <h1 className="uppercase text-white font-black font-Nunito text-[48px] sm:text-5xl md:text-6xl lg:text-7xl leading-[122%]">
                Infinicrease
              </h1>
              <p className=" font-Montserrat text-base sm:text-lg text-white opacity-80 mt-4">
                Infinicrease is a community project on the Binance Smart Chain.
              </p>
              <p className=" font-Montserrat text-base sm:text-lg text-white opacity-80 mt-[10px] w-full max-w-[375px] md:max-w-[597px] mx-auto lg:mx-0">
                The native INF token is designed to increase in price infinitely
                regardless of market conditions while incentivising holders with
                complex tools embedded into the smart contract.{" "}
              </p>
              <div className=" mt-7">
                <CustomButton type="buy" content="Buy INF" />
              </div>
              <div className=" mt-8 flex flex-wrap sm:gap-3 xl:gap-0 items-center xl:flex-nowrap relative justify-center lg:justify-start">
                <div className=" sm:w-5/12 lg:w-4/12 Equalizerbot relative w-full rounded-lg xl:w-[188px] h-[149px] flex justify-center items-center flex-col ">
                  <Equalizerbot />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Equalizer bot
                  </p>
                  <div className=" absolute right-[9px] z-20 hidden xl:block">
                    <PlusVector />
                  </div>
                </div>
                <div className=" sm:w-5/12 lg:w-4/12 Equalizerbot my-5 sm:my-0 relative z-[5] w-full rounded-lg xl :w-[188px] h-[149px] flex justify-center items-center flex-col xl:translate-x-[-24px]">
                  <WhaleWallet />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Whale wallet
                  </p>
                  <div className=" absolute right-[14px] z-50 hidden xl:block">
                    <PlusVector />
                  </div>
                </div>

                <div className=" sm:w-5/12 lg:w-4/12 Genie relative z-10 w-full rounded-lg xl:w-[188px] h-[149px] flex justify-center items-center flex-col xl:translate-x-[-60px]">
                  <GenieIcon />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Genie
                  </p>
                  <div className=" absolute right-[-14px] z-30 hidden xl:block">
                    <EqualVector />
                  </div>
                </div>
                <div className="sm:w-5/12 lg:w-4/12">
                  <Image
                    loading="lazy"
                    width={160}
                    height={106}
                    src="/assets/images/hero/infinicrease_hero_logo.svg"
                    alt="infinicrease_hero_logo"
                    className=" md:ms-3  xl:translate-x-[-65px]  w-full mt-5 sm:mt-0"
                  />
                </div>
              </div>
            </div>
            <div className=" lg:w-3/12 xl:w-5/12">
              <Image
                loading="lazy"
                width={347}
                height={347}
                src="/assets/images/hero/hand_logo.webp"
                alt="page_logo"
                className="relative w-[56%] md:w-[60%] lg:w-[100%] xl:w-[70%] mx-auto  md:ms-[60px]  z-20 hand-ball "
              />

              <Image
                loading="lazy"
                width={643}
                height={252}
                src="/assets/images/hero/hand.png"
                alt="page_logo"
                className="hand_ball absolute w-full sm:w-[80%] md:w-[74%] bottom-[69%] sm:bottom-[72%] md:bottom-[63%] right-0 sm:right-[6%] md:right-[8%] lg:right-[0%] lg:bottom-[90px] lg:w-[51%] xl:right-[-12%] xl:bottom-[-80px] hand xl:w-[60%] z-[5]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
