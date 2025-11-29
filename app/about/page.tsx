"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import './about.css'
import {FiArrowRight } from "react-icons/fi";

export default function About() {
  // Texte dynamique
  const typeArray = ["Developer", "Designer"];
  const [displayText, setDisplayText] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isAdding) {
        // Ajouter une lettre
        setDisplayText(typeArray[typeIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === typeArray[typeIndex].length) {
          setIsAdding(false);
        }
      } else {
        // Supprimer une lettre
        setDisplayText(typeArray[typeIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsAdding(true);
          setTypeIndex((prev) => (prev + 1) % typeArray.length);
        }
      }
    }, isAdding ? 200 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isAdding, typeIndex]);

  return (
 <div className="pt-32 pb-16 border-b overflow-hidden mt-10 lg:mt-0">
  <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">

    {/* LEFT TEXT */}
    <div className="w-full lg:w-1/2  lg:pl-40">
      <div className="banner-content mt-10 max-w-lg ">

        <span className="text-gray-500 text-lg tracking-widest lg:pl-40">
          HI, I'M A FREELANCER
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3 leading-tight text-center">
          <span className="text-blue-600">{displayText}</span>
          <span className="animate-blink">|</span>
        </h1>

        <p className="pe-2 text-gray-600 text-base leading-relaxed lg:pl-40 text-justify">
          I'm a web developer specializing in building scalable applications.
          Check my{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">blog</Link>,{" "}
          <Link href="/portfolio" className="text-blue-600 hover:underline">portfolio</Link> and{" "}
          <Link href="/resume" className="text-blue-600 hover:underline">resume</Link>.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-4 md:mt-8 lg:pl-40">
          <Link
            href="/portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            View Portfolio →
          </Link>

       <Link
  href="/resume"
  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition flex items-center gap-2"
>
  View Resume
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 lg:-ml-2"
  >
 <path d="M19.5 14.25v3.75A2.25 2.25 0 0 1 17.25 20.25H6.75A2.25 2.25 0 0 1 4.5 18V6A2.25 2.25 0 0 1 6.75 3.75h6A2.25 2.25 0 0 1 15 6v2.25h3.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75zM12 13.5H8.25a.75.75 0 1 0 0 1.5H12a.75.75 0 1 0 0-1.5zM8.25 10.5h7.5a.75.75 0 1 0 0-1.5h-7.5a.75.75 0 1 0 0 1.5z" />
  </svg>
</Link>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE + TEXT */}
    <div className="w-full lg:w-1/2">
      <div className="flex justify-end lg:ml-20 items-start gap-6">

        {/* IMAGE */}
        <div className="profile-image w-80 h-72 bg-white relative animate-slideInDown overflow-hidden rounded-xl shadow-lg">
          <img
            src="/images/foued-3.jpg"
            alt="user"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* TEXT ON RIGHT */}
        <div className="flex flex-col justify-center text-center pt-10 lg:ml-2 leading-[2]">
          <h1 className="text-3xl font-bold user-title tracking-wide">Foued Belajouza</h1>
          <h5 className="text-gray-600 mt-1 tracking-wider">
            Full-Stack Developer • UI/UX Designer
          </h5>
          <p className="text-blue-600 tracking-wide">
            Next.js · NestJS · React · TypeScript · MongoDB
          </p>
        </div>

      </div>
    </div>
    {/*numner*/}
<section className="pt-10 pb-16 lg:pl-40">
  <div className="container mx-auto px-4 lg:pl-40">
    <div className="flex flex-wrap xl:flex-nowrap items-center gap-6 md:gap-10 mt-10">
      
      {/* Years of Experience */}
      <div className="flex items-center gap-3 xl:gap-6">
        <h2 className="text-5xl font-semibold text-blue-600">
          <span className="counter">3</span>
        </h2>
        <div className="w-px h-10 bg-gray-300"></div>
        <span className="text-gray-600">Years of Experience</span>
      </div>

      {/* Projects Completed */}
      <div className="flex items-center gap-3 xl:gap-6">
        <h2 className="text-5xl font-semibold text-blue-600">
          <span className="counter">10</span>
        </h2>
        <div className="w-px h-10 bg-gray-300"></div>
        <span className="text-gray-600">Projects Completed</span>
      </div>

      {/* Clients Worldwide */}
      <div className="flex items-center gap-3 xl:gap-6">
        <h2 className="text-5xl font-semibold text-blue-600 flex gap-1">
          <span className="counter">1</span>k
        </h2>
        <div className="w-px h-10 bg-gray-300"></div>
        <span className="text-gray-600">Clients Worldwide</span>
      </div>

    </div>
  </div>
</section>
<section className="pt-32 pb-32 ">
  <div className="container mx-auto px-4 lg:pl-40">
    <div className="flex flex-wrap gap-3 justify-between items-end pb-16 md:flex-nowrap lg:pl-40">

      {/* Section heading */}
      <div data-aos="zoom-in-left" className="max-w-lg">
        <div className="flex items-center">
         <div className="w-1  h-12 bg-blue-600"></div>
 {/* title-line */}
          <h2 className="text-4xl font-semibold text-gray-800 lg:ml-3">What I do</h2>
        </div>
        <p className="text-gray-600 mt-2 md:mt-5 text-base text-justify max-w-[100%]">
          I have more than 2 years' experience building site webs for
          clients all over the world. Below is a quick overview of my
          main technical skill sets and technologies I use. Want to find
          out more about my experience? Check out my{" "}
          <Link href="/resume" className="text-blue-600 hover:underline">online resume</Link> and {""}
          <Link href="/portfolio" className="text-blue-600 hover:underline">project portfolio</Link>.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-end w-full lg:ml-20">
      <Link
        href="/blog"
        data-aos="zoom-in-right"
        className="bg-blue-600 mb-7 text-white px-5 py-5 md:px-5 md:py-3 rounded-full flex items-center gap-2 whitespace-nowrap hover:bg-blue-700 transition h-full "
      >
       Services<FiArrowRight className="w-5 h-5" />
      </Link>
</div>
    </div>
  </div>
</section>

  </div>
</div>

  );
}
