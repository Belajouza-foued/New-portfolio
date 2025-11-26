"use client";
import Image from "next/image";
import Link from "next/link";
import SideBar from "./components/SideBar";
import '../app/page.css'
import { FiArrowRight } from "react-icons/fi";
const projects = [
  {
    id: 1,
    title: "ADC Transition App",
    categories: ["React JS", "Web Development"],
    images: ["/adc-portfolio.png"],
    href: "/portfolio_details",
  },
  {
    id: 2,
    title: "World Fitness App",
    categories: ["React JS", "Web Development"],
    images: ["/help.png", "/nutrition.png"],
    href: "/portfolio_details",
  },
];

export default function Home() {
  return (
   <div className="flex flex-col md:flex-row min-h-screen">
  {/* Sidebar */}
  <aside className="w-full md:w-1/4">
    <SideBar />
  </aside>

  {/* Contenu principal */}
  <main className="w-full md:w-4/4 p-5">
  <section className="section-projects">
  <h3 className="title-projects">
    A collection of my best projects
  </h3>

  <p className="paragraph-projects">
    With many years in web development, I acquired extensive experience
    working on projects across freelance and technologies. Let me show
    you my best creations.
  </p>

  <Link href="/#contact" className="btn-hire">
    Hire Me <FiArrowRight className="w-5 h-5" />
  </Link>
</section>


    {/* Filtre des projets */}
    <div className="flex flex-wrap justify-center gap-4 mb-10 w-full md:-ml-15">
      {["All", "Web App", "Frontend", "Backend", "Adobe XD", "Photoshop", "Figma", "Marketing Digital", "InDesign"].map((tab) => (
        <button
          key={tab}
          className="px-4 py-2 text-gray-500 font-medium rounded hover:bg-gray-100 transition"
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Projets */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-lg shadow p-4">
          <Link href={project.href} className="block mb-4">
            <div className="flex gap-2 overflow-hidden rounded-lg">
              {project.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover rounded"
                />
              ))}
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-wrap">
              {project.categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
                >
                  {cat}
                </span>
              ))}
            </div>
            <Link href={project.href} className="text-xl font-semibold text-gray-800 hover:text-blue-500">
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
