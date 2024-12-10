 import React from 'react'
 import Image from 'next/image';
 import { Button } from '@/components/ui/button';
 import { IoCartOutline } from "react-icons/io5";
import Footer from '@/components/Footer';
 
const Sale = () => {
  return (
    <section className="text-black p-3">
      <div className="grid items-center gap-8 py-8 px-4 sm:grid-cols-1 md:grid-cols-2 sm:py-16 xl:px-16">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            className="w-full max-w-[500px] h-auto rounded-md"
            src="/p3.png"
            alt="Nike Air Force 1"
            width={650}
            height={650}
          />
        </div>

        {/* Text Section */}
        <div className="text-left flex flex-col justify-start">
          <h1 className="text-3xl lg:text-4xl font-medium text-black mb-4 leading-snug">
            Nike Air Force 1
            <br />
            PLT.AF.ORM
          </h1>
          <p className="text-base sm:text-xl lg:text-[15px] font-normal font-poppins leading-relaxed">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"&#45;inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
          </p>
          <p className="mt-6 mb-4 text-lg sm:text-xl font-poppins lg:text-3xl font-medium ">
            ₹ 8,695.00
          </p>
         <Link href="/addtobag">
      <Button className="bg-black mt-5 text-white hover:text-black rounded-[30px] w-[175px] h-[45px] px-6 py-3 flex items-center justify-center">
        <IoCartOutline size={50} />
        Add to Cart
      </Button>
    </Link>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Sale;
