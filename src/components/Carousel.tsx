"use client"
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import { useRef } from 'react';
 
interface SlickSlider extends Slider {
  slickNext: () => void;
  slickPrev: () => void;
}

const Carousel = () => {
  // Initialize ref with the correct typing for react-slick
  const sliderRef = useRef<SlickSlider | null>(null);

  const settings = {
    dots: false, // Dots disabled
    arrows: true, // Arrows enabled
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true, // Arrows enabled for medium screens
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true, // Arrows enabled for smaller screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Arrows enabled for mobile screens
        }
      }
    ]
  };

  const slideData = [
    {
      id: 0,
      img: '/img1.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'Womens Shoes',
      price: '$200',
    },
    {
      id: 1,
      img: '/img2.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'Mens Wear',
      price: '$200',
    },
    {
      id: 2,
      img: '/c1.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'Mens Wear',
      price: '$300',
    },
    {
      id: 3,
      img: '/c2.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'Smart Wear',
      price: '$200',
    },
    {
      id: 4,
      img: '/c4.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'women Wear',
      price: '$200',
    },
    {
      id: 5,
      img: '/img3.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'Smart Wear',
      price: '$200',
    },
    {
      id: 6,
      img: '/c3.png',
      title: 'Nike Air Max Pulse',
      mainTitle: 'Women Styke',
      price: '$200',
    },
  ];

 // Custom functions to handle the navigation
 const goToNext = () => sliderRef.current?.slickNext();
 const goToPrev = () => sliderRef.current?.slickPrev();

 return (
   <div className="relative">
     {/* Custom Arrows */}
     <div className="absolute top-0 left-0 z-10 flex justify-between w-full px-4">
       <button
         onClick={goToPrev}
         className="text-white bg-black p-2 rounded-full shadow-md"
       >
         &#8592; {/* Left arrow (←) */}
       </button>
       <button
         onClick={goToNext}
         className="text-white bg-black p-2 rounded-full shadow-md"
       >
         &#8594; {/* Right arrow (→) */}
       </button>
     </div>

     <div className="container pt-6 lg:pt-0">
       <Slider ref={sliderRef} {...settings}>
         {slideData.map((item) => (
           <Slide
             key={item.id}
             img={item.img}
             title={item.title}
             mainTitle={item.mainTitle}
             price={item.price}
           />
         ))}
       </Slider>
     </div>
   </div>
 );
};

export default Carousel;