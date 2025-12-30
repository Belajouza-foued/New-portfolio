"use client";

import { useState } from "react";

export default function MoreContact({className}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mt-5 pb-2 text-center">
      {/* Titre */}
      <p className="underline underline-offset-4 text-xs md:text-xl leading-7 text-blue-700">
       For more information, click this button:
      </p>

      {/* Texte caché */}
      {showMore && (
        <div className="mt-3 space-y-3 text-gray-700">
          <p>
            <strong>Email :</strong> foued.belajouza@gmail.com
          </p>
          <p>
            <strong>Phone Number :</strong> +216 58 860 181
          </p>
        </div>
      )}

      {/* Bouton */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-3 px-4 py-2 border border-blue-600 text-blue-600
                   rounded-lg hover:bg-blue-600 hover:text-white 
                   transition font-medium more-contact"
      >
        {showMore ? "Less Contact" : "More Contact"}
      </button>
    </div>
  );
}
