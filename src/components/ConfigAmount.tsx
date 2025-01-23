import { useState } from "react";
export default function ConfigAmount({
  stock,
}: {
  stock: number;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-row items-center gap-4 rounded-full bg-secondary px-4 w-fit py-3">
      <button
        type="button"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        className="size-5"
        aria-label="Decrease quantity"
      >
        <svg viewBox="0 0 448 512" aria-hidden="true">
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
        <svg viewBox="0 0 448 512" aria-hidden="true">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </button>
    </div>
  );
}
