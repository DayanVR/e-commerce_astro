import ConfigAmount from "@components/ConfigAmount";
import { useState } from "react";

export default function AddToCart({
  stock,
  status,
}: {
  stock: number;
  status: boolean;
}) {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        {status && (
          <>
            <ConfigAmount stock={stock} />

            <button
              type="button"
              className="ml-3 w-full rounded-full bg-black px-6 py-3 text-white transition hover:bg-black/80 max-lg:md:w-5/12 lg:ml-6 lg:w-84"
            >
              Add to Cart
            </button>
          </>
        )}
        {!status && (
          <button
            type="button"
            className="ml-3 w-fit cursor-not-allowed rounded-full bg-black px-6 py-3 text-white hover:bg-black/80 md:w-48 lg:ml-6 lg:w-full"
          >
            Out of Stock
          </button>
        )}
      </div>
      {stock <= 10 && (
        <div className="mt-4">
          <p className="text-sm text-red-500 opacity-90">
            Only {stock} left in stock, order soon.
          </p>
        </div>
      )}
    </>
  );
}
