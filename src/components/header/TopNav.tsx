"use client";

import React from "react";
import navRoutes from "./navRoutes";
import Link from "next/link";
import { usePathname } from "next/navigation";

function TopNav() {
  const pathName = usePathname();

  return (
    <ul className="menu menu-horizontal px-1 gap-2">
      {navRoutes.map((item, index: number) => (
        <li key={`topNav_menuItem_${index}`}>
          <Link
            className={`${pathName === item.url ? "bg-base-200" : ""}`}
            href={item.url}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TopNav;
