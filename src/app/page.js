import Footer from "@/components/Footer";
import PumpFish from "@/components/PumpFish";
import Hero from "@/components/Hero";
import GetInf from "@/components/GetInf";
import Roadmap from "@/components/Roadmap";
import Genie from "@/components/Genie";
import PumpMode from "@/components/PumpMode";
import Stabilies from "@/components/Stabilies";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <>
      <Hero />
      <PumpFish />
      <Stabilies />
      <PumpMode />
      <Genie />
      <GetInf />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </>
  );
}
