import Image from "next/image";
import { Telegram, Twitter } from "./common/Icons";

const Footer = () => {
  return (
    <div className="bg-footer bg-no-repeat bg-cover">
      <div className="container xl:max-w-[1140px] xl:px-0 px-3 mx-auto">
        <h2 className="pt-8 text-white text-center font-black font-Nunito text-5xl">
          Press
        </h2>
        <div className="pt-[18px] flex justify-center items-center flex-wrap gap-5">
          <Image
            height={132}
            width={269}
            className=""
            src="/assets/images/footerPress/market_watch.png"
          />
          <Image
            height={132}
            width={269}
            className=""
            src="/assets/images/footerPress/benzinga.png"
          />
          <Image
            height={132}
            width={269}
            className=""
            src="/assets/images/footerPress/journal.png"
          />
          <Image
            height={132}
            width={269}
            className=""
            src="/assets/images/footerPress/yahoo.png"
          />
        </div>
        <div className="pt-44 mt-2 flex justify-center items-center gap-[10px]">
          <span>
            <Twitter />
          </span>
          <span>
            <Telegram />
          </span>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-6 opacity-50"></div>
      <p className="pt-4 pb-6 text-center text-white font-Montserrat font-mediumn text-base opacity-50">Copyright@2022</p>
    </div>
  );
};

export default Footer;
