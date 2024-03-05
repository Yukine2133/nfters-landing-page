import Image from "next/image";
import Button from "./Button";

const SignUp = () => {
  return (
    <section className="mt-[6.375rem] mx-auto w-full flex justify-center items-center gap-9 flex-wrap-reverse px-4">
      <div className="hidden flex-col md:flex">
        <Image src="/sign-up/1.svg" alt="NFT Image" width={328} height={334} />
        <Image
          src="/sign-up/3.svg"
          alt="NFT Image"
          width={235}
          height={254}
          className="ml-24 mt-4"
        />
      </div>
      <Image
        src="/sign-up/2.svg"
        alt="NFT Image"
        width={328}
        height={334}
        className="hidden md:block"
      />

      {/* on smaller screens only */}
      <Image
        src="/sign-up/2.svg"
        alt="NFT Image"
        width={328}
        height={334}
        className="md:hidden"
      />
      <div className="flex-col flex md:hidden">
        <Image src="/sign-up/1.svg" alt="NFT Image" width={328} height={334} />
        <Image
          src="/sign-up/3.svg"
          alt="NFT Image"
          width={235}
          height={254}
          className="ml-24 mt-4"
        />
      </div>

      <div className="">
        <h2 className="font-bold text-[2rem] mb-[2.35rem]">
          Create and sell <br /> your NFTs
        </h2>
        <p className="text-lg text-gray-6 lg:w-[517px] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <Button text="Sign Up Now" bg="purple-1" font="montserrat" size="lg" />
      </div>
    </section>
  );
};

export default SignUp;
