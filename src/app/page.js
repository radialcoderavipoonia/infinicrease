import Footer from "@/components/Footer";
import PumpFish from "@/components/PumpFish";
import Hero from "@/components/Hero";
import GetInf from "@/components/GetInf";
import Roadmap from "@/components/Roadmap";
import Genie from "@/components/Genie";
import PumpMode from "@/components/PumpMode";
import Stabilies from "@/components/Stabilies";
import Sell from "@/components/Sell";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <>
      <BackToTop />
      <Hero />
      <PumpFish />
      <PumpFish />
      <Sell />
      <Stabilies />
      <PumpMode />
      <Genie />
      <GetInf />
      <Roadmap />
      <Footer />
    </>
  );
}
