import { collectionFeatured } from "@/constants";
import Image from "next/image";
import Button from "./Button";

const CollectionFeatures = () => {
  return (
    <div className="bg-[#D9E0EC] px-4   pt-16 pb-24  bg-opacity-20 mt-[8.5rem]">
      <h2 className="font-montserrat lg:px-[7.5rem] font-bold text-[1.75rem] mb-14">
        Collection Featured NFT
      </h2>
      <div className="flex flex-wrap gap-8  justify-center">
        {collectionFeatured.map((item) => (
          <div key={item.id}>
            <div className="flex gap-2">
              <Image
                src={item.image}
                alt="NFT Image"
                width={265.85}
                height={272.27}
                className="rounded-[11px] w-full"
              />
              <div className="flex  flex-col gap-2">
                {item.images.map((image) => (
                  <Image
                    key={image.id}
                    width={150.59}
                    height={85.26}
                    src={image.path}
                    alt="NFT Image"
                    className="h-full"
                  />
                ))}
              </div>
            </div>
            <h3 className="font-bold text-xl mt-7">Amazing Collection</h3>
            <div className="flex justify-between">
              <span className="gap-2.5 flex items-center">
                <Image src="/avatar.svg" alt="Avatar" width={28} height={28} />
                by Arkhan
              </span>
              <Button
                text="Total 54 Items"
                font="Bold"
                size="xs"
                color="blue"
                px="px-5"
                py="py-2.5"
                className="border border-blue rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionFeatures;
