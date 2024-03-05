import { collectionsOver, topCollectionsOver } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const CollectionOver = () => {
  return (
    <section className="mt-[8.500rem] mx-4 flex flex-wrap items-center justify-center gap-[3.250rem]">
      <div className="w-[440px]">
        <Image
          src="/collection-over/1.svg"
          alt="NFT Image"
          width={430}
          height={400}
        />
        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2.5">
            <Image
              src="/avatar.svg"
              alt="Avatar"
              width={48}
              height={48}
              className="object-cover"
            />
            <div>
              <h3 className="font-bold text-xl mb-1">The Futr Abstr</h3>
              <p className="text-gray-6 text-sm ">10 in the stock</p>
            </div>
          </div>
          <div>
            <h3 className="text-gray-2 font-medium text-xs">Highest bid</h3>
            <span className="font-bold flex items-center gap-2.5 mt-2">
              <Image
                src="/collection-over/ethereum-2.svg"
                alt="Ethereum"
                width={13}
                height={21.33}
              />
              0.25 ETH
            </span>
          </div>
        </div>
      </div>

      <div>
        {collectionsOver.map((item) => (
          <div className="flex gap-5 items-center mb-8" key={item.id}>
            <Image src={item.image} alt="NFT Image" width={147} height={147} />
            <div className="">
              <h3 className="font-bold text-xl">The Futr Abstr</h3>
              <div className=" mt-2 mb-4 flex items-center gap-2">
                <Image
                  src="/avatar.svg"
                  alt="Avatar"
                  width={34}
                  height={34}
                  className="object-cover"
                />
                <span className="font-bold flex items-center gap-1.5 text-xs border border-green-1 p-2 text-green-1 rounded-[6px]">
                  <Image
                    src="/collection-over/ethereum-1.svg"
                    alt="Ethereum"
                    width={12}
                    height={14}
                  />
                  0.25 ETH
                </span>
                <p className="text-sm text-gray-4  ">1 of 8</p>
              </div>
              {item.buttonPurple ? (
                <Button
                  bg="purple-1"
                  text="Place a bid"
                  size="sm"
                  py="py-[14px]"
                  px="px-5"
                />
              ) : (
                <Button
                  text="Place a bid"
                  size="sm"
                  weight="bold"
                  className="border border-blue"
                  px="px-5"
                  py="py-[14px]"
                  color="purple-1"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:ml-10 ">
        <h2 className="font-bold text-xl mb-2.5">Top Collections over</h2>
        <p className="text-purple-1 font-bold text-lg">Last 7 days</p>
        {topCollectionsOver.map((item) => (
          <div
            className="flex items-center gap-5 my-8 border-b border-[F0F0F0] last:border-0 pb-4"
            key={item.id}
          >
            <h2 className="text-2xl font-bold">{item.id}</h2>
            <Image src={item.image} alt={item.heading} width={60} height={60} />
            <div>
              <h3 className="font-medium ">
                {item.heading}
                <span className="font-semibold text-sm flex items-center gap-2.5 mt-2">
                  <Image
                    src="/collection-over/ethereum-2.svg"
                    alt="Ethereum"
                    width={15}
                    height={24}
                  />
                  {item.ethereum}
                </span>
              </h3>
            </div>
            <h3
              className={`font-semibold text-xl ml-5 font-poppins ${
                item.isGreen ? "text-green-2" : "text-red"
              }`}
            >
              {item.percentage}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionOver;
