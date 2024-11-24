import type { Product } from "@lib/types";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <h1 className="font-satochi text-lg font-bold">Product Details</h1>
      <div className="space-y-1.5">
        <h2 className="inline-block font-satochi font-bold">Brand:</h2>
        <p className="ml-1 inline text-sm">{product.brand}</p>
        <br />
        <h2 className="inline-block font-satochi font-bold">Tags:</h2>
        <p className="ml-1 inline text-sm">{product.tags.join(", ")}</p>
        <br />
        <h2 className="inline-block font-satochi font-bold">Weight:</h2>
        <p className="ml-1 inline text-sm">{product.weight} lb</p>
        <br />
        <h2 className="inline-block font-satochi font-bold">Dimensions:</h2>
        <p className="ml-1 inline text-sm">
          {product.dimensions.width} x {product.dimensions.height} x{" "}
          {product.dimensions.depth}
        </p>
        <br />
        <h2 className="inline-block font-satochi font-bold">SKU:</h2>
        <p className="ml-1 inline text-sm">{product.sku}</p>
      </div>
    </>
  );
}
