import React from 'react'
import Link from 'next/link';


 

import { FaHeart, FaTrash } from "react-icons/fa";
import Footer from '@/components/Footer';

const AddToBag = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      {/* White Container */}
      <div className="bg-white w-full lg:w-[1100px] lg:h-[540px] flex flex-col lg:flex-row p-6">
        {/* Left Column */}
        <div className="w-full lg:w-2/3 p-4">
          {/* Top Gray Container */}
          <div className="w-full h-[63px] bg-gray-200 flex items-center px-4 mb-4">
            <h1 className="text-[14px] font-medium">Free delivery</h1>
            <p className="text-[11px] font-normal ml-4">
              Applies to orders of ₹14,000.00 or more.
            </p>
            <button className="ml-auto text-[11px] font-medium underline">
              View details
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-serif mb-6">Bag</h1>

          {/* Product 1 */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <img
                src="/c1.png"
                alt="Product Top"
                className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover rounded-md"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h2>
                  <p className="text-sm font-medium text-black">₹ 3,895.00</p>
                </div>
                <p className="text-sm text-gray-600">
                  Men's Short-Sleeve Running Top
                </p>
                <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                <div className="flex gap-6 mt-2">
                  <span className="text-sm font-medium">Size: M</span>
                  <span className="text-sm font-medium">Quantity: 1</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <FaHeart className="text-black cursor-pointer" size={20} />
                  <FaTrash className="text-black cursor-pointer" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div>
            <div className="flex items-start gap-4">
              <img
                src="/img2.png"
                alt="Product Shoe"
                className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover rounded-md"
              />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium">Nike Air Max 97 SE</h2>
                  <p className="text-sm font-medium text-black">₹ 16,995.00</p>
                </div>
                <p className="text-sm text-gray-600">Men's Shoes</p>
                <p className="text-sm text-gray-600">
                  Flat Pewter/Light Bone/Black/White
                </p>
                <div className="flex gap-6 mt-2">
                  <span className="text-sm font-medium">Size: 9</span>
                  <span className="text-sm font-medium">Quantity: 1</span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <FaHeart className="text-black cursor-pointer" size={20} />
                  <FaTrash className="text-black cursor-pointer" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Summary Section) */}
        <div className="w-full lg:w-1/3 p-4 flex flex-col ">
          <h1 className="text-xl font-serif font-semibold mb-4">Summary</h1>

          {/* Summary Details */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">Subtotal</span>
              <span className="text-sm font-medium text-black">₹ 20,890.00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">
                Estimated Delivery & Handling
              </span>
              <span className="text-sm font-medium text-black">Free</span>
            </div>

            <div className="flex justify-between border-t pt-3">
              <span className="text-sm font-medium text-gray-700">Total</span>
              <span className="text-sm font-medium text-black">₹ 20,890.00</span>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="flex justify-center mt-6">
  <Link href="/ordersummary">
    <button className="w-[334px] h-[60px] rounded-[30px] bg-black text-white text-sm font-medium">
      Member Checkout
    </button>
  </Link>
</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AddToBag;
