import { amaze } from "@/constants";
import Image from "next/image";

const Amaze = () => {
  return (
    <div className="bg-[#D9E0EC] bg-opacity-20 flex flex-col lg:flex-row justify-around items-center h-fit mx-4  lg:h-80">
      <h2 className="font-montserrat w font-bold text-[1.750rem]">
        The amazing NFT art of <br /> the world here
      </h2>
      <div className="flex flex-col xl:flex-row items-start gap-14 mt-10 ">
        {amaze.map((item) => (
          <div
            className="flex  items-start gap-4 first:w-[320px] last:w-[382px] "
            key={item.id}
          >
            <Image src={item.icon} alt={item.heading} width={36} height={36} />
            <div>
              <h3 className="font-bold text-lg ">{item.heading}</h3>
              <p className="text-gray-5 ">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amaze;
