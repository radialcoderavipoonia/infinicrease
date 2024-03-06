import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <div className="bg-roadmap bg-cover pb-8 relative">
      <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto relative z-20">
        <h2 className="text-center pt-16 linear_color font-Nunito font-black text-5xl pb-2">
          Roadmap
        </h2>
        <div className="lg:pt-52 lg:mt-2 lg:pb-64 md:py-40 sm:py-28 py-12 ">
          <div className="flex justify-center relative">
            <Image
              height={478}
              width={907}
              className="lg:block hidden"
              src="/assets/images/roadmap/roadmap_curve_line.png"
            />
            <Image
              height={171}
              width={119}
              className="absolute xl:top-[-33%] xl:left-[6%] md:w-[119px] lg:top-[-32%] lg:left-0 md:top-[-15%] md:left-[4.3%] left-[6.4%] top-[-14%] md:h-[171px] sm:w-[99px] sm:h-[141px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_one.png"
            />
            <Image
              height={170}
              width={119}
              className="absolute xl:top-[-22%] xl:left-[50%] lg:left-[50%] lg:top-[-22%] md:top-[16%] md:left-[4.3%] top-[20%] left-[6.4%] md:w-[119px] md:h-[171px] sm:w-[99px] sm:h-[141px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_two.png"
            />
            <Image
              height={194}
              width={119}
              className="absolute xl:top-[45%] xl:left-[39%] lg:top-[46%] lg:left-[39%] md:top-[42%] md:left-[4.3%] top-[47%] left-[6.4%] md:w-[119px] md:h-[194px] sm:w-[99px] sm:h-[161px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_three.png"
            />
            <Image
              height={214}
              width={154}
              className="absolute xl:top-[57%] xl:left-[83%] lg:top-[57%] lg:left-[88%] md:top-[68%] md:left-[4.3%] top-[70%] left-[6.4%] xl:w-[154px] xl:h-[214px] lg:h-[214px] lg:w-[154px] md:w-[119px] md:h-[174px] sm:w-[99px] sm:h-[141px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_four.png"
            />
            <div className="flex justify-between items-start w-full lg:w-[unset]">
              <div className="h-[83%] md:mt-8 mt-4 ms-20 w-[8px] bg-red-500 lg:hidden sm:block hidden"></div>
              <div className="lg:w-full sm:w-3/5 w-full max-w-[310px] mx-auto">
                <div className="max-w-[306px] lg:absolute left-[1%] top-[10%]">
                  <h3 className="linear_color font-Nunito font-extrabold text-2xl">
                    Phase 1: Launch
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      1000 Community Members.
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Website Launch
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      1000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Coingecko and CoinMarketCap Listing
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      2500 Telegram Community Members
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      2500 Holders
                    </li>
                  </ul>
                </div>
                <div className="max-w-[306px] lg:absolute xl:left-[60%] left-[62%] top-[8%] lg:pt-0 pt-10">
                  <h3 className="linear_color font-Nunito font-extrabold text-2xl">
                    Phase 2: Growth
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      5,000 Telegram Members.
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Website Redesign
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      1000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      TikTok Marketing Campaign
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Ambassador Marketing Campaign
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Influencer Marketing Campaign
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Tesla Giveaway
                    </li>
                  </ul>
                </div>
                <div className="max-w-[306px] lg:absolute left-[32%] top-[95%] lg:pt-0 pt-10">
                  <h3 className="linear_color font-Nunito font-extrabold text-2xl">
                    Phase 3: Expansion
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      CEX Listing
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      25,000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Billboard on Times Saquare
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Expansion to Other Chains
                    </li>
                  </ul>
                </div>
                <div className="max-w-[306px] lg:absolute right-[4%] top-[102%] lg:pt-0 pt-10">
                  <h3 className="linear_color font-Nunito font-extrabold text-2xl">
                    Phase 4: Consolidation
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      50,000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Tier 1 CEX Listing
                    </li>
                    <li className="text-white font-Montserrat font-normal text-base opacity-80">
                      Lamborghini Giveaways and much more...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        height={200}
        width={1440}
        className="w-full h-[200px] absolute left-0 bottom-0"
        src="/assets/images/background/footer_gradient.png"
      />
    </div>
  );
};

export default Roadmap;
