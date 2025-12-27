// components/Footer.tsx
"use client"
import Link from "next/link";
export default function Footer() {
  return (
   <div className="pt-10 bg-gray-100">
  <footer className="
    text-gray-700 
    py-5 
    flex 
    flex-col 
    gap-3
    items-center
    text-center
    md:flex-row 
    md:justify-between 
    md:text-left
    max-w-7xl 
    mx-auto 
    px-4
  ">
    <p className="
  text-sm
  text-center
  md:text-left
  md:ml-[250px]
">
      Copyright © 2025.{" "}
      <Link
        href="/contact"
        className="text-blue-600 underline underline-offset-4"
      >
        Foued Belajouza
      </Link>
      . All rights reserved.
    </p>

    <p>
      By{" "}
      <Link
        href="/contact"
        className="text-blue-600 underline underline-offset-4"
      >
        Foued Belajouza
      </Link>
    </p>
  </footer>
</div>

  );
}
