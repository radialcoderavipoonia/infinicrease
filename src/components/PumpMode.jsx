import React from "react";

const PumpMode = () => {
  return (
    <div className="bg-pumpMode bg-cover">
      <div className="pt-[190px] pb-[210px]">
        <h3 className="linear_color2 font-Nunito font-black text-5xl text-center">
          PUMP MODE
        </h3>
        <p className="text-white opacity-80 font-Montserrat font-normal text-base pt-2.5 sm:max-w-[555px] text-center mx-auto">
          In the rare case the coin has negative price action for a wile the
          equalizer enters PUMP mode. In PUMP mode 44% of the funds in the whale
          wallet are used to buy back into the coin
        </p>
      </div>
    </div>
  );
};

export default PumpMode;
