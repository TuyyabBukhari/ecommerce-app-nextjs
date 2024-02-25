"use client";

import ProductBox from "@/components/ProductBox";
import { products } from "@/lib/tempDB";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

function ProductCategory({ params: { category } }: any) {
  const categoriesInfo: any = {
    mens: {
      key: "men",
      title: "Mane Footwear",
      subTitle: "Elevate your style, gentlemen.",
    },
    womens: {
      key: "women",
      title: "Femme Kicks",
      subTitle: "Empowering women with every step.",
    },
    kids: {
      key: "kid",
      title: "Tiny Treads",
      subTitle: "Big adventures, little feet.",
    },
  };

  const currentCategory = categoriesInfo[category];

  if (!currentCategory) redirect("/products");

  const [viewProducts, setProducts] = useState(
    products({ category: currentCategory.key })
  );

  React.useEffect(() => {
    console.log(products({ category: currentCategory.key }));
  }, []);

  return (
    <div className="min-w-full flex justify-center items-center p-4 gap-2 flex-col">
      <div className="flex justify-center items-center p-4 gap-2 flex-col">
        <h3 className="text-1xl font-bold text-secondary">
          {currentCategory.title}
        </h3>
        <h4 className="text-3xl font-bold text-primary-content">
          {currentCategory.subTitle}
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

export default ProductCategory;
