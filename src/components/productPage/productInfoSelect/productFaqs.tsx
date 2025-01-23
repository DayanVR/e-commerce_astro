import type { Product } from "@lib/types";

export default function ProductFaqs({ product }: { product: Product }) {
  return (
    <>
      <h1>FAQs</h1>
      <div className="flex flex-col gap-3">
        <details className="border-b pb-1.5" open>
          <summary>Warranty</summary>
          {product.warrantyInformation}
        </details>
        <details className="border-b pb-1.5">
          <summary>Shipping</summary>
          {product.shippingInformation}
        </details>
        <details className="border-b pb-1.5">
          <summary>Returns</summary>
          {product.returnPolicy}
        </details>
      </div>
    </>
  );
}
