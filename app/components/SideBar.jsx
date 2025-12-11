"use client";

import Image from "next/image";
import Link from "next/link";
import { FiUser, FiFolder, FiFileText, FiGrid, FiMail,FiArrowRight } from "react-icons/fi";
import "./SideBar.css";

export default function SideBar() {
  return (
    <aside className="sidebar  md:flex md:w-1/4 lg:w-1/5 p-5 bg-white shadow-md flex flex-col items-center md:items-start fixed  h-screen">
      
      {/* Photo de profil */}
      <Image
        src="/fofo-2.jpg"
        width={100}
        height={100}
        alt="Photo de profil"
        className="profile-img mb-4"
      />

      {/* Nom et titre */}
      <h2 className=" name text-center md:text-left text-2xl font-bold text-gray-800">Foued Belajouza</h2>
      <p className="title-text text-center md:text-left mb-4">Full Stack Developer</p>

      <hr className="separator w-full mb-4" />

      {/* Menu */}
      <nav className="menu w-full flex flex-col gap-3">
        <Link href="/about" className="nav-link flex items-center gap-2">
          <FiUser className="icon" /> About Me
        </Link>
        <Link href="/projects" className="nav-link flex items-center gap-2">
          <FiFolder className="icon" /> Projects
        </Link>
        <Link href="/blogs" className="nav-link flex items-center gap-2">
          <FiFileText className="icon" /> Blogs
        </Link>
        <Link href="/#portfolio" className="nav-link flex items-center gap-2">
          <FiGrid className="icon" /> Portfolio
        </Link>
        <Link href="/contact" className="nav-link flex items-center gap-2">
          <FiMail className="icon" /> Contact
        </Link>
      </nav>

            <Link
    href="/#contact"
    className="hire-btn mt-auto text-center flex items-center justify-center gap-2 py-3 font-semibold"
  >
    Hire Me <FiArrowRight className="w-5 h-5 p-0" />
  </Link>
    </aside>
  );
}
