"use client";

import Image from "next/image";
import Link from "next/link";
import { FiUser, FiFolder, FiFileText, FiGrid, FiMail,FiArrowRight } from "react-icons/fi";
import "./SideBar.css";

export default function SideBar() {
  return (
    <aside className="sidebar flex
    flex-row
    md:flex-col
    w-full
    md:w-64
     md:p-5
    bg-white
    shadow-md
    fixed
    z-50
    md:h-screen
    h-auto
    top-0
    left-0
    items-center
    md:items-center
    gap-3">
      
      {/* Photo de profil */}
       <div className="md:flex-col flex-col itmes-center justify-center mx-auto side-res">
      <Image
        src="/fofo-2.jpg"
        width={50}
        height={50}
        alt="Photo de profil"
        className="profile-img md:w-[80px]"
      />

      {/* Nom et titre */}
           <h2 className="name text-center md:text-2xl font-bold text-gray-800">Foued Belajouza</h2>
      <Link href="/resume" className="title-text text-left md:text-left mb-4">Full Stack Developer</Link>

      <hr className="separator w-full mb-4" />

      {/* Menu */}
      <nav className="menu md:w-full flex flex-col items-start gap-6">
        <Link href="/about" className="nav-link flex items-center gap-2">
          <FiUser className="icon-s" />
            <span className="about-text">About Me</span>
        </Link>
        <Link href="/resume" className="nav-link flex items-center gap-2">
          <FiFolder className="icon-s" /> Resume
        </Link>
        <Link href="/blogs" className="nav-link flex items-center gap-2">
          <FiFileText className="icon-s" /> Blogs
        </Link>
        <Link href="/" className="nav-link flex items-center gap-2">
          <FiGrid className="icon-s" /> Portfolio
        </Link>
        <Link href="/contact" className="nav-link flex items-center gap-2">
          <FiMail className="icon-s" /> Contact
        </Link>
      </nav>
  </div>
            <Link
    href="/contact"
    className="hire-btn mt-auto flex items-center justify-center gap-2 py-3 font-semibold"
  >
    Hire Me <FiArrowRight className="w-5 h-5 p-0" />
  </Link>

    </aside>
  );
}
