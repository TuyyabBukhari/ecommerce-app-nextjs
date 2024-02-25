"use client";

import ProductBox from "@/components/ProductBox";
import { client } from "@/lib/sanityClient";
import { products } from "@/lib/tempDB";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProductSection() {
  const [viewProducts, setProducts] = useState(
    products({
      maxItems: 9,
    })
  );

  // const getAllProducts = async () => {
  //   try {
  //     const result = await client.fetch(
  //       `*[_type == "product"]{_id, title, image, price, category}[0..8]`
  //     );

  //     setProducts(result);
  //   } catch (e: any) {
  //     console.error("Error fetching products:", e.message);
  //   }
  // };

  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  return (
    <div className="min-w-full flex justify-center items-center p-4 gap-2 flex-col">
      <div className="flex justify-center items-center p-4 gap-2 flex-col">
        <h3 className="text-1xl font-bold text-secondary">NEW ARRIVALS</h3>
        <h4 className="text-3xl font-bold text-primary-content">
          Discover Our Latest Arrivals!
        </h4>
      </div>

      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 py-2 w-full grid gap-4">
        {viewProducts.map((product: any, index: number) => (
          <ProductBox
            key={`productSection_product_${index}`}
            name={product.title}
            category={product.category}
            price={product.price}
            id={product._id}
            image={product.image}
          />
        ))}
      </div>

      <div className="flex justify-center items-center p-4 gap-2 flex-col w-full">
        <Link href="/products">
          <button className="btn btn-secoundary">View All Products</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductSection;
