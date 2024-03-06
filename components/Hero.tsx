import Image from "next/image";
import Button from "./Button";
import { hero } from "@/constants";

const Hero = () => {
  return (
    <main className="flex mt-14 flex-col lg:flex-row justify-center mx-4 items-center ">
      <section className=" grid place-items-center text-center lg:place-items-start lg:text-start ">
        <h1 className="font-montserrat font-bold text-[34px] w-full  md:text-[40px] mx-4  md:w-[60%] lg:w-full xl:w-[80%] 2xl:w-[60%] mb-5">
          Discover, and collect digital arts ntfs
        </h1>
        <p className="text-lg mx-4 md:w-[421px] mb-10">
          Digital marketplace for crypto collectibles and non-fungible tokens
          (NFTs). Buy, Sell, and discover exclusive digital assets.
        </p>
        <Button text="Explore Now" className="bg-purple-1" size="lg" />
        <div className="flex items-center gap-9 mt-8 mx-4">
          {hero.map((item) => (
            <div key={item.id}>
              <h3 className="text-[40px] font-montserrat font-bold">
                {item.heading}
              </h3>
              <p className="text-lg">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Image
          src="/hero-illustration.svg"
          alt="Hero Illustration"
          width={800}
          height={540}
          className=""
        />
      </section>
    </main>
  );
};

export default Hero;
