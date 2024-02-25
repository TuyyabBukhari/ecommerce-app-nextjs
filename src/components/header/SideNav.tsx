"use client";

import React, { useState } from "react";
import navRoutes from "./navRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Cart from "./Cart";
import Logo from "./Logo";

function SideNav() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-square lg:hidden"
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      {isMenuOpen ? (
        <div className="fixed z-[9999999999999999999] top-0 left-0 w-screen h-screen bg-base-200 flex flex-col justify-center items-center py-10">
          <div className="w-[90%] rounded-lg navbar bg-base-100">
            <div className="flex-1">
              <Logo />
            </div>
            <div className="flex-none gap-2">
              <Cart />
              <button className="btn btn-square btn-ghost">
                <XMarkIcon
                  className="h-6 w-6 text-neutral"
                  onClick={() => setIsMenuOpen(false)}
                />
              </button>
            </div>
          </div>

          <ul
            tabIndex={0}
            className="w-[90%] h-full pt-20 menu menu-vertical px-1 gap-2"
          >
            {navRoutes.map((item, index: number) => (
              <li key={`topNav_menuItem_${index}`}>
                <Link
                  className={`place-content-center ${
                    pathName === item.url ? "bg-base-300" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default SideNav;
