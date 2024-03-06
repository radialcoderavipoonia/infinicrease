import Image from "next/image";
import React from "react";

const Stabilies = () => {
  return (
    <div className="bg-stabilies bg-cover">
      <div className="container xl:max-w-[1380px] px-3 mx-auto pt-[42px] pb-[115px]">
        <div className="flex justify-center items-center flex-row flex-wrap">
          <div className="md:w-6/12 w-full">
            <Image
              width={713}
              height={533}
              src="/assets/images/stabilies/stabilies.webp"
              alt="stabilies"
            />
          </div>
          <div className="md:w-6/12 w-full md:mt-0 mt-10">
            <h3 className="text-cyanBlack font-Nunito font-black text-5xl md:text-start text-center md:max-w-[534px] leading-[120%]">
              Stabilise & continue
              <span className="linear_color2"> the pump</span>
            </h3>
            <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-4 md:max-w-[466px] md:text-start text-center">
              When the sell pressure becomes significant the{" "}
              <span className="linear_color">equalizer</span> is a bot that has
              access to the whale wallet and uses it to buy Infinicrease which
              causes the price to stabilise and continue the pump.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stabilies;
