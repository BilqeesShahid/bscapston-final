import Image from "next/image";
import Hero from "@/components/Hero";
import BestSell from "@/components/BestSell";
import Carousel from "@/components/Carousel";
import Featured from "@/components/Featured";
import DontMiss from "@/components/DontMiss";
import Essentials from "@/components/Essentials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
     <div>
      <Hero/>
      <BestSell/>
      <Carousel/>
      <Featured/>
      <DontMiss/>
      <Essentials/>
      <Footer/>
     </div>
  );
}
