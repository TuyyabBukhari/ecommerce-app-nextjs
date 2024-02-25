"use client";

import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"} className="btn btn-ghost text-xl">
      {process.env.APP_NAME}
    </Link>
  );
}

export default Logo;
