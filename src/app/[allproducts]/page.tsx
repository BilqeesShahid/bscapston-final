import Footer from '@/components/Footer';
import React from 'react'
import { BiRectangle } from "react-icons/bi";



const productData = [
  {
    id: 1,
    image: '/p1.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 2,
    image: '/p2.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 3,
    image: '/p3.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  {
    id: 4,
    image: '/p4.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$120.00',
  },
  {
    id: 5,
    image: '/p5.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 6,
    image: '/p6.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 7,
    image: '/p7.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  {
    id: 8,
    image: '/p8.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$120.00',
  },
  {
    id: 9,
    image: '/p9.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 10,
    image: '/p10.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 11,
    image: '/p11.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  {
    id: 12,
    image: '/p12.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$120.00',
  },
  {
    id: 13,
    image: '/p13.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 14,
    image: '/p14.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 15,
    image: '/p15.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  {
    id: 16,
    image: '/p16.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$120.00',
  },
  {
    id: 17,
    image: '/p17.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 18,
    image: '/p18.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 19,
    image: '/p19.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  {
    id: 20,
    image: '/p19.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', // Change to actual image path
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$120.00',
  },
  {
    id: 21,
    image: '/p21.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 22,
    image: '/p22.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 23,
    image: '/p23.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  {
    id: 24,
    image: '/p24.jpg', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$120.00',
  },
  {
    id: 25,
    image: '/p25.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07',
    title:"Men's Shoes",
    colors: ['1', '2'],
    price: '$99.99',
  },
  {
    id: 26,
    image: '/p26.png',
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$149.99',
  },
  {
    id: 27,
    image: '/p27.png', 
    info:"Just In ",
    maintitle: 'Nike Air Force 1 Mid 07', 
    title: 'Mens Shoes',
    colors: ['1', '2'],
    price: '$79.99',
  },
  

];

const AllProducts = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-10">
        <h1 className="text-[24px] font-medium">New (500)</h1>
        <div>
          <select
            className="text-black text-[12px] lg:text-[15px] px-2 py-1 w-[86px] h-[28px] md:w-auto"
            name="Sorting"
            id="Sorting"
          >
            <option value="Sortby">Sort by</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row mt-10 gap-8">
        {/* Text List Section */}
        <div className="w-full lg:w-[260px] p-4 border-b lg:border-none">
          <ul className="list-disc pl-5 space-y-2">
           <li>Shoes</li>
            <li>Sports Bras</li>
            <li>Tops &#38; T&#45;shirts</li>
            <li>Hoodies &#38; Sweatshirts</li>
            <li>Jackets</li>
            <li>Trousers &#38; Tights</li>
            <li>Shorts</li>
            <li>Tracksuits</li>
            <li>Jumpsuits  &#38; Rompers</li>
            <li>Skirts &#38; Dresses</li>
            <li>Socks</li>
            <li>Accessories &#38; Equipment</li>
          </ul>

          <div className="mt-12 border-t-2 border-b-2 p-2">
            <h1 className="text-black text-[12px] lg:text-[15px] px-2 py-1">Gender</h1>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Men</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Women</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Unisex</h3>
            </div>
          </div>
          <div className="mt-12  border-b-2 p-2">
            <h1 className="text-black text-[12px] lg:text-[15px] px-2 py-1">Kids</h1>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Boys</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Girls</h3>
            </div>
            </div>
            <div className="mt-12  border-b-2 p-2">
            <h1 className="text-black text-[12px] lg:text-[15px] px-2 py-1">Shop By Price</h1>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>Under ₹ 2 500.00</h3>
            </div>
            <div className="flex gap-1 items-center">
              <BiRectangle className="text-gray-400 rounded-[4px] w-[20px] h-[20px]" />
              <h3>₹ 2 501.00 &#45; ₹ 7 500.00</h3>
            </div>
            </div>

           
        </div>

        {/* Images Section */}
        <div className="flex flex-wrap justify-between items-center w-full gap-4">
          {productData.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[260px] lg:w-[348px] flex flex-col items-start p-2"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[200px] sm:h-[260px] lg:h-[348px] object-cover mb-4"
              />
              <p className="text-lg font-normal text-red-500">{product.info}</p>
              <h2 className="text-lg font-medium">{product.maintitle}</h2>
              <h3 className="text-lg font-normal text-gray-500">{product.title}</h3>
              <p className="text-sm text-gray-500">
                Colors: {product.colors.join(', ')}
              </p>
              <p className="text-lg font-medium text-black mt-4">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Categories Section */}
      <div className="w-auto p-4">
        <h2 className="text-xl text-[19px] font-medium mb-4">Related Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">Best Selling Products</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">Best Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">New Basketball Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">New Football Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">New Men's Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">New Running Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">Best Men's Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">New Jordan Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">Best Women's Shoes</button>
          <button className="px-4 py-2 text-[12px] font-normal border border-[#CCCCCC] text-black rounded-full hover:bg-gray-300">Best Training & Gym</button>
        
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AllProducts;

 
