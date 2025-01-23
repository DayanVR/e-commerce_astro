import { useState } from "react";

export default function ChooseSize({ sizes }: { sizes: (string | number)[] }) {
  const [selectedSize, setSelectedSize] = useState<string | number | null>(
    typeof sizes[0] === "number" ? 9 : "Medium",
  );

  return (
    <div className="mt-4 flex flex-row flex-wrap gap-3">
      {sizes.map((size) => (
        <button
          type="button"
          className={`rounded-full px-6 py-2 text-sm transition-all duration-300 hover:scale-105 hover:bg-black/95 hover:text-white hover:opacity-60 lg:text-base ${selectedSize === size ? "bg-black text-white" : "bg-secondary"}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
