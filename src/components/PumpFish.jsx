import Image from "next/image";
import React from "react";
import CustomButton from "./common/CustomButton";

const PumpFish = () => {
  return (
    <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto pt-36 pb-[106px]">
      <div className="flex items-center flex-wrap">
        <div className=" w-6/12">
          <Image
            src="/assets/images/buyPump/pump_fish.png"
            width={618}
            height={576}
            alt="pump fish"
          />
        </div>
        <CustomButton content="sdfgv" />
      </div>
    </div>
  );
};

export default PumpFish;
