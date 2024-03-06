import React from "react";
import NavBar from "./navBar/NavBar";
import CustomButton from "./common/CustomButton";

const Hero = () => {
  return (
    <>
      <div className=" bg-hero bg-cover bg-no-repeat">
        <NavBar />
        <div className="container xl:max-w-[1140px] mx-auto px-5 xl:px-0 mt-[109px]">
          <div className=" flex flex-wrap">
            <div className=" w-7/12">
              <h1 className="text-white  font-black font-Nunito text-7xl leading-[122%]">
                Infinicrease
              </h1>
              <p className=" font-Montserrat text-lg text-white opacity-80 mt-4">
                Infinicrease is a community project on the Binance Smart Chain.
              </p>
              <p className=" font-Montserrat text-lg text-white opacity-80 mt-[10px] max-w-[597px]">
                The native INF token is designed to increase in price infinitely
                regardless of market conditions while incentivising holders with
                complex tools embedded into the smart contract.{" "}
              </p>
              <div className=" mt-7">
                <CustomButton type="buy" content="Buy INF" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
