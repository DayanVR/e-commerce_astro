import type { Product } from "@lib/types";
import { useState } from "react";
import ProductDetail from "./productInfoSelect/productDetail";
import ProductReview from "./productInfoSelect/productReview";
import ProductFaqs from "./productInfoSelect/productFaqs";
import clsx from "clsx";

export default function ProductInfo({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const tabs = ["Product Details", "Ratings & Reviews", "FAQs"];

  return (
    <section>
      <div className="flex justify-between gap-4">
        {tabs.map((tab, index) => (
          <button
            type="button"
            className={clsx(
              "text-sm font-normal text-black pb-2 opacity-60 hover:opacity-100",
              selected === index && "border-b-2 border-black !opacity-100 !font-medium"
            )}
            key={index}
            onClick={() => setSelected(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="container mx-auto pt-4 border-t-[1px]"></div>
      {selected === 0 ? (
        <ProductDetail product={product} />
      ) : selected === 1 ? (
        <ProductReview reviews={product.reviews} />
      ) : (
        <ProductFaqs product={product} />
      )}
    </section>
  );
}
