import { DocumentIcon } from "@heroicons/react/24/solid";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="hero w-screen h-4/5 flex justify-center items-center">
        <div className="hero-content text-accent text-center">
          <div className="max-w-md flex flex-col gap-2 justify-center items-center">
            <DocumentIcon className="stroke-[1px] h-32 w-h-32 inline-block" />
            <h1 className="text-4xl font-bold">404,</h1>
            <p className="text-3xl font-bold">Resource not found.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
