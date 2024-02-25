"use client";

import ProductBox from "@/components/ProductBox";
import { products } from "@/lib/tempDB";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Product() {
  const [viewProducts, setProducts] = useState([]);

  const removeItem = (index: number) => {
    console.log("1: ", viewProducts);
    let tempProducts = [...viewProducts];
    tempProducts.splice(index, 1);
    setProducts(tempProducts);
    console.log("2: ", tempProducts);
  };

  React.useEffect(() => {
    console.log("3", viewProducts);
  }, [viewProducts]);

  React.useEffect(() => {
    setProducts(products({ maxItems: 3 }));
  }, []);

  return (
    <div className="w-full flex justify-center items-start p-4 gap-2 flex-col lg:flex-row">
      <div className="w-full flex justify-center items-start p-4 gap-2 flex-col">
        <h2 className="px-5 py-5 text-3xl font-bold text-primary-content">
          Shoping Cart
        </h2>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          {viewProducts.map((product: any, index: number) => (
            <ProductBox
              side="horizontal"
              key={`productSection_product_${index}`}
              quantity={Math.round(Math.random() * 10)}
              name={product.title}
              category={product.category}
              price={product.price}
              id={product._id}
              image={product.image}
              onDelete={() => {
                removeItem(index);
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-2/5 flex justify-center items-start p-4 gap-2 flex-col">
        <h2 className="px-5 py-5 text-3xl font-bold text-primary-content">
          Order Summary
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 w-full px-6 py-6 rounded-md border-[1px] border-base-300">
          <div className="w-full flex flex-row justify-between gap-4">
            <p>
              <b>Quantity:</b>
            </p>
            <span>8</span>
          </div>

          <div className="w-full flex flex-row justify-between gap-4">
            <p>
              <b>Net Total:</b>
            </p>
            <span>$1000</span>
          </div>

          <div className="w-full flex flex-row justify-between gap-4">
            <p>
              <b>Discount:</b>
            </p>
            <span>$1</span>
          </div>

          <div className="w-full flex flex-row justify-between gap-4">
            <p>
              <b>Sub Total:</b>
            </p>
            <span>$999</span>
          </div>

          <a
            className="w-full"
            href="https://checkout.stripe.com/c/pay/cs_test_a1Y8VmGJB7YpLofAAPVtHZV7C4XFgUkfBFxIg6VUKmInYmEGMfwdVWHitO#fidkdWxOYHwnPyd1blpxYHZxWjA0SXx8bG9NZ2hddHN1fG1hZGdJd2pDUF1qRjc1c3xOUVFPclxgNXFxRHxBSEptNT1gdVJTcWRwfU5NZ1NJbWdcfWRnYHFvcEhDQHAwTzNQTlRWT2NvNGZsNTVAQFNDdWlfSScpJ2hsYXYnP34nYnBsYSc%2FJ2MyZDFhPWM3KDVgNmMoMTM9PCg9NjIyKDEzMTQzZGFgYWRhPD0xYzQ8NycpJ2hwbGEnPyc3MjBgMzc0PCg9NmE8KDE9NDEoZD02NCg1ZDdgMzw1MzcxMGBgZGcwMmMnKSd2bGEnPydjMzwzZDFkPSg0NjMwKDE1Y2coPGE3MihnMTc9PGRgYzJjYDFgNDYxMjMneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqY3BpaSh2cWRmbihgZmpoaGB3ZmAoZmlqcW1sa2IocmBnK3Ngd2ZgaStkdXUneCUl"
          >
            <button className="w-full btn btn-primary">Checkout</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
