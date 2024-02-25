"use client";

import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

function ProductBox({
  id,
  image,
  name,
  category,
  price,
}: {
  id: number;
  image: string;
  name: string;
  category: string;
  price: string;
}) {
  const [viewQuantity, setQuantity] = React.useState(0);

  return (
    <div className="card card-compact min-w-86 max-w-90 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Sneaker Image" />
      </figure>
      <div className="card-body">
        <div className="flex flex-row items-center justify-between gap-2">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-outline">
            {category === "men"
              ? "Men"
              : category === "women"
              ? "Women"
              : category === "kid"
              ? "Kid"
              : "Freeware"}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <span className="text-2xl font-bold">${price}</span>
          {viewQuantity > 0 ? (
            <div className="join">
              <button
                className="btn btn-ghost bg-base-200 join-item"
                onClick={() => setQuantity(viewQuantity - 1)}
              >
                {viewQuantity === 1 ? (
                  <TrashIcon className="h-5 w-5 text-primary-content" />
                ) : (
                  <MinusIcon className="h-6 w-6 text-primary-content" />
                )}
              </button>
              <input
                type="number"
                placeholder="0"
                className="input text-center input-bordered w-[80px] rounded-none max-w-xs"
                value={viewQuantity}
                min={1}
                max={1000}
                onChange={(e: any) => {
                  const value = parseFloat(e.target.value);
                  if (!(value < 1 || value === 0 || (value as any) == ""))
                    setQuantity(value);
                }}
              />
              <button
                className="btn btn-ghost bg-base-200 join-item"
                onClick={() => setQuantity(viewQuantity + 1)}
              >
                <PlusIcon className="h-6 w-6 text-primary-content" />
              </button>
            </div>
          ) : (
            <div
              className="btn
             btn-primary"
              onClick={() => setQuantity(1)}
            >
              Buy Now
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
