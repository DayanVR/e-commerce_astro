import { useState } from "react";

export default function AddToCart({
  stock,
  status,
}: {
  stock: number;
  status: string;
}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        {status === "In Stock" && (
          <>
            <div className="flex flex-row items-center gap-4 rounded-full bg-secondary px-4 py-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="size-5"
                aria-label="Decrease quantity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </button>
              <span className="min-w-[1ch] text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(Math.min(stock, quantity + 1))}
                className="size-5"
                aria-label="Increase quantity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </button>
            </div>

            <button
              type="button"
              className="ml-3 w-full rounded-full bg-black px-6 py-3 text-white hover:bg-black/90 md:w-48 lg:ml-6 lg:w-full"
            >
              Add to Cart
            </button>
          </>
        )}
        {status === "Out of Stock" && (
          <button
            type="button"
            className="ml-3 w-fit cursor-not-allowed rounded-full px-6 py-3 text-white hover:bg-black/90 md:w-48 lg:ml-6 lg:w-full"
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
