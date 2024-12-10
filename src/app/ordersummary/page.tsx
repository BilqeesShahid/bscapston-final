import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
 

const OrderSummary = () => {
  return (
    <div className="max-w-[900px] mx-auto bg-white p-6  ">
      <div className="flex flex-wrap -mx-4">
        {/* Left Column */}
        <div className="w-full md:w-[440px] px-4  border-gray-200">
          <h2 className="text-lg lg:text-[21px] font-medium mb-4">
            How would you like to get your order?
          </h2>
          <p className="text-sm text-[#757575] lg:text-[15px] font-normal mb-4">
            Customs regulations for India require a copy of the recipient's
            KYC. The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your
            KYC. The KYC will be stored securely and used solely for the purpose
            of clearing customs (including sharing it with customs officials)
            for all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information.{" "}
            <a href="#" className="text-gray-400 text-[15px] underline">
              Learn More
            </a>
            .
          </p>
          <div className="flex items-center w-full lg:w-[410px] h-[82px] border-[2px] rounded-[12px] px-[27px] mb-4 text-left">
  <CiDeliveryTruck size={20} className="text-lg mr-4" /> 
  <span>Deliver it</span>
</div>
          <h3 className="text-lg font-semibold mb-2">
            Enter your name and address
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <p className="text-[11px] font-normal text-[#757575]">We do not ship to P.O. boxes</p>
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-1/2 p-2 border border-gray-300 rounded-[4px]"
              />
              <input
                type="text"
                placeholder="Locality"
                className="w-1/2 p-2 border border-gray-300 rounded-[4px]"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="State/Territory"
                className="w-1/2 p-2 border border-gray-300 rounded-[4px]"
              />
              <input
                type="text"
                placeholder="Country"
                value="Pakistan"
                disabled
                className="w-1/2 p-2 border border-gray-300 rounded-[4px] bg-gray-100"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="save-address" />
              <label htmlFor="save-address" className="text-sm">
                Save this address to my profile
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="preferred-address" />
              <label htmlFor="preferred-address" className="text-sm">
                Make this my preferred Address
              </label>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              What's your contact information?
            </h3>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <p className="text-[11px] font-normal text-[#757575]">A confirmation email will be sent after checkout.</p>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <p className="text-[11px] font-normal text-[#757575]">A carrier might contact you to confirm delivery.</p>
            <h3 className="text-lg lg:text-[21px] font-semibold mb-2">What's your PAN?</h3>
            <input
              type="text"
              placeholder="PAN"
              className="w-full p-2 border border-gray-300 rounded-[4px]"
            />
            <p className="text-[#8D8D8D] text-[12px] mb-2">
              Enter your PAN to enable Payment with UPI, Net Banking, or local
              card Methods.
            </p>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="save-pan" />
              <label htmlFor="save-pan" className="text-[12px] text-[#8D8D8D]">
                Save PAN details to NikeProfile
              </label>
            </div>
            <div className="flex items-baseline space-x-2">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent" className="text-[12px] text-[#8D8D8D]">
                I have read and consent to eShopWorld processing my information
                in accordance with the Privacy Statement and Cookie Policy.
                eShopWorld is a trusted Nike partner.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#F5F5F5] text-[15px] font-medium text-[#757575] py-2 px-4 rounded-[30px] hover:bg-gray-700 hover:text-white"
            >
              Continue
            </button>
          </form>
          <div>
          <div className="border-t border-gray-300 my-4"></div>
          <h1>Delivery</h1>
          <div className="border-t border-gray-300 my-4"></div>
          <h1 className="text-[#757575]" >Shipping</h1>
          <div className="border-t border-gray-300 my-4"></div>
          <h1 className="text-[#757575]">Billing</h1>
          <div className="border-t border-gray-300 my-4"></div>
          <h1 className="text-[#757575]">Payment</h1>
          </div>
        </div>

       {/* Right Column */}
<div className="w-full md:w-[340px] px-4">
  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

  {/* Subtotal and Shipping */}
  <div className="flex justify-between mb-2 text-[15px] text-[#8D8D8D]">
    <p>Subtotal:</p>
    <p>₹ 20 890.00</p>
  </div>
  <div className="flex justify-between text-[15px] text-[#8D8D8D] mb-2">
    <p>Delivery Shipping:</p>
    <p>Free</p>
  </div>
  
  {/* Border above Total */}
  <div className="border-t border-gray-300 my-2"></div>
  <div className="flex justify-between text-[15px] mb-4">
    <p className="font-semibold">Total:</p>
    <p className="font-semibold">₹ 20 890.00</p>
  </div>
   
  {/* Border below Total */}
  <div className="border-t border-gray-300 mb-4"></div>
  <p className="text-[9px] font-normal mb-4">(The total reflects the price of your order, including all duties and taxes)</p>
  <h1 className="text-[15px] font-bold mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
  {/* Order Items */}
  <div className="space-y-4">
    {/* Item 1 */}
    <div className="flex items-center space-x-3">
      <img
        src="/c1.png"
        alt="Item 1"
        className="w-[208px] h-[208px] object-cover rounded-md"
      />
      <div className="text-[13px] w-[100px]">
        <p className="font-normal">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
        <p className="text-sm text-[#8D8D8D]">Qty 2 </p> 
        <p className="text-[#8D8D8D]">Size L</p>
      
      <p className="font-normal text-[#8D8D8D]">₹ 3 895.00</p>
      </div>
    </div>
    <div className="border-t border-gray-200"></div>

    {/* Item 2 */}
    <div className="flex items-center space-x-3">
      <img
        src="/img2.png"
        alt="Item 2"
        className="w-[208px] h-[208px] object-cover rounded-md"
      />
      <div>
        <p className="font-normal text-[13px]">Nike Air Max 97 SE Men's Shoes</p>
      
        <p className="text-sm text-[#8D8D8D]">Qty 1</p>
        <p className="text-[#8D8D8D]"> Size L</p>
       
      <p className="font-semibold">₹ 3 895.00</p>
      </div>
    </div>
  </div>
</div></div>
</div>


  );
};

export default OrderSummary;
