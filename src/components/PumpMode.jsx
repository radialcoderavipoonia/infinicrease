import Image from "next/image";
import React from "react";

const PumpMode = () => {
  return (
    <div className="bg-pumpMode bg-cover relative">
      <Image
        className="absolute left-0 bottom-0 translate-y-[50%]"
        width={1440}
        height={200}
        src="/assets/images/stabilies/shadow.png"
        alt="shadow"
      />
      <div className="xl:pt-[190px] lg:py-28 py-20 xl:pb-[210px]">
        <h3 className="linear_color2 font-Nunito font-black xl:text-5xl sm:text-[45px] text-3xl text-center leading-[57px]">
          PUMP MODE
        </h3>
        <p className="text-white opacity-80 font-Montserrat font-normal md:text-base text-sm pt-2.5 sm:max-w-[555px] text-center mx-auto">
          In the rare case the coin has negative price action for a wile the
          equalizer enters PUMP mode. In PUMP mode 44% of the funds in the whale
          wallet are used to buy back into the coin&#34;
        </p>
      </div>
    </div>
  );
};

export default PumpMode;
