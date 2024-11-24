import type { Product } from "@lib/types";
import { useState } from "react";
import ProductDetail from "./productInfoSelect/productDetail";
import ProductReview from "./productInfoSelect/productReview";
import ProductFaqs from "./productInfoSelect/productFaqs";

export default function ProductInfo({ product }: { product: Product }) {
  const [selected, setSelected] = useState(0);
  const tabs = ["Product Details", "Ratings & Reviews", "FAQs"];

  return (
    <section>
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <button type="button" key={index} onClick={() => setSelected(index)}>
            {tab}
          </button>
        ))}
      </div>
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
