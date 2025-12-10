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
    images: ["/help.png", "/images/fact-adc.png"],
    href: "/#contact",
  },
    {
    id: 3,
    title: "Nutrition App",
    categories: ["React JS", "Frontend"],
    images: ["/images/adc-port-red.png", "/images/accordion.png"],
    href: "/#contact",
  },
  {
    id: 4,
    title: "Nutrition Regitser",
    categories: ["React JS", "Web Development"],
    images: ["/images/login-1.png", "/images/register.png"],
    href: "/#contact",
  },
    {
    id: 5,
    title: "Nutrition App",
    categories: ["React JS", "Frontend"],
    images: ["/images/dash-image.png", "/images/coach.png"],
    href: "/#contact",
  },
  {
    id: 6,
    title: "Marketing Dashboard",
    categories: ["React JS", "Web Development"],
    images: ["/images/dash-2.png", "/images/dash-figma.png"],
    href: "/#contact",
  },
    {
    id: 7,
    title: "BCC App",
    categories: ["React JS", "Frontend"],
    images: ["/form-bcc.png", "/images/footer-bbc.png"],
    href: "/#contact",
  },
  {
    id: 8,
    title: "Best Challenge Center",
    categories: ["React JS", "Web Development"],
    images: ["/images/choose-img.png", "/images/phone-bbc.png"],
    href: "/#contact",
  },
  
];

export default function Home() {
  return (
   <div className="flex flex-col md:flex-row min-h-screen md:-ml-20 bg-gray-100">
  {/* Sidebar */}
  <aside className="w-full md:w-1/4">
    <SideBar />
  </aside>

  {/* Contenu principal */}
  <main className="w-full md:w-4/4 p-10 lg:ml-6">
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
    <div className="flex flex-wrap justify-center gap-4  w-full md:-ml-15 pb-10">
      {["All", "Web App", "Frontend", "Backend", "Adobe XD", "Photoshop", "Figma", "Marketing Digital"].map((tab) => (
        <button
          key={tab}
          className="px-8 py-3 text-gray-500 font-medium rounded-full hover:bg-primary/80 hover:text-white transition"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Projets */}
{/* Projets */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects.map((project) => (
    <div key={project.id} className="project-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition">

      <Link href={project.href} className="block relative group w-full h-64 md:h-70 lg:h-96">
   
        {/* Image principale */}
        <Image2
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-contain transition duration-300 group-hover:opacity-0"
        />

        {/* Image hover */}
        {project.images[1] && (
          <Image2
            src={project.images[1]}
            alt={project.title + ' hover'}
            fill
             className={`object-contain absolute inset-0 opacity-0 transition duration-300 ${
            project.id === 5 ? 'group-hover:scale-110' : 'group-hover:opacity-100'
          } group-hover:opacity-100`}
          
        />
        )}
      </Link>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.categories.map((cat, i) => (
            <span key={i} className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">
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
