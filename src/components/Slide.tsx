import Image from 'next/image';
import React from 'react';

 
interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="relative flex flex-col justify-center items-center mx-2"> {/* Added margin for spacing between slides */}
      {/* Image */}
      <Image
        className="object-cover w-full h-[300px] md:h-[460px] mb-4" // Added margin to create space below the image
        src={img}
        alt="slider image"
        width={440}
        height={440}
      />

      {/* Text content */}
      <div>
        <div className='flex justify-evenly items-center gap-12'>
          <h3 className="text-black font-medium text-[11px] md:text-[16px]">{title}</h3>
        <b className="text-[11px] md:text-[15px] lg:text-[15px]">{price}</b></div>
        <h2 className="text-[#757575] text-[11px] md:text-[px] lg:text-[16px] font-normal">{mainTitle}</h2>
        
           
        
      </div>
    </div>
  );
};

export default Slide;
