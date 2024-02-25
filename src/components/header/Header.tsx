import React from "react";
import Image from "next/image";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Cart from "./Cart";
import Logo from "./Logo";

function Header() {
  return (
    <div className="navbar bg-base-100 max-w-full">
      <div className="navbar-start">
        <SideNav />
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <TopNav />
      </div>
      <div className="navbar-end">
        <Cart />
      </div>
    </div>
  );
}

export default Header;
