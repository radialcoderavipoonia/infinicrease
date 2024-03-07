import React from "react";
import { getInf } from "./common/Helper";
import Image from "next/image";
import { GetArrow } from "./common/Icons";

const GetInf = () => {
  return (
    <div className=" lg:pt-14 lg:pb-36 py-12 sm:py-16 md:py-24 container xl:max-w-[1140px] xl:px-0 px-3 mx-auto">
      <p className=" font-Nunito font-black text-cyanBlack  leading-[110%] xl:text-5xl sm:text-[45px] text-3xl text-center mb-16">
        <span className=" linear_color">How to get</span> INF
      </p>
      <div className=" flex flex-wrap relative gap-y-6 justify-center">
        <span className=" absolute z-20 top-[33%] start-[21.3%] lg:block hidden">
          <GetArrow />
        </span>
        <span className=" absolute z-20 top-[33%] start-[46.3%] lg:block hidden">
          <GetArrow />
        </span>
        <span className=" absolute z-20 top-[33%] start-[71.3%] lg:block hidden">
          <GetArrow />
        </span>
        {getInf.map((value, index) => {
          return (
            <div
              className=" lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 relative z-10 sm:max-w-[100%] max-w-[250px]"
              key={index}
            >
              <div className="pt-[74px] h-full pb-[53px] px-4 bg_100 bg-no-repeat bg-getCard hover:bg-getCardHover get_card hover:translate-y-[-16px] transition-all ease-in-out duration-300">
                <p className=" linear_color font-Nunito font-extrabold md:text-3xl text-2xl text-center leading-[35px] mb-[14px]">
                  {value.title}
                </p>
                <p className=" font-Montserrat font-semibold md:text-xl text-lg text-center text-cyanBlack leading-[140%]">
                  {/* Download <span>Trust</span> wallet */}
                  {value.description} <span>{value.liner}</span>{" "}
                  {value.descriptionLast}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetInf;
