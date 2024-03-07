import Image from "next/image";
import React from "react";

const Genie = () => {
  return (
    <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto sm:pt-[58px] lg:pb-[127px] md:pb-24 sm:pb-16 py-12 relative">
      <div className="w-[250px] h-[600px] bg-gradient-to-r from-[#FC1436] to-[#FFAD00] rotate-[90deg] z-10 rounded-full blur-[150px] absolute left-[-10%] sm:bottom-0 top-0"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4">
        <div className="flex justify-center">
          <Image
            width={346}
            height={418}
            src="/assets/images/genie/genie.webp"
            alt="genie"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-cyanBlack font-Nunito font-black xl:text-5xl sm:text-[45px] text-3xl lg:text-start text-center leading-[57px]">
            The <span className="linear_color2">Genie</span>
          </h3>
          <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-4 lg:max-w-[535px] lg:text-start text-center">
            The Genie is a wallet that collects fees and at random times is
            awakened!. When the genie is awakened the first user to go to the
            site claims all the funds in the Genie Wallet. It&#39;s on a first
            come first serve basis! Only users who meet the minimum requirements
            of 8888 $INF are allowed to use the genie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Genie;
