import React from "react";
import { HalfBorder, Token } from "./common/Icons";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <div className=" relative">
      <div className="w-[800px] h-[400px] bg-[#5D2F2E] rounded-full blur-[150px] absolute end-[-20%] top-[-20%] pointer-events-none"></div>
      <Image
        src="/assets/images/tokenomics/side_icon.png"
        width={161}
        height={94}
        alt="side icon"
        className="max-w-[161px] absolute end-0 bottom-[10%] sm:block hidden"
      />
      <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto pb-[103px]">
        <p className=" font-Nunito font-black linear_color leading-[110%] xl:text-5xl sm:text-[45px] text-3xl text-center mb-10 lg:pb-10 relative z-10">
          Tokenomics
        </p>
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="xl:w-6/12 lg:w-7/12 md:w-9/12 w-full">
            <div className="border border-gainsBoro rounded-full py-[135px] px-[120px] bg-tokenShadow bg-no-repeat bg-center relative xl:scale-100 ms:scale-90 scale-75 max-[555px]:hidden">
              <div className=" rounded-full bg-deepCove pt-[53px] px-[62px] pb-[72px] flex flex-col items-center justify-center relative">
                <span className=" mb-3">
                  <Token />
                </span>
                <p className=" font-NoFlickingThanks font-normal md:text-2xl text-[24px] text-white mb-[2px]">
                  888 Million
                </p>
                <p className=" font-plusSans text-greyGoose font-normal text-lg">
                  $INF Supply
                </p>
              </div>
              {/* icons */}
              {/* Initial Genie wallet liquidity */}
              <div className=" max-w-[123px] absolute top-[10%] start-0 z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    1%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Initial Genie wallet liquidity
                </p>
              </div>
              {/* Initial DEX liquidity */}
              <div className=" max-w-[123px] absolute top-[14%] end-[-2%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    10%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Initial DEX liquidity
                </p>
              </div>
              {/* Marketing */}
              <div className=" max-w-[123px] absolute top-[-3%] start-[24%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    4%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Marketing
                </p>
              </div>
              {/* Staking Rewards (future) */}
              <div className=" max-w-[123px] absolute top-[-3%] end-[18%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    10%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center text-nowrap">
                  Staking Rewards <span className=" block">(future)</span>
                </p>
              </div>
              {/* IDO */}
              <div className=" max-w-[123px] absolute top-[-7%] start-[45%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    15%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  IDO
                </p>
              </div>
              {/* Initial Whale Wallet liquidity */}
              <div className=" max-w-[123px] absolute top-[38%] start-[-11%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    5%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Initial Whale Wallet liquidity
                </p>
              </div>
              {/* Treasury */}
              <div className=" max-w-[123px] absolute top-[40%] end-[-5%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    20%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Treasury
                </p>
              </div>
              {/* Development */}
              <div className=" max-w-[123px] absolute bottom-[21%] end-[-3%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    5%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Development
                </p>
              </div>
              {/* Advisors */}
              <div className=" max-w-[123px] absolute bottom-[21%] start-[-3%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    5%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Advisors
                </p>
              </div>
              {/* Team */}
              <div className=" max-w-[123px] absolute bottom-[1%] start-[15%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    10%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Team
                </p>
              </div>
              {/* Grants */}
              <div className=" max-w-[123px] absolute bottom-[-2%] end-[15%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    5%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Grants
                </p>
              </div>
              {/* Airdrop */}
              <div className=" max-w-[123px] absolute bottom-[-10%] end-[45%] z-10 flex flex-col items-center justify-center">
                <div className=" min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] bg_100 bg-tokenIcon bg-no-repeat bg-center flex items-center justify-center mb-1">
                  <p className=" font-Nunito font-bold text-lg text-white ">
                    5%
                  </p>
                </div>
                <p className=" text-white font-Nunito font-semibold md:text-base text-sm text-center">
                  Airdrop
                </p>
              </div>
            </div>
            <Image
              src="/assets/images/tokenomics/token_total.svg"
              alt="token total"
              width={555}
              height={555}
              className=" w-full hidden max-[555px]:block relative z-10"
            />
          </div>
          <div className=" lg:w-5/12 w-full">
            <p className="text-cyanBlack font-NoFlickingThanks font-normal text-xl mb-[6px]">
              Overview
            </p>
            <p className=" font-Montserrat font-normal md:text-base text-sm text-purpleBlue mb-3 lg:pe-3">
              Infinicrease is a coin that has a bot function where when users
              buy 6% is deducted from buys sells and transfers and stored in a
              whale wallet. When sell pressure occurs the equalizer is a bot
              that uses the whale wallet to buy back into the coin to stabilize
              the price. Users who have a select amount of coins are able to get
              access to the genie, the genie gives the first person who accesses
              it all the coins in the wallet at the time. (5% goes to whale
              wallet 1% goes to genie)
            </p>
            <p className="text-cyanBlack font-NoFlickingThanks font-normal text-xl mb-[6px] lg:pe-3">
              Technicals
            </p>
            <p className=" font-Montserrat font-normal md:text-base text-sm text-purpleBlue">
              The whale wallet will be a smart contract wallet, and the
              equalizer will be a bot run on a custom-built infura-like service
              for Aptos into Binance Smart Chain. INF will be listed on all the
              major decentralised exchanges on Binance Smart Chain. The bot will
              be tracking prices across those decentralised exchanges and when a
              sell order happens the bot buys the coin equivalent to $88. Also
              when triggered by the developers (us) the equalizer enters PUMP
              mode which means 44% of the wallet holdings are bought back into
              the coin.
            </p>
          </div>
        </div>
        {/* tax */}
        <div className=" min-w-[172px] min-h-[172px] max-w-[172px] max-h-[172px] bg-tax bg_100 bg-no-repeat bg-center flex items-center justify-center mt-[100px] relative">
          <span className=" absolute end-[-15%]">
            <HalfBorder />
          </span>
          <div className=" tax_icon top-[-33%] start-[32%]">
            <div className=" bg-taxCircle bg_100 bg-no-repeat bg-center w-[54px] h-[54px] flex items-center justify-center">
              <p className=" font-Nunito font-bold md:text-base text-sm text-white">5%</p>
            </div>
            <p className=" font-Nunito font-semibold md:text-base text-sm text-white text-nowrap">
              Whale Wallet
            </p>
          </div>
          {/* Emergency Fund */}
          <div className=" tax_icon bottom-[-30%] start-[32%]">
            <div className=" bg-taxCircle bg_100 bg-no-repeat bg-center w-[54px] h-[54px] flex items-center justify-center">
              <p className=" font-Nunito font-bold md:text-base text-sm text-white">1%</p>
            </div>
            <p className=" font-Nunito font-semibold md:text-base text-sm text-white text-nowrap">
              Emergency Fund
            </p>
          </div>
          {/* Genie */}
          <div className=" tax_icon bottom-[55%] end-[-55%]">
            <div className=" bg-taxCircle bg_100 bg-no-repeat bg-center w-[54px] h-[54px] flex items-center justify-center">
              <p className=" font-Nunito font-bold md:text-base text-sm text-white">1%</p>
            </div>
            <p className=" font-Nunito font-semibold md:text-base text-sm text-white text-nowrap">
              Genie
            </p>
          </div>
          {/* Marketing Wallet */}
          <div className=" tax_icon bottom-[9%] end-[-103%]">
            <div className=" bg-taxCircle bg_100 bg-no-repeat bg-center w-[54px] h-[54px] flex items-center justify-center">
              <p className=" font-Nunito font-bold md:text-base text-sm text-white">1%</p>
            </div>
            <p className=" font-Nunito font-semibold md:text-base text-sm text-white text-nowrap">
              Marketing Wallet
            </p>
          </div>
          <p className=" font-NoFlickingThanks font-normal md:text-base text-sm text-white text-center">
            8% <span className=" block">Transaction</span> Tax
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
