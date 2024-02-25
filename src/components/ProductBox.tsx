"use client";

import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";

function ProductBox({
  key,
  id,
  image,
  name,
  category,
  price,
  side = "vertical",
  quantity = 0,
  onDelete = () => null,
}: {
  key?: string;
  id: number;
  image: string;
  name: string;
  category: string;
  price: string;
  side?: "vertical" | "horizontal";
  quantity?: number;
  onDelete?: () => void;
}) {
  const [viewQuantity, setQuantity] = React.useState(quantity);

  useEffect(() => {
    if (viewQuantity < 1 || (viewQuantity as any) == "") {
      onDelete();
    }
  }, [viewQuantity]);

  return (
    <div
      className={`w-full card ${
        side === "vertical" ? "card-compact" : "lg:card-side"
      } min-w-86 max-w-90 bg-base-100 shadow-xl`}
    >
      <figure>
        <img
          src={image}
          alt="Sneaker Image"
          style={side === "horizontal" ? { height: 180 } : {}}
        />
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
        <div className="w-full flex flex-col items-center justify-between gap-2">
          <div className="w-full flex flex-row items-center justify-between gap-2">
            <span className="text-1xl font-bold">
              <b>Price: </b>${price}
            </span>
            {viewQuantity > 0 ? (
              <span className="text-1xl font-bold">
                <b>Sub Total: </b>${parseFloat(price) * viewQuantity}
              </span>
            ) : null}
          </div>
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
                className="w-full input text-center input-bordered rounded-none max-w-xs"
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
              className="w-full btn btn-primary"
              onClick={() => setQuantity(1)}
            >
              Add To Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
