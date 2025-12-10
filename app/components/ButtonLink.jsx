"use client";
import Link from "next/link";
export default function ButtonLink({ className = "" }) {
  return (
      <div className="flex flex-wrap gap-2 items-center pt-5">
          <Link href="/">
        <span className="px-3 py-2 text-sm bg-gray-200 rounded-full text-gray-700 hover:bg-primary  hover:text-white ">
       React JS
     </span>
   </Link>
   <Link href="/">
     <span className="px-3 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-primary  hover:text-white">
       FrontEnd
     </span>
     </Link>
   <Link href="/">
     <span className="px-3 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white">
       BackEnd
     </span>
     </Link>
   </div>
  );
}
