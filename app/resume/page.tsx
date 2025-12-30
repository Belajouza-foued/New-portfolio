"use client";
import { FaMapMarkerAlt, FaGithub,FaPhoneAlt } from "react-icons/fa";
import { GiHobbitDwelling } from "react-icons/gi";
import { useState } from "react";
import { FaGlobe, FaLinkedin } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";
import { FaLanguage } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { SiExpertsexchange } from "react-icons/si";
import MoreContact from "../components/MoreContact";
   import { CiPhone } from "react-icons/ci";
   import SideBar from "../components/SideBar";
import { EnvelopeOpen } from "phosphor-react";
import Link from "next/link";
import './Resume.css'



export default function Resume() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
  <div className="pt-32 pb-16 border-b overflow-hidden mt-10 lg:mt-0 bg-gray-100 lg:-ml-10">
    <aside>
      <SideBar/>
    </aside>
      <div className="container mx-auto px-20 flex flex-wrap items-center justify-center">
  <div className="w-full 
      ml-0 md:ml-[320px]
      next-project py-28 
      bg-no-repeat bg-end bg-cover bg-fixed">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-justify gap-4 md:gap-10 pt-2">
      
      {/* Texte */}
      <div data-aos="zoom-in-left" className="md:max-w-xl md:-ml-2 -ml-6">
        <h3 className="text-xl md:text-4xl font-semibold text-blue-600">
          Foued Belajouza
        </h3>
  
        <p className="text-xs md:text-base text-gray">
        Junior Developer
        </p>
      </div>
  
      {/* Bouton */}
     <div className="flex flex-nowrap justify-center items-center foued-contact">
       <div className="w-0.5 h-24 bg-gray-600 opacity-50 decoration-2 me-2"></div>
      <ul className=" text-gray-500 text-xs md:text-sm  leading-[1.5] font-thin pl-4 -ml-10 sm:ml-6 md:ml-0
">
         <li className="flex items-center gap-2">
       <FaPhoneAlt className="text-blue-500 hover:text-gray-600"/>
     <span>+216 58 860 181</span>
      </li>
         <li className="flex items-center gap-2">
            <MdAttachEmail  className="text-blue-500"/>
            <span>foued.belajouza@gmail.com</span>
            </li>
     
          <li className="flex items-center gap-2"> <FaGlobe className="text-blue-500"/><span>www.my-portfolio.com</span> 
          </li>
       
          <li className="flex items-center gap-2">
               <FaMapMarkerAlt className="text-blue-500"/>
               <span>Tunisia</span>
               </li>
      </ul>
     </div>
      </div>
    <section className="flex flex-col  md:flex-row items-center justify-center gap-8 px-4 pt-10">
  
  <div className="flex-shrink-0">
    <img
      src="/images/mon-image.jpg"
      alt="user"
      className="
        w-[100px] h-[80px]
        sm:w-[220px] sm:h-[220px]
        md:w-[250px] md:h-[250px]
        rounded-full
        object-cover
      "
    />
  </div>

  <p className="
     text-justify
     md:text-base
     text-gray-600
       text-xs 
      leading-relaxed
      md:w-full
      w-[150px]
  ">
    I’m a Full-Stack Web Developer and Web Designer focused on crafting
    clean, user-friendly. I’m passionate
    about building high-quality websites using modern technologies.
    <br></br>
     My background in high-level sports — as a player, teacher, and coach —
    has taught me discipline, patience, responsibility, confidence, and
    adaptability. These values drive my motivation and fast learning in
    web development, a field I’m truly passionate about.
  </p>

</section>
<section className="py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* WORK EXPERIENCE */}
    <div className="flex flex-col gap-4 lg:-ml-5 -ml-2 sm:-ml-6 md:-ml-4  work-transform">
      
      {/* Titre */}
      <div className="flex items-center gap-3 pt-5">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600">
          Work Experience
        </h2>
        <IoCodeWorkingOutline size={20} className="text-blue-600 mt-1" />
      </div>

      {/* Contenu */}
      <div className="pl-4 pt-5 text-justify md:w-full w-[150px]">
     <ul className="">
      <span className="text-blue-700 pt-5 mt-5 text-xl ">Junior Developer:</span>
      <p className="text-gray-500 text-xs md:text-base pt-2">
Passionate about web development and design, I specialize in Full-Stack Development using modern frameworks like <strong>Next.Js</strong> and <strong>Nest.Js </strong>I build high-performance and scalable web applications with a strong focus on clean architecture and maintainability. My expertise includes <strong>Zod</strong> for schema validation,
<strong>Zustand</strong>for state management, and <strong>Dto</strong> patterns to ensure reliable data flow between client and server.
      </p>
     </ul>
     <ul className="list-disc text-gray-500 md:text-base text-xs  md:leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5 w-[150px] md:w-full">
      <li>
        Developed scalable RESTful APIs using NestJS, MongoDB, and discriminators for structured data models.
      </li>
      <li>
        Managed authentication and security with cookies, JWT, and role-based access control.
      </li>
      <li>Built responsive and interactive interfaces using Next.js, React, TypeScript, and Tailwind CSS.</li>
     </ul>

    <ul className="pt-5 mt-5 ">
     <span className="text-blue-700 pt-5 mt-5 text-sm md:text-xl">Web Designer</span>
      <p className="text-gray-500 md:text-base text-sm pt-5 mt-5">Creative and passionate about UI/UX design, I design modern, user-friendly, and visually appealing interfaces that enhance user experience. Using Figma, Adobe XD, and Photoshop, I create layouts that combine aesthetics and functionality. My design process integrates responsive design, typography, and branding, ensuring each product is intuitive and engaging.</p>
      </ul>
<ul className= "list-disc text-gray-500   md:text-base leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5 text-xs">
       <li>
Designed interactive prototypes and wireframes focused on usability and accessibility.
      </li>
       <li>
Integrated UI/UX best practices with Next.js and Tailwind CSS for pixel-perfect interfaces.
      </li>
       <li>
Applied SEO and digital marketing strategies to boost visibility and user engagement.
      </li>
     </ul>
     <ul className="pt-5 mt-5">
     <span className="text-blue-700 pt-5 mt-5 text-sm md:text-xl">BackEnd Developer</span>
      <p className="text-gray-500 md:text-base text-xs pt-5 mt-5">Specialized in developing secure, modular, and scalable backends using NestJS and MongoDB. I implement clean architecture principles with DTOs, discriminators, and validation layers (Zod) to ensure data integrity and performance.</p>
      </ul>
<ul className= "list-disc text-gray-500 text-xs md:text-base leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5">
       <li>
Built RESTful and modular APIs using NestJS and Express-compatible middleware.
      </li>
       <li>
Developing scalable APIs with Node.js, Express.js, and MongoDB.
      </li>
        </ul>
         <ul className="pt-5 mt-5">
     <span className="text-blue-700 pt-5 mt-5 text-sm md:text-xl">FrontEnd Developer</span>
      <p className="text-gray-500 text-xs md:text-base pt-5 mt-5">I develop dynamic and responsive interfaces using Next.js and React, focusing on user experience and maintainable code. With Zustand and Context API, I ensure efficient state management and modular design.</p>
      </ul>
<ul className= "list-disc text-gray-500 text-xs md:text-base leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5">
       <li>
Built reusable UI components with React, Next.js,Bootstrap, and Tailwind CSS.
      </li>
       <li>
Managed global state efficiently using Zustand.
      </li>
      <li>
Improved performance and SEO through server-side rendering (SSR) and static site generation (SSG).
      </li>
        </ul>

   
      </div>
 {/*projects*/}
  <div className="flex items-center gap-3 pt-5 text-justify">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600">
          Projects
        </h2>
        <GrProjects size={20} className="text-blue-600"/>
      </div>
     <div className="pl-4 pt-5 text-justify md:w-full w-[150px]">
           <p className="text-blue-700 pt-5 mt-5 text-sm md:text-xl">Projects ADC:</p>
               <ul className="list-disc text-gray-500 text-xs md:text-base leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5">
      <li>
        Developed scalable RESTful APIs using NestJS, MongoDB, and discriminators for structured data models.
      </li>
      <li>
        Managed authentication and security with cookies, JWT, and role-based access control.
      </li>
      <li>Built responsive and interactive interfaces using Next.js, React, TypeScript, and Tailwind CSS.</li>
     </ul>
        <p className="text-blue-700 pt-5 mt-5 text-sm md:text-xl">Project world Fitness:</p>
               <ul className="list-disc text-gray-500 text-xs md:text-base leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5">
      <li>
        WorldFitness offers tailored workout programs for pregnant women and beginners, ensuring safety and gradual progression.
      </li>
      <li>
      Our expert-designed fitness routines help expecting mothers stay active while promoting overall well-being.
      </li>
      <li>Beginner-friendly training plans make it easy to start a healthy and sustainable fitness journey.</li>
     </ul>
      <p className="text-blue-700 pt-5 mt-5 text-sm md:text-xl">Project BCC Center:</p>
               <ul className="list-disc text-gray-500 text-xs md:text-base leading-[2] font-thin marker:text-gray-600 marker:text-l pt-5">
      <li>
     Welcome to Best Challenge Center, a professional training and consulting firm that opens the doors to a better future!
      </li>
      <li>
     Best Challenge Center specializes in continuous training and business consulting. Our mission is to support companies by providing effective solutions that meet their needs in skills development and performance improvement.
      </li>
      <li>We invite you to take part in our training sessions, workshops, seminars, and events. Whatever your field of study, our team is here to guide you toward the best choices and opportunities for your professional growth.</li>
     </ul>
<section className="pt-5 mt-5">
      <div className="md:max-w-3xl mx-auto px-4 space-y-4 md:w-full w-[250px] button-res">

        {/* Item 1 */}
        <div className="border rounded-lg overflow-hidden button-2">
          <button
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
            className="
              md:w-full
              text-left
              px-5
              py-4
              bg-blue-600
              text-white
              font-medium
              md:tracking-wide
              tracking-tight
              flex
              justify-between
              items-center
              hover:bg-blue-700
              transition
            "
          >
            What is your experience in web development?
            <span className="md:text-xl text-sm">
              {openIndex === 0 ? "−" : "+"}
            </span>
          </button>

          {openIndex === 0 && (
            <div className="px-5 py-4 text-gray-700 text-sm leading-relaxed bg-gray-50">
              I have several years of experience in full-stack web development.
              I mainly work with <strong>React.js</strong> and{" "}
              <strong>Node.js</strong> using <strong>Express</strong>, and I’ve
              built projects combining frontend, backend, and databases like{" "}
              <strong>MongoDB</strong> and <strong>MySQL</strong>.
            </div>
          )}
        </div>

        {/* Item 2 */}
        <div className="border rounded-lg overflow-hidden button-2 ">
          <button
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            className="w-full text-left px-5 py-4 bg-blue-600 text-white font-medium flex justify-between items-center hover:bg-blue-700 transition"
          >
            Can you tell me about a project from your portfolio?
            <span className="text-xl">
              {openIndex === 1 ? "−" : "+"}
            </span>
          </button>

          {openIndex === 1 && (
            <div className="px-5 py-4 text-gray-700 text-sm leading-relaxed bg-gray-50">
              Sure! One of my most interesting projects is a full platform for
              managing candidates and employers. I implemented authentication,
              user roles, and a smooth <strong>React</strong> interface. The
              backend was built with <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, and secured with <strong>JWT</strong>.
            </div>
          )}
        </div>

        {/* Item 3 */}
        <div className="border rounded-lg overflow-hidden button-2 ">
          <button
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
            className="md:w-full text-left px-5 py-4 bg-blue-600 text-white font-medium flex justify-between items-center hover:bg-blue-700 transition"
          >
            What technologies do you use most often?
            <span className="md:text-xl text-xs">
              {openIndex === 2 ? "−" : "+"}
            </span>
          </button>

          {openIndex === 2 && (
            <div className="px-5 py-4 text-gray-700 text-sm leading-relaxed bg-gray-50">
              I frequently use <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, and <strong>MongoDB</strong>. I also enjoy
              working with <strong>Tailwind CSS</strong>,{" "}
              <strong>Bootstrap</strong>, and <strong>Socket.io</strong>.
            </div>
          )}
        </div>

      </div>
    </section>
   
   
      

   
      </div>
    {/*projects*/}
    </div>
   
   {/* EXPERIENCE */}
    <div className="flex flex-col gap-4">
               {/* Titre */}
      <div className="flex flex-nowrap justify-center items-center flex items-stretch h-full cv-fofo">
               <div className="w-[1px] h-full bg-gray-400 opacity-50 decoration-2"></div>
      <ul className="ps-10 list-disc text-gray-500 text-base leading-[5] font-thin marker:text-gray-600 marker:text-l">
         <div className="flex items-center gap-3 pt-5">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-xl md:text-4xl font-semibold text-blue-600">
          Experience
        </h2>
        <SiExpertsexchange className="text-blue-600" size={20}/>
      </div>
    <p className="text-blue-700 pt-5 mt-5 md:text-xl text-sm text-justify">Technical:</p>
     <ul className="ps-5 list-disc text-gray-500 md:text-base leading-[5] font-thin marker:text-gray-600 marker:text-l text-justify">
    <li className  
   ="fs-six n5-color leading-[2] li-responsive">
     JavaScript/React
               </li>
                                                   <li className="fs-six n5-color leading-[2] li-responsive">Node.js/express.js</li>
                          <li className="fs-six n5-colo leading-[2] li-responsive">MongoDB</li>
                          <li className="fs-six n5-color leading-[2] li-responsive">
                            web design
                          </li>
                          <li className="fs-six n5-color leading-[2] li-responsive">
                            Design and implement database structures
                          </li>
                            <li className="fs-six n5-color leading-[2] li-responsive">Nest.js</li>
                          <li className="fs-six n5-color leading-[2] li-responsive">Next.js</li>
                            <li className="fs-six n5-color leading-[2] li-responsive">MongoDB</li>
                          <li className="fs-six n5-color leading-[2] li-responsive">Discriminator</li>
                           <li className="fs-six n5-color leading-[2] li-responsive">Zod</li>
                            <li className="fs-six n5-colorleading-[2] li-responsive">Zustand</li>
                           <li className="fs-six n5-color leading-[2] li-responsive">Dto</li>
                            <li className="fs-six n5-color leading-[2] li-responsive">WebSocket</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Socket.io</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Bootstrap,tailwind css</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Hook</li>

                             <span className="text-blue-700 pt-5 mt-5 text-xl">Professional</span>
                              <li className="fs-six n5-color leading-[2] li-responsive">Effective communication</li>
                            <li className="fs-six n5-color leading-[2] li-responsive">Team player</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Strong problem solver</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Good time management</li>
                             </ul>                            
       <div className="flex items-center gap-3 pt-5">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-600">
          Skills
        </h2>
        <SiSkillshare size="30" className="text-blue-600"/>
      </div>
      <ul className="pt-5 pe-5 text-justify li-responsive">
                <li className="fs-six n5-color leading-[2] li-responsive">Project Management</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Public Relations Teamwork</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Time Management</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">LeaderShip</li>
                                               <li className="fs-six n5-color leading-[2] li-responsive">Effective Communication</li>
                             <li className="fs-six n5-color leading-[2] li-responsive">Critical THinking</li>
                                  </ul>
 <div className="flex items-center gap-3 pt-5">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600">
          Eductions
        </h2>
        <PiStudentFill size={25} className="text-blue-600"/>
      </div>
       <p className="text-gray-700 pt-5 mt-5 text-base text-justify li-responsive">Full-Stack Web Development (JavaScript & TypeScript)

| 2023 - 2025</p>
               <ul className="list-disc text-gray-500 text-base leading-[2] font-thin marker:text-gray-600 marker:text-xl pt-5 ps-5 mt-5 text-justify">
      <li className="fs-seven n5-color leading-[2] li-responsive">
Front-End: Next.js, React.js, Zustand, Tailwind CSS
      </li>
      <li className="fs-seven n5-color leading-[2] li-responsive">
 Back-End: NestJS, Node.js, Express.js, MongoDB
      </li>
      <li className="fs-seven n5-color leading-[2] li-responsive">
        Validation & Data Modeling: Zod, DTO, Discriminators
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
  Authentication & Security: JWT, Cookies, Guards
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
     Version Control: Git & GitHub (branches, pull requests, merges)
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
        Deployment: Vercel, Render, Netlify, and MongoDB Atlas
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
    Real-Time Communication: WebSocket, Socket.io (emit, on, broadcast)
      </li>
        <li className="fs-seven n5-color leading-[2] li-responsive">
   Architecture: Modular design, Clean code, Reusable components
      </li>
        <li className="fs-seven n5-color leading-[2] li-responsive">
UI/UX Design: Responsive design, accessibility, usability
      </li>
     </ul>
      <div className="flex items-center gap-3 pt-5 li-responsive">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600">
          Languages
        </h2>
        <FaLanguage  size={20} className="text-blue-600"/>
      </div>
      <ul className="pt-5 mt-5 ps-5 text-justify li-responsive">
     <li className="fs-seven n5-color leading-[2] li-responsive">
      Frensh (Native)
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
    English (Professional)
      </li>
        <li className="fs-seven n5-color leading-[2] li-responsive">
Sweden (Intermediate)
      </li>
            </ul>
        <div className="flex items-center gap-4 pt-5 ps-2">
        <div className="w-1 h-12 bg-blue-600"></div>
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-600 tracking-wider">
          Interests
        </h2>
        <GiHobbitDwelling   size={20} className="text-blue-600 ms-1"/>
      </div>
      <ul className="text-justify list-disc text-gray-500 text-rebase leading-[2] font-thin marker:text-gray-600 marker:text-xl pt-5 ps-5 mt-5">
              <li className="fs-seven n5-color leading-[2] li-responsive">
      Coaching
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
    Volley ball sports
      </li>
        <li className="fs-seven n5-color leading-[2] li-responsive">
Nature
      </li>
       <li className="fs-seven n5-color leading-[2] li-responsive">
Traveling
      </li>
      </ul>  
                           </ul>
                           
                     
                                                </div>
                                       <div className="text-center mx-auto py-6">
                        <MoreContact className=""/>
                      </div>     
    

    </div>

  </div>
</section>
<div className="flex flex-nowrap justify-center items-center">
  <hr className="border-gray-300 w-full border-t mt-10 pt-10"></hr>
</div>
<section className="bg-white p-10 rounded-xl mt-10 md:w-full w-[180px] -ml-10 sm:-ml-6
md:ml-0">
  <div className="flex flex-wrap justify-center md:justify-between gap-6">
  <div className="flex items-center gap-3">
               <h2 className="text-xs md:text-sm font-bold text-gray-500">
          github.com/foued-belajouza
        </h2>
        <div className="bg-gray-100 p-2 rounded-full hover:bg-blue-400">
        <FaGithub className="text-blue-600 hover:text-white transition" size={15}/>
         </div>
         </div>
   <div className="flex items-center gap-3">
               <h2 className="text-xs md:text-sm font-bold text-gray-500">
     Linkedin.com/in
        </h2>
         <div className="bg-gray-100 p-2 rounded-full hover:bg-blue-400">
<FaLinkedin className="text-blue-600 hover:text-white transition" size={20}/>
</div>
</div>  
 <div className="flex items-center gap-3 ps-5">
  
   <Link href="/contact" className="text-xs md:text-sm font-bold text-gray-500 hover:text-blue-600 inline-flex gap-3">
email <span className="p-1 bg-gray-100 rounded-full hover:bg-blue-400"><EnvelopeOpen className="text-blue-600 hover:text-white transition" size={20}/></span>
 </Link>   
</div>   
 </div>    
</section>
    </div>


 



 

     
 
   </div>
 </div>
  );
}
