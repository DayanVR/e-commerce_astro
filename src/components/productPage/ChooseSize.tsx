import { useState } from "react";

export default function ChooseSize({ sizes }: { sizes: string[] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>('Medium');

  return (
    <div className="mt-4 flex flex-row flex-wrap gap-3">
      {sizes.map((size) => (
        <button
          className={`rounded-full px-6 py-2 hover:opacity-60 hover:scale-105 hover:bg-gray-800 hover:text-white transition-all duration-300 ${selectedSize === size ? "bg-black text-white" : "bg-secondary "}`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
