import Amaze from "@/components/Amaze";
import CollectionOver from "@/components/CollectionOver";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Amaze />
      <CollectionOver />
    </>
  );
}
