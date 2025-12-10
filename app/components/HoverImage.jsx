"use client";

import Image from "next/image";

export default function HoverImage({ img1, img2, alt }) {
  return (
    <div className="relative w-full h-64 md:h-72 lg:h-96 group overflow-hidden border border-gray-300 rounded-xl">

      {/* Image principale */}
      <Image
        src={img1}
        alt={alt}
        fill
        className="object-contain transition duration-300 group-hover:opacity-0"
      />

      {/* Image hover */}
      {img2 && (
        <Image
          src={img2}
          alt={`${alt} hover`}
          fill
          className="object-contain absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 border border-gray-300 rounded-xl"
        />
      )}

    </div>
  );
}
