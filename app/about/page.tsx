"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import './about.css'
import {FiArrowRight } from "react-icons/fi";
import ButtonLink from "../components/ButtonLink"
import HoverImage from "../components/HoverImage"
import { Star } from "phosphor-react";
import SideBar from "../components/SideBar";
const projects1 = [
  {
    id: 9,
    title: "ADC Transition App",
    categories: ["React JS", "Web Development"],
    images: ["/textps-2.jpg","/requin-2.jpg"],
    href: "/#contact",
  },
  {
    id: 10,
    title: "World Fitness App",
    categories: ["React JS", "Web Development"],
    images: ["/images/adc.jpg", "/images/adc.jpg"],
    href: "/#contact",
  },
      
];
const videos = [
  { id: 1, src: "/videos/video-cap.mp4" },
  { id: 2, src: "/videos/video-1.mp4" },
  { id: 3, src: "/videos/video-2.mp4" },
  { id: 4, src: "/videos/video-3.mp4" },
  { id: 5, src: "/videos/video-4.mp4" },
  { id: 6, src: "/videos/video-5.mp4" },
    { id: 7, src: "/videos/video-6.mp4" },
     { id: 8, src: "/videos/dribble-photo.mp4" },
       { id: 9, src: "/videos/video-7.mp4" },
];
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
 <div className="pt-32 pb-16 border-b overflow-hidden mt-10 lg:mt-0 bg-gray-100">
 <aside className="w-full md:w-1/4">
    <SideBar />
  </aside>
    <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
    {/* LEFT TEXT */}
    <div className="w-full lg:w-1/2  lg:pl-40">
      <div className="banner-content mt-10 max-w-lg ">

        <span className="text-gray-500 text-xl tracking-widest lg:pl-24 pe-5 me-5">
          HI, I'M A FREELANCER
        </span>

        <h1 className="text-4xl md:text-7xl font-bold mt-2 ps-5 ms-5 mb-3 leading-tight text-center">
          <span className="text-blue-600 ps-5 ms-5">{displayText}</span>
          <span className="animate-blink">|</span>
        </h1>

        <p className="pe-2 text-gray-600 text-lg leading-relaxed lg:pl-40 text-justify">
          I'm a web developer specializing in building scalable applications.
          Check my{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">blog</Link>,{" "}
          <Link href="/portfolio" className="text-blue-600 hover:underline">portfolio</Link> and{" "}
          <Link href="/resume" className="text-blue-600 hover:underline">resume</Link>.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-4 md:mt-8 lg:pl-40">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition"
          >
            View Portfolio →
          </Link>

       <Link
  href="/resume"
  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition flex items-center gap-2"
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
    <div className="w-full lg:w-1/2 pt-5 mt-5">
      <div className="flex flex-col justify-end items-end gap-6">

        {/* IMAGE */}
        <div className="mon-image animate-slideInRight overflow-hidden rounded-xl shadow-lg lg:-ml-20 w-48 h-56">
          <img
            src="/images/mon-image.jpg"
            alt="user"
            className="mon-image-profile object-contain rounded-xl"
          />
        </div>

        {/* TEXT ON RIGHT */}
        <div className="flex flex-col  leading-[2] items-center px-8 text-center">
          <h1 className="text-2xl font-bold user-title tracking-wide text-center">Foued Belajouza</h1>
          <h5 className="text-gray-600 mt-1  text-center">
            Full-Stack Developer • UI/UX Designer
          </h5>
          <p className="text-blue-600 tracking-tight text-center">
            Next.js · NestJS · React · TypeScript · MongoDB
          </p>
        </div>

      </div>
    </div>
    {/*numner*/}
<section className="pt-10 pb-16 lg:pl-40 ">
  <div className="container mx-auto px-4 lg:pl-40 mt-5 py-10">
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
<div className="w-full flex justify-center lg:pl-40 lg:ml-20">
  <div className="border-b border-gray-300 w-full max-w-4xl mx-auto lg:pl-40"></div>
</div>

<section className="pt-10 pb-10 flex items-center ">
  <div className="container mx-auto px-4 lg:pl-40">
    <div className="flex flex-wrap gap-3 justify-between items-end pb-16 md:flex-nowrap lg:pl-40">

      {/* Section heading */}
      <div data-aos="zoom-in-left" className="max-w-lg">
        <div className="flex items-center">
         <div className="w-1  h-12 bg-blue-600"></div>
 {/* title-line */}
          <h2 className="text-4xl  font-semibold text-gray-800 lg:ml-3">What I do</h2>
        </div>
        <p className="text-gray-600 md:mt-10 text-rebase text-justify max-w-[100%]">
          I have more than 2 years' experience building site webs for
          clients all over the world. Below is a quick overview of my
          main technical skill sets and technologies I use. Want to find
          out more about my experience? Check out my{" "}
          <Link href="/resume" className="text-blue-600 hover:underline">online resume</Link> and {""}
          <Link href="/portfolio" className="text-blue-600 hover:underline">project portfolio</Link>.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-end w-full lg:ml-20 mb-5">
      <Link
        href="/blogs"
        data-aos="zoom-in-right"
        className="bg-blue-600 mb-7 text-white px-5 py-5 md:px-5 md:py-3 rounded-full flex items-center gap-2 whitespace-nowrap hover:bg-blue-700 transition h-full "
      >
       Services<FiArrowRight className="w-5 h-5" />
      </Link>
</div>
    </div>
  </div>
</section>
<section>
<div className="flex flex-wrap gap-6 lg:pl-40">
  <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-40 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/assets/js.png"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-8"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        JavaScript
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
        I'm a JavaScript developer specializing in building scalable web
        applications using modern frameworks like React.js, Node.js, and Next.js.
      </p>
    </div>
  </div>
    <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-20 lg:-ml-20 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/assets/react.png"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-9"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        React.js
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
       I specialize in building dynamic and responsive web applications using React.js. With expertise in
          front-end and full-stack development, I create seamless
      user experiences powered by modern frameworks.
      </p>
    </div>
  </div>
    <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-40 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/assets/node.png"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-8"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        Node.js
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
  Backend Developer specializing in Node.js,
 building scalable and efficient server-side applications.
      </p>
    </div>
  </div>
     <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-20 lg:-ml-20 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/assets/jersey_13311337.png"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-9"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        Express.js
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
      Building fast and scalable web applications with Express.js and Node.js.
      </p>
    </div>
  </div>
   <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-40 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/figma.jpg"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-8"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        Figma
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
       Building modern, interactive, and responsive user interfaces with React.js and front-end technologies
      </p>
    </div>
    
  </div>
     <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-20 lg:-ml-20 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/assets/icon-nest.svg"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-9"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        Nest.js
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
     Passionate about creating clean, responsive designs using HTML5 and CSS3,
                  with a focus on user experience and modern layouts.
      </p>
    </div>
  </div>
   <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-40 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className=" flex flex-center justify-center gap-x-3 ">
      <img
        src="/assets/html.png"
        alt="js"
        className="service-icon object-contain h-10 w-8"
      />
        <img
        src="/assets/css.png"
        alt="js"
        className="service-icon object-contain h-10 w-8"
      />
</div>
      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
            HTML & CSS
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
         Passionate about creating clean, responsive designs using HTML5 and CSS3,
                  with a focus on user experience.
      </p>
    </div>
  </div>
   <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-20 lg:-ml-20 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className=" flex flex-center justify-center gap-x-3 ">
      <img
        src="/images/sass.png"
        alt="js"
        className="service-icon object-contain h-10 w-8"
      />
        <img
        src="/images/ps-photoshop.jpg"
        alt="js"
        className="service-icon object-contain h-10 w-8"
      />
</div>

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
    Photoshop,Ps      
    </h4>
      <p className="text-l text-gray-600 leading-[1.5]">
     Proficient in using Adobe Photoshop to create visually compelling designs,
     ensuring an optimal user experience and aesthetic appeal.
      </p>
    </div>
  </div>
  <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-40 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/XD.jpg"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-8"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        Adope XD
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
    Adobe XD is a powerful UI/UX design tool for creating interactive prototypes and seamless user
                  experiences
      </p>
    </div>
  </div>
    <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-20 lg:-ml-20 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/statistics_9743512.png"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-9"
      />
      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        Marketing Digital
      </h4>
      <p className="text-l text-gray-600 leading-[1.5]">
         Digital marketing leverages online channels to boost brand visibility,
                  engage audiences, and drive conversions effectively.
      </p>
    </div>
  </div>
    <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-40 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src="/images/in-design.jpg"
        alt="js"
        className="service-icon object-contain mx-auto h-10 w-8"
      />

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        In Design
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
     InDesign is a powerful tool for creating professional layouts, from magazines to marketing materials,
                  with precise typography and design control.
      </p>
    </div>
  </div>
    <div
    data-aos="fade-up"
    data-aos-duration="500"
    className="w-full md:w-1/2 lg:pl-20 lg:-ml-20 pt-5 text-justify"
  >
    <div className="service-card px-6 lg:px-10 py-5 lg:py-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <div className=" flex flex-center justify-center gap-x-3 ">
      <img
        src="/images/git_6038629.png"
        alt="js"
        className="service-icon object-contain h-10 w-8"
      />
        <img
        src="/images/github_2504911.png"
        alt="js"
        className="service-icon object-contain h-10 w-8"
      />
</div>

      <h4 className="text-xl md:text-xl font-semibold text-gray-800 mt-1">
        React.js
      </h4>

      <p className="text-l text-gray-600 leading-[1.5]">
       I specialize in building dynamic and responsive web applications using React.js. With expertise in
          front-end and full-stack development, I create seamless
      user experiences powered by modern frameworks.
      </p>
    </div>
  </div>
</div>
</section>
<section className=" me-5 w-full mt-20
    ml-0                
    md:ml-[300px]   next-project
    py-28 
    bg-[url('/images/bg.png')] 
    bg-no-repeat 
    bg-end 
    bg-cover 
    bg-fixed">
  <div
    className="container-touch container mx-auto md:px-20 px-5 flex flex-wrap justify-between items-center gap-6  md:gap-10 md:pl-20 md:max-w-full max-h-[180px]"
  >
    {/* Texte */}
    <div
      data-aos="zoom-in-left"
      className="max-w-xl"
    >
      <h3 className="text-sm md:text-2xl font-semibold  text-white/80 mb-3 md:mb-5 text-justify hover:text-blue-600">
        Let’s Work together on your next Project
      </h3>

      <p className="text-xs md:text-base  text-white/80">
        I am available for freelance projects. Hire me and get your
        project done.
      </p>
    </div>

    {/* Bouton */}
    <a
      data-aos="zoom-in-right"
      href="/contact"
      className="primary-btn text-xs bg-blue-600    hover:bg-white hover:text-blue-600 font-medium px-5 md:px-8 px-6 py-2 md:py-4 rounded-full flex items-center gap-2 h-fit text-white transition"
    >
   Let’s get in touch<FiArrowRight className="w-5 h-5" />
    </a>
  </div>
  </section>

<div className="w-full 
    ml-0 md:ml-[320px]
    next-project py-28 
    bg-no-repeat bg-end bg-cover bg-fixed">
  <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-justify gap-4 md:gap-10 pt-2">
    
    {/* Texte */}
    <div data-aos="zoom-in-left" className="max-w-xl">
      <h3 className="text-3xl md:text-4xl font-semibold text-gray/80 mb-3">
        Features Projects
      </h3>

      <p className="text-sm md:text-base text-gray/80">
        My step-by-step guide ensures a smooth project journey, from
        the initial consultation to the final delivery.
      </p>
    </div>

    {/* Bouton */}
    <a
      data-aos="zoom-in-right"
      href="/contact"
      className="primary-btn bg-blue-600 hover:bg-white hover:text-blue-600 font-medium px-5 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-2 h-fit text-white transition"
    >
      View Portfolio
      <FiArrowRight className="w-5 h-5" />
    </a>

  </div>
  </div>
<section
  className="
    w-full
    ml-0 md:ml-[320px]
    py-10
    bg-no-repeat bg-end bg-cover bg-fixed
  "
>
  <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    max-w-6xl
  ">
    {videos.map((video) => (
      <div
        key={video.id}
        id={`video-${video.id}`}
        className="hover-video-card group"
      >
        {/* Vidéo responsive */}
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
          <video
            src={video.src}
            className="
              absolute inset-0
              w-full h-full
              object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Bouton */}
        <div className="flex flex-wrap gap-2 items-center pt-3">
          <ButtonLink />
        </div>
      </div>
    ))}
  </div>
</section>

   <div data-aos="zoom-in-left" className="pt-5 mt-3  max-w-4xl grid-cols-1 md:grid-cols-1 w-full
    ml-0 md:ml-[320px]
    next-project">
        <div className="flex items-center pt-2 mt-2">
         <div className="w-1 h-20 bg-blue-600 relative top-5 "></div>
 {/* title-line */}
          <h2 className="text-4xl font-semibold text-gray-800 lg:ml-3">Testimonials</h2>
        </div>
        <p className="text-gray-600 ps-5 text-rebase text-justify max-w-[100%]">
         See how I've helped my formator succeed. working with him about his projects.
                  </p>
      </div>
{/*testimonial*/}
<div className="grid-cols-1 md:grid-cols-1 w-full slide-card px-6 px-md-5 pt-5 mt-5 py-md-10 bgn2-color box-shadow1 br-left-p1 bg-gray-50 max-w-6xl md:ml-[320px]">
                    <div className="grid-cols-1 md:grid-cols-1 w-full flex flex-wrap justify-start gap-1 mb-2 mb-md-3">
                  <Star weight="fill" size={24} color="#f5c518" />
                  <Star weight="fill" size={24} color="#f5c518" />
                  <Star weight="fill" size={24} color="#f5c518" />
                  <Star weight="fill" size={24} color="#f5c518" />
                  <Star weight="fill" size={24} color="#f5c518" />
                    </div>
                    <p className="text-rebase text-left">
                      “ I highly recommend my studend to anyone looking for a
                      high-quality and full stuck web development.”
                    </p>
                    <div className="ml-0 md:ml-[0px] flex flex-wrap justify-start gap-3 align-items-center mt-4 mt-md-7">
                      <img src="/images/about1.png" alt="testimonial" className="testimonial_img w-20 h-20"/>

                      <div className="flex flex-col justify-center text-justify">
                        <span className="fs-eight d-block n5-color">Ibrahim Lokmani
                        </span>
                        <span className="fs-nine d-block n5-color">Tunisia
                        </span>
                      </div>
                    </div>
                  </div>
    

  </div>
</div>

  );
}
