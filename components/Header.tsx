import Image from "next/image";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="xl:mx-[7.500rem] mx-5 mt-7  lg:mt-[2.25rem] flex justify-between lg:justify-evenly items-center ">
      <h1 className="font-montserrat uppercase text-2xl font-bold text-purple-1 border-r-2 pr-8 xl:pr-10 ">
        nfters
      </h1>
      <ul className=" gap-6 xl:gap-12 ml-5 xl:ml-9 font-medium  hidden lg:flex">
        <li>Marketplace</li>
        <li>Resource</li>
        <li>About</li>
      </ul>
      <div className=" items-center hidden lg:flex gap-5">
        <div className="w-[14rem] xl:w-[18.75rem] border border-[#EFEFEF] rounded-full py-[0.875rem] px-[1.250rem] xl:px-[1.875rem] ml-[2rem] xl:ml-[3.75rem] flex justify-between ">
          <span className="text-gray-10 font-medium">Search</span>
          <Image src="/search.png" width={24} height={24} alt="Search icon" />
        </div>
        <div className=" flex gap-3  2xl:gap-5  items-center">
          <Button
            text="Upload"
            weight="bold"
            size="sm"
            className="bg-purple-1"
            py="py-[18px]"
          />
          <Button
            text="Connect Wallet"
            weight="bold"
            size="sm"
            className="border border-blue"
            px="px-5"
            py="py-[18px]"
            color="purple-1"
          />
        </div>
      </div>
      <button className="lg:hidden">
        <Image src="/menu.svg" width={30} height={30} alt="Menu" />
      </button>
    </header>
  );
};

export default Header;
