"use client";

import Image2 from "next/image";
import Link from "next/link";
import SideBar from "./components/SideBar";
import '../app/page.css'
import { FiArrowRight } from "react-icons/fi";
const projects = [
  {
    id: 1,
    title: "ADC Transition App",
    categories: ["React JS", "Web Development"],
    images: ["/adc-portfolio.png","/about.png"],
    href: "/#contact",
  },
  {
    id: 2,
    title: "World Fitness App",
    categories: ["React JS", "Web Development"],
    images: ["/help.png", "/about.png"],
    href: "/#contact",
  },
];

export default function Home() {
  return (
   <div className="flex flex-col md:flex-row min-h-screen md:-ml-20">
  {/* Sidebar */}
  <aside className="w-full md:w-1/4">
    <SideBar />
  </aside>

  {/* Contenu principal */}
  <main className="w-full md:w-4/4 p-5">
  <section className="section-projects p-5">
  <h3 className="title-projects pt-5">
    A collection of my best projects
  </h3>

  <p className="paragraph-projects pt-5">
    With many years in web development, I acquired extensive experience
    working on projects across freelance and technologies. Let me show
    you my best creations.
  </p>

  <Link href="/#contact" className="btn-hire mt-10">
    Hire Me <FiArrowRight className="w-5 h-5" />
  </Link>
</section>


    {/* Filtre des projets */}
    <div className="flex flex-wrap justify-center gap-4  w-full md:-ml-15">
      {["All", "Web App", "Frontend", "Backend", "Adobe XD", "Photoshop", "Figma", "Marketing Digital", "InDesign"].map((tab) => (
        <button
          key={tab}
          className="px-8 py-10 text-gray-500 font-medium rounded hover:bg-gray-100 transition"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Projets */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects.map((project) => (
   <div key={project.id} className="project-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
  <Link href={project.href} className="block relative group">
    {/* Image par défaut */}
    <Image2
      src={project.images[0]}
      width={500}
      height={300}
      alt={project.title}
      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-90"
    />

    {/* Image hover */}
    {project.images[1] && (
      <Image2
        src={project.images[1]} // deuxième image
        width={500}
        height={300}
        alt={project.title + " hover"}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    )}

    {/* Overlay noir si tu veux */}
    <div className=""></div>
  </Link>

  <div className="p-4">
    <div className="flex flex-wrap gap-2 mb-2">
      {project.categories.map((cat, i) => (
        <span key={i} className="px-3 py-3 mt-5 text-sm bg-gray-200 rounded-full text-gray-700">
          {cat}
        </span>
      ))}
    </div>
    <Link href={project.href} className="text-lg font-semibold text-gray-800 hover:text-blue-500 block">
      {project.title}
    </Link>
  </div>
</div>

  ))}
</div>



                  
  </main>
</div>

  );
}
