import Image from "next/image";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex flex-col px-4 lg:flex-row  justify-around mt-20">
      <section className="">
        <h2 className="font-montserrat text-2xl font-bold mb-7 ">NFters</h2>
        <p className="text-sm text-gray-3 w-[70%] md:w-1/2 lg:w-[85%]  xl:w-[60%] mb-2.5">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/footer/facebook.svg"
            alt="Facebook logo"
            width={36}
            height={36}
          />
          <Image
            src="/footer/twitter.svg"
            alt="Twitter logo"
            width={36}
            height={36}
          />
          <Image
            src="/footer/linkedin.svg"
            alt="LinkedIn logo"
            width={36}
            height={36}
          />
        </div>
      </section>
      <section className="mt-8 lg:mt-0 text-start flex flex-wrap lg:flex-nowrap gap-8  md:gap-14 xl:gap-[5.75rem]">
        <div>
          <h4 className="text-lg font-bold">Market Place</h4>
          <ul className="space-y-2 mt-6 text-nowrap">
            <li>All NFTs</li>
            <li>New</li>
            <li>Art</li>
            <li>Sports</li>
            <li>Utility</li>
            <li>Music</li>
            <li>Domain Name</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">My Account</h4>
          <ul className="space-y-2 mt-6">
            <li>Profile</li>
            <li>Favorite</li>
            <li>My Collections</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className="mx-auto">
          <h4 className="text-lg font-bold mb-6">Stay In The Loop</h4>
          <p className="w-[362px] mb-6">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className="border-2  border-[#F1F1F1] text-[#959595]  rounded-full pl-2 lg:pl-6 pr-2 py-2 flex gap-3  lg:gap-5 w-fit   ">
            <p className="flex items-center text-nowrap">
              Enter your email address...
            </p>
            <Button
              text="Subscribe Now"
              className="bg-blue "
              px="px-3 lg:px-[30.4px]"
              py="py-4"
              weight="semibold"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
