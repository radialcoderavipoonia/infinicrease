import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <div className="bg-roadmap bg-cover lg:pb-8 relative" id="roadmap">
      <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto relative z-20 py-12 sm:py-16 md:py-24 lg:py-0">
        <h2 className="text-center sm:pt-16 pt-4 linear_color font-Nunito leading-[110%] font-black xl:text-5xl sm:text-[45px] text-3xl sm:pb-2">
          Roadmap
        </h2>
        <div className="lg:pt-52 lg:mt-2 lg:pb-64 py-12 sm:pb-12 md:pb-12 ">
          <div className="flex justify-center relative">
            <Image
              height={478}
              width={907}
              className="lg:block hidden"
              src="/assets/images/roadmap/roadmap_curve_line.webp"
              alt="rodmap curve line"
            />
            <Image
              height={171}
              width={119}
              className="absolute xl:top-[-33%] xl:left-[6%] md:w-[119px] lg:top-[-32%] lg:left-0 top-[-1%] md:left-[4.3%] left-[6.4%] md:h-[171px] sm:w-[99px] sm:h-[141px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_one.webp"
              alt="roadmap number one"
            />
            <Image
              height={170}
              width={119}
              className="absolute xl:top-[-22%] xl:left-[50%] lg:left-[50%] lg:top-[-22%] md:top-[30%] md:left-[4.3%] top-[28%] left-[6.4%] md:w-[119px] md:h-[171px] sm:w-[99px] sm:h-[141px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_two.webp"
              alt="roadmap number two"
            />
            <Image
              height={194}
              width={119}
              className="absolute xl:top-[45%] xl:left-[39%] lg:top-[46%] lg:left-[39%] md:top-[58%] md:left-[4.3%] top-[%] left-[6.4%] md:w-[119px] md:h-[194px] sm:w-[99px] sm:h-[161px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_three.webp"
              alt="roadmap number three"
            />
            <Image
              height={214}
              width={154}
              className="absolute xl:top-[57%] xl:left-[83%] lg:top-[57%] lg:left-[88%] md:top-[83%] md:left-[4.3%] top-[85%] left-[6.4%] xl:w-[154px] xl:h-[214px] lg:h-[214px] lg:w-[154px] md:w-[119px] md:h-[174px] sm:w-[99px] sm:h-[141px] sm:block hidden"
              src="/assets/images/roadmap/roadmap_number_four.webp"
              alt="roadmap number four"
            />
            <div className="flex justify-between items-start w-full lg:w-[unset]">
              <div className="h-[105%] ms-20 w-[8px] bg-red-500 lg:hidden sm:block hidden"></div>
              <div className="lg:w-full sm:w-3/5 w-full max-w-[310px] mx-auto">
                <div className="max-w-[306px] lg:absolute left-[1%] top-[10%]">
                  <h3 className="linear_color font-Nunito font-extrabold md:text-2xl text-[24px]">
                    Phase 1: Launch
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      1000 Community Members.
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Website Launch
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      1000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Coingecko and CoinMarketCap Listing
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      2500 Telegram Community Members
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      2500 Holders
                    </li>
                  </ul>
                </div>
                <div className="max-w-[306px] lg:absolute xl:left-[60%] left-[62%] top-[8%] lg:pt-0 pt-10">
                  <h3 className="linear_color font-Nunito font-extrabold md:text-2xl text-[24px]">
                    Phase 2: Growth
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      5,000 Telegram Members.
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Website Redesign
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      1000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      TikTok Marketing Campaign
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Ambassador Marketing Campaign
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Influencer Marketing Campaign
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Tesla Giveaway
                    </li>
                  </ul>
                </div>
                <div className="max-w-[306px] lg:absolute left-[32%] top-[95%] lg:pt-0 pt-10">
                  <h3 className="linear_color font-Nunito font-extrabold md:text-2xl text-[24px]">
                    Phase 3: Expansion
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      CEX Listing
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      25,000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Billboard on Times Saquare
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Expansion to Other Chains
                    </li>
                  </ul>
                </div>
                <div className="max-w-[306px] lg:absolute right-[4%] top-[102%] lg:pt-0 pt-10">
                  <h3 className="linear_color font-Nunito font-extrabold md:text-2xl text-[24px]">
                    Phase 4: Consolidation
                  </h3>
                  <ul className="list-disc ms-4">
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      50,000 Holders
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
                      Tier 1 CEX Listing
                    </li>
                    <li className="text-white font-Montserrat font-normal md:text-base text-sm opacity-80">
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
        className="w-full h-[200px] absolute left-0 bottom-0 pointer-events-none"
        src="/assets/images/background/footer_gradient.webp"
        alt="footer gardient bg"
      />
      <Image
        height={512}
        width={1046}
        className="absolute right-[-33%] top-[17%] z-30 lg:block hidden pointer-events-none"
        src="/assets/images/roadmap/right_shadow.webp"
        alt="roadmap right gradient"
      />

      <div className="w-full bg-[#000942] h-full absolute left-0 top-[-50px] pointer-events-none"></div>
    </div>
  );
};

export default Roadmap;
