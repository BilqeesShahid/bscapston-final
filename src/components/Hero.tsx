import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';
 

 

const Hero = () => {
  return (
    <main className="w-full h-full">
      {/* Top Section */}
      <div className="w-full h-[45px] bg-[#F5F5F5]">
        <h1 className="text-[16px] font-medium text-center">Hello Nike App</h1>
        <p className="font-normal text-[11px] text-center">
          Download the app to access everything Nike.
          <span className="text-[11px] underline font-medium">Get Your Great</span>
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full">
        <Image
          src="/h1.png"
          alt="hero"
          width={1300}
          height={700}
          className="w-full h-auto"
          priority // Ensures the image loads fast
        />
      </div>
      <div className="text-center mt-[60px]">
  <p className="text-[15px] font-medium">First Look</p>
  <h1 className="uppercase text-[30px] lg:text-[56px] font-medium text-black">Nike Air Max Pulse</h1>
  <p className="text-[12px] ml-3 mr-3 lg:text-[15px] font-normal">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
    <br />
    &#45;&#45;designed to push you past your limits and help you go to the max.
  </p>

  {/* Flex container for buttons */}
  <div className="flex justify-center gap-8 mt-6">
    {/* Button 1 */}
    <div className="w-auto">
      <Button className="px-8 py-3 text-white hover:text-black bg-black rounded-full">
        Notify Me
      </Button>
    </div>
    
    {/* Button 2 */}
    <div className="w-auto">
      <Button className="px-8 py-3 text-white hover:text-black bg-black rounded-full">
        Shop Air Max
      </Button>
    </div>
  </div>
</div>



    </main>
  );
};

export default Hero;
