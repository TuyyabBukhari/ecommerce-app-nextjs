import ProductSection from "@/app/home/productsSection/ProductSection";
import React from "react";
import HeroSection from "./heroSection/HeroSection";

function Home() {
  return (
    <div className="max-h-full max-w-full flex flex-col items-center justify-between">
      <HeroSection />
      <ProductSection />
    </div>
  );
}

export default Home;
