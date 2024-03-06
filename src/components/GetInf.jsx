import React from "react";

const GetInf = () => {
  return (
    <div className=" pt-14 pb-36 container xl:max-w-[1140px] xl:px-0 px-3 mx-auto">
      <p className=" font-Nunito font-black text-cyanBlack  leading-[110%] xl:text-5xl sm:text-[45px] text-3xl text-center mb-16">
        <span className=" linear_color">How to get</span> INF
      </p>
      <div className=" flex flex-wrap">
        <div className=" w-3/12 px-3">
          <div className=" pt-[74px] half-a-border-on-top pb-[53px] px-5 bg_100 bg-no-repeat bg-getCard get_card hover:translate-y-[-16px] transition-all ease-in-out duration-150">
            <p className=" linear_color font-Nunito font-extrabold text-3xl text-center leading-[35px] mb-[14px]">
              Step 1
            </p>
            <p className=" font-Montserrat font-semibold text-xl text-center text-cyanBlack leading-[120%]">
              Download <span>Trust</span> wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInf;
