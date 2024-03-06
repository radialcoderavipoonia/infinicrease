import Image from "next/image";
import React from "react";

const Stabilies = () => {
  return (
    <div className="bg-stabilies">
      <div className="container xl:max-w-[1380px] px-3 mx-auto pt-[42px] pb-[115px]">
        <div className="flex justify-center items-start flex-row flex-wrap">
          <div className="w-6/12">
            <Image
              width={713}
              height={533}
              src="/assets/images/stabilies/stabilies.webp"
            />
          </div>
          <div className="w-6/12 mt-[138px]">
            <h3 className="text-cyanBlack font-Nunito font-black text-5xl sm:text-start text-center max-w-[534px] leading-[12   0%]">
              Stabilise & continue
              <span className="linear_color2"> the pump</span>
            </h3>
            <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-4 sm:max-w-[466px] sm:text-start text-center">
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
