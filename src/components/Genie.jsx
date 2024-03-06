import Image from "next/image";
import React from "react";

const Genie = () => {
  return (
    <div className="bg-blue">
      <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="flex justify-center">
            <Image
              width={346}
              height={418}
              src="/assets/images/genie/genie.png"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-cyanBlack font-Nunito font-black text-5xl sm:text-start text-center">
              The <span>Genie</span>
            </h3>
            <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-4 sm:max-w-[535px] sm:text-start text-center">
              The Genie is a wallet that collects fees and at random times is
              awakened!. When the genie is awakened the first user to go to the
              site claims all the funds in the Genie Wallet. It's on a first
              come first serve basis! Only users who meet the minimum
              requirements of 8888 $INF are allowed to use the genie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genie;
