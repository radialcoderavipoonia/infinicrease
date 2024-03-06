import React from "react";
import NavBar from "./navBar/NavBar";
import CustomButton from "./common/CustomButton";
import Image from "next/image";
import {
  Equalizerbot,
  GenieIcon,
  PlusVector,
  WhaleWallet,
} from "./common/Icons";

const Hero = () => {
  return (
    <>
      <div className=" bg-hero bg-cover bg-no-repeat overflow-hidden">
        {/* <NavBar /> */}
        <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 mt-[109px] pb-[102px]">
          <div className=" flex flex-col-reverse lg:flex-row flex-wrap relative items-center">
            <div className=" lg:w-7/12 relative z-50 pt-[70px] sm:pt-[100px] lg:pt-[150px]">
              <h1 className="text-white font-black font-Nunito text-5xl md:text-6xl lg:text-7xl leading-[122%]">
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
              <div className=" mt-8 flex flex-wrap sm:flex-nowrap relative">
                <div className="Equalizerbot relative w-full rounded-lg sm:w-[188px] h-[149px] flex justify-center items-center flex-col ">
                  <Equalizerbot />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Equalizer bot
                  </p>
                  <div className=" absolute">
                    <PlusVector />
                  </div>
                </div>
                <div className="Equalizerbot w-full rounded-lg sm:w-[188px] h-[149px] flex justify-center items-center flex-col sm:translate-x-[-28px]">
                  <WhaleWallet />
                  <p className=" font-NoFlickingThanks text-base font-normal text-cyanBlack mt-2">
                    Whale wallet
                  </p>
                </div>

                <div className="Genie w-full rounded-lg sm:w-[188px] h-[149px] flex justify-center items-center flex-col sm:translate-x-[-60px]">
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
                  className=" md:ms-3 sm:translate-x-[-65px] mx-auto w-full max-w-[375px] sm:max-w-[160px]"
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
                className="relative w-[70%] lg:w-[100%] xl:w-[70%] mx-auto  md:ms-[60px]  z-20 hand-ball "
              />

              <Image
                loading="lazy"
                width={643}
                height={252}
                src="/assets/images/hero/hand.png"
                alt="page_logo"
                className="hand_ball absolute w-full sm:w-[80%] md:w-[74%] bottom-[69%] sm:bottom-[72%] md:bottom-[56%] right-0 sm:right-[6%] md:right-[8%] lg:right-[-4%] lg:bottom-0 lg:w-[51%] xl:right-[-12%] xl:bottom-[-80px] hand xl:w-[60%] z-[1]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
