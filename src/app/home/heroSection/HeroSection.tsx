import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="max-w-full flex justify-center items-center p-4 gap-2 flex-row">
      <div className="flex flex-col justify-center items-start gap-6 w-full">
        <span className="text-center text-sm font-bold bg-info text-info-content px-4 py-2 rounded-md">
          Sale 70% OFF
        </span>

        <h2 className="text-6xl font-bold">
          An Industrial Take on Sneakerwear
        </h2>
        <p className="text-1xl">
          Anyone can beat you but no one can
          <br /> beat your sneaker as long as you wear
          <br /> Next Walk's.
        </p>

        <Link href="/products">
          <button className="btn btn-primary">
            <ShoppingCartIcon className="h-6 w-6" /> Start Shoping
          </button>
        </Link>

        {/* <div className="flex flex-row justify-center items-start gap-2 w-full overflow-x-scroll opacity-40">
          <img src="/assets/images/logo/logo.png" height={90} />
          <img src="/assets/images/logo/logo.png" height={90} />
          <img src="/assets/images/logo/logo.png" height={90} />
        </div> */}
      </div>

      <div className="flex-col justify-center items-center gap-1 relative w-full hidden md:flex lg:flex">
        <div className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
          <div className="absolute rounded-full w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/20">
            <img
              src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-a-pair-of-running-shoes-png-image_9145212.png"
              alt="Hero Section Image"
              className="absolute"
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
