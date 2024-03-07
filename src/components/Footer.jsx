import Image from "next/image";
import { Telegram, Twitter } from "./common/Icons";
import Link from "next/link";

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-footer bg-no-repeat footer_bg bg-cover ">
      <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto">
        <h2 className=" text-white text-center font-black font-Nunito xl:text-5xl sm:text-[45px] text-3xl">
          Press
        </h2>
        <div className="pt-[18px] flex justify-center items-center flex-wrap gap-5">
          <Image
            height={132}
            width={269}
            className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out sm:w-[269px] w-[250px]"
            src="/assets/images/footerPress/market_watch.webp"
            alt="market watch"
          />
          <Image
            height={132}
            width={269}
            className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out sm:w-[269px] w-[250px]"
            src="/assets/images/footerPress/benzinga.webp"
            alt="benzinga"
          />
          <Image
            height={132}
            width={269}
            className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out sm:w-[269px] w-[250px]"
            src="/assets/images/footerPress/journal.webp"
            alt="journal"
          />
          <Image
            height={132}
            width={269}
            className="hover:translate-y-[-10px] transition-all duration-300 ease-in-out sm:w-[269px] w-[250px]"
            src="/assets/images/footerPress/yahoo.webp"
            alt="yahoo"
          />
        </div>
        <div className="sm:pt-44 pt-20 mt-2 flex justify-center items-center gap-[10px]">
          <Link
            href="https://twitter.com/"
            target="blank"
            className="hover:scale-105 transition-all duration-300 ease-in-out rounded-[50%] hover:shadow-svg"
          >
            <Twitter />
          </Link>
          <Link
            href="https://www.telegram.com/"
            target="blank"
            className="hover:scale-105 transition-all duration-300 ease-in-out rounded-[50%] hover:shadow-svg"
          >
            <Telegram />
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-6 opacity-50"></div>
      <p className="sm:pt-4 sm:pb-6 py-3 text-center text-white font-Montserrat font-mediumn md:text-base text-sm opacity-50">
        Copyright@{currentYear}
      </p>
    </div>
  );
};

export default Footer;
