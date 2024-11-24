import { useState } from "react";

export default function ImageSelection({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      <div className="h-[504px] flex-1 object-contain">
        <img
          className="max-m:mx-auto aspect-square max-h-72 min-w-52 max-w-72 flex-1 rounded-xl bg-tertiary md:h-full md:max-h-full md:w-full md:max-w-full"
          src={selectedImage}
          alt="product image"
        />
      </div>
      <div className="flex h-[106px] snap-x gap-3 max-md:overflow-y-clip max-md:overflow-x-scroll xs:w-[358px] sm:w-full max-md:sm:justify-center md:h-full md:max-h-full md:min-h-96 md:w-40 md:flex-col">
        {images.map((image) => (
          <img
            onClick={() => setSelectedImage(image)}
            height={106}
            width={111}
            className="aspect-square hover:bg-opacity-50 rounded-xl bg-tertiary object-cover md:h-40 md:w-96 cursor-pointer"
            src={image}
            alt="product image"
          />
        ))}
      </div>
    </>
  );
}
