import Image from "next/image";
import React from "react";

const Stabilies = () => {
  return (
    <div className="bg-stabilies bg-cover relative">
      <Image
        className="absolute left-0 top-0 translate-y-[-50%]"
        width={1440}
        height={200}
        src="/assets/images/stabilies/shadow.png"
        alt="shadow"
      />
      <div className="container xl:max-w-[1380px] px-3 mx-auto pt-[42px] pb-[115px] ">
        <div className="flex justify-center items-center flex-row flex-wrap">
          <div className="md:w-6/12 w-full relative">
            <Image
              className="absolute bottom-[-23%] left-[-2%]"
              width={647}
              height={146}
              src="/assets/images/stabilies/image-shadow.png"
              alt="image-shadow
              "
            />
            <Image
              width={713}
              height={533}
              src="/assets/images/stabilies/stabilies.webp"
              alt="stabiliesgit
              "
            />
          </div>
          <div className="md:w-6/12 w-full md:mt-0 mt-24">
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
