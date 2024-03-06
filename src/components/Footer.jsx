import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container xl:max-w-[1136px] xl:px-0 px-3 mx-auto">
        <h2 className="pt-8 text-white text-center font-black font-Nunito text-5xl">
          Press
        </h2>
        <div className="pt-[18px] flex items-center flex-wrap gap-5">
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
      </div>
    </div>
  );
};

export default Footer;
