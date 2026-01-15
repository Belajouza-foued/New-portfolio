"use client";

import Image2 from "next/image";
import Link from "next/link";
import SideBar from "./components/SideBar";
import '../app/page.css'
import { FiArrowRight } from "react-icons/fi";
const tabs = [
  { label: "All" },
  { label: "Web App", href: "/about"  },
  { label: "FrontEnd", href: "/about"  },
  { label: "Figma", href: "https://www.figma.com" },
  { label: "BackEnd", href: "/about" },
   { label: "Adope XD", href: "/about" },
   { label: "Photoshop", href: "/about" },
  { label: "Marketing digitale", href: "/about" },
  
];
const projects = [
  {
    id: 1,
    title: "ADC Transition App",
    categories: ["React JS", "Web Development"],
    images: ["/assets/fitness-6.jpg","/assets/fitness-5.jpg"],
    href: "/contact",
  },
  {
    id: 2,
    title: "World Fitness App",
    categories: ["React JS", "Web Development"],
    images: ["/assets/fitness-1.jpg", "/assets/fitness-8.jpg"],
    href: "https://react-project-git-world-fitness-foueds-projects-55b6a7cf.vercel.app/",
  },
    {
    id: 3,
    title: "Barber Shop",
    categories: ["React JS", "Frontend"],
    images: ["/assets/barber-2.jpg", "/assets/barber-3.jpg"],
    href: "/contact",
  },
  {
    id: 4,
    title: "Nutrition Regitser",
    categories: ["React JS", "Web Development"],
    images: ["/assets/fitness-4.jpg", "/assets/fitness-3.jpg"],
    href: "https://react-project-git-world-fitness-foueds-projects-55b6a7cf.vercel.app/",
  },
    {
    id: 5,
    title: "Nutrition App",
    categories: ["React JS", "Frontend"],
    images: ["/assets/fitness-7.jpg", "/assets/img-10.jpg"],
    href: "https://react-project-git-world-fitness-foueds-projects-55b6a7cf.vercel.app/",
  },
  {
    id: 6,
    title: "Marketing Dashboard",
    categories: ["Figma", "AdopeXD"],
    images: ["/images/dash-2.png", "/images/dash-figma.png"],
    href: "/contact",
  },
    {
    id: 7,
    title: "Best Challenge Center",
    categories: ["React JS", "Frontend"],
    images: ["/assets/choose-1.jpg", "/assets/choose-2.jpg"],
    href: "https://bcc-socity.vercel.app/",
  },
  {
    id: 8,
    title: "Best Challenge Center",
    categories: ["React JS", "Web Development"],
    images: ["/assets/choose-3.jpg", "/assets/choose-4.jpg"],
    href: "https://bcc-socity.vercel.app/",
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
  <main className="col-span-12 lg:col-span-9">
  <section className="section-projects">
  <h3 className="title-projects  md:text-2xl pt-10 mt-10
  text-sm
  font-semibold
  text-[#333]
   flex
  justify-center">
    A collection of my best projects
  </h3>

  <p className="paragraph-projects pt-10 ps-10 text-[#666]
  md:max-w-[700px]
  max-w-[300px]
   mx-auto
  md:text-base
  text-sm
    flex
      text-center
      text-justify
  justify-start pe-10">
    With many years in web development, I acquired extensive experience
    working on projects across freelance and technologies. Let me show
    you my best creations.
  </p>

  <Link href="/contact" className="btn-hire mt-10">
    Hire Me <FiArrowRight className="w-4 h-4" />
  </Link>
</section>


    {/* Filtre des projets */}
    <div className="flex flex-wrap justify-center gap-4  md:w-full md:-ml-15 pb-10 w-[250px] web-app"> {tabs.map((tab, i) =>
    tab.href ? (
      <a
        key={i}
        href={tab.href}
        target={tab.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="px-8 py-3 text-gray-500 font-medium rounded-full hover:bg-blue-600 hover:text-white transition"
      >
        {tab.label}
      </a>
    ) : (
      <button
        key={i}
        className="px-8 py-3 text-gray-500 font-medium rounded-full hover:bg-blue-600 hover:text-white transition"
      >
        {tab.label}
      </button>
      ))}
    </div>

    {/* Projets */}
{/* Projets */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-6xl max-w-4xl">
  {projects.map((project) => (
    <div key={project.id} className="project-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition">

      <Link href={project.href} className="block relative group md:w-full h-32 w-48 md:h-70 lg:h-96 mx-auto">
   
        {/* Image principale */}
        <Image2
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-contain transition duration-300 group-hover:opacity-0 w-full h-auto"
        />

        {/* Image hover */}
        {project.images[1] && (
          <Image2
            src={project.images[1]}
            alt={project.title + ' hover'}
            fill
             className={`object-contain absolute inset-0 opacity-0 transition duration-300 w-full h-auto ${
            project.id === 5 ? 'group-hover:scale-110' : 'group-hover:opacity-100'
          } group-hover:opacity-100`}
          
        />
        )}
      </Link>

      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.categories.map((cat, i) => (
            <span key={i} className="px-3 py-1 md:px-3 md:py-1  text-sm link-portfolio">
              {cat}
            </span>
          ))}
        </div>

        <Link href={project.href} className="md:text-lg  font-semibold text-gray-800 hover:text-blue-500 block link-title">
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
