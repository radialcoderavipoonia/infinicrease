import Footer from "@/components/Footer";
import Genie from "@/components/Genie";
import GetInf from "@/components/GetInf";
import Hero from "@/components/Hero";
import InfinicreaseVideo from "@/components/InfinicreaseVideo";
import PumpFish from "@/components/PumpFish";
import PumpMode from "@/components/PumpMode";
import Roadmap from "@/components/Roadmap";
import Sell from "@/components/Sell";
import Stabilies from "@/components/Stabilies";
import Tokenomics from "@/components/Tokenomics";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <>
      <div className=" overflow-hidden">
        <BackToTop />
        <Hero />
        <InfinicreaseVideo />
        <PumpFish />
        <Sell />
        <Stabilies />
        <PumpMode />
        <Genie />
        <GetInf />
        <Tokenomics />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}
