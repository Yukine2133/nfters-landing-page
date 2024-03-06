import { discoverButtons, discoverNFTs, discoverPeople } from "@/constants";
import Button from "./Button";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="bg-[#D9E0EC]   mt-20 pt-16 bg-opacity-20  w-full">
      <div className="lg:px-[7.5rem] px-4  mb-14">
        <h2 className="font-montserrat  font-bold text-[2.125rem] ">
          Discover more NFTs
        </h2>
        <div className="flex justify-between gap-2 flex-wrap mt-9">
          <div className="space-x-3">
            {discoverButtons.map((item) =>
              item.buttonPurple ? (
                <Button
                  key={item.id}
                  text={item.text}
                  className="bg-purple-1"
                  px="px-5"
                  py="py-2.5"
                />
              ) : (
                <Button
                  key={item.id}
                  text={item.text}
                  className="bg-[#DCDCDC]  bg-opacity-20 mb-4 min-[1133px]:mb-0 "
                  px="px-5"
                  py="py-2.5"
                  color="black"
                />
              )
            )}
          </div>
          <button className="text-sm px-5 rounded-full py-2.5 bg-[#DCDCDC] bg-opacity-20 flex gap-2.5  font-medium text-purple-2 ">
            <Image
              src="/discover/filter.svg"
              alt="Filter"
              width={24}
              height={24}
            />
            All Filters
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 place-items-center lg:grid-cols-3 min-[1430px]:grid-cols-4 gap-10  px-4">
        {discoverNFTs.map((item) => (
          <div className="relative bg-white p-2.5 rounded-md" key={item.id}>
            <div className="relative">
              <Image
                src={item.image}
                alt="NFT Image"
                width={247.94}
                height={222.7}
                className="w-full "
              />
              <div className="absolute z-10 flex left-3 -bottom-3">
                {discoverPeople.map((person, index) => (
                  <Image
                    src={person.image}
                    key={person.id}
                    alt="Person"
                    width={38}
                    height={38}
                    style={{ marginLeft: index > 0 ? "-16px" : 0 }}
                  />
                ))}
              </div>
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-xl my-2.5">ArtCrypto</h3>
              <div className="flex items-center mb-5  justify-between">
                <span className="font-bold flex  items-center gap-1.5 text-xs   text-green-1 rounded-[6px]">
                  <Image
                    src="/collection-over/ethereum-1.svg"
                    alt="Ethereum"
                    width={12}
                    height={14}
                  />
                  0.25 ETH
                </span>
                <p className="text-sm text-gray-4  ">1 of 321</p>
              </div>
              <hr className="opacity-60 w-11/12 mx-auto " />
              <div className="flex items-center">
                <Button
                  text="3h 50m 2s left"
                  className="bg-[#F5F5F5] text-purple-5 "
                  px="px-2.5"
                  py="py-1"
                  weight="bold"
                />
                <Button
                  text="Place a bid"
                  className=" text-purple-4 "
                  weight="medium"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[4.69rem] pb-[4.2rem]  flex justify-center ">
        <Button
          className="border border-purple-1"
          color="purple-4"
          text="More NFTs"
          size="xl"
          weight="medium"
        />
      </div>
    </div>
  );
};

export default Discover;
