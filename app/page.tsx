import Amaze from "@/components/Amaze";
import CollectionFeatures from "@/components/CollectionFeatures";
import CollectionOver from "@/components/CollectionOver";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignUp from "@/components/SignUp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Amaze />
      <CollectionOver />
      <CollectionFeatures />
      <SignUp />
      <Discover />
      <Footer />
    </div>
  );
}
