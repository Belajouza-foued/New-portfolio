"use client"
import SideBar from "../components/SideBar";
import {ImageSquare} from "phosphor-react";
import Link from "next/link";
import './Blog.css'
import Image5 from "next/image";
import { MdDescription } from "react-icons/md";
export default function Blog() {
  const imgBlogs = [
  {
    id: 10,
      title: "Javascript",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
    description: "Learn how JavaScript powers the web and explore key features like closures, async/await, and DOM manipulation to build dynamic, interactive user experiences."
  },
  {
    id: 11,
      title: "Mongoose/Discriminator",
    images: ["/assets/blog3.png","/assets/blog4.png"],
    href: "/contact",
    description : "Understand how Mongoose discriminators help you manage multiple document types in a single collection efficiently, improving structure and scalability."
  },
   {
    id: 12,
      title: "Zod / Validation",
    images: ["/assets/blog3.png","/assets/blog6.png"],
    href: "/contact",
    description: "I use to validate my forms and DTOs on both the backend and frontend.It helps me prevent errors by defining clear, type-safe schemas.like Zod et Zustand"
  },
     {
    id: 13,
      title: "Socket.IO / WebSocket",
    images: ["/assets/blog7.png","/assets/blog8.png"],
    href: "/contact",
    description: "I’ve implemented WebSockets in my projects to enable real-time bidirectional communication.Using @WebSocketGateway and (@SubscribeMessag) in NestJS.",
  },
     {
    id: 14,
      title: "BackEnd / NestJs",
    images: ["/assets/blog9.png","/assets/blog5.png"],
    href: "/contact",
    description: "  I use NestJS to build robust, secure, and maintainable APIs.Its modular structure, decorators, and native JWT integration make it easy to manage routes,guards, and authentication.",
  },
     {
    id: 15,
      title: "Bootstrap / Tailwind css",
    images: ["/assets/blog4.png","/assets/blog7.png"],
    href: "/contact",
    description: "Using Tailwind CSS, I rapidly design responsive and aesthetic user interfaces.Its utility-first approach allows me to write clean, maintainable styles without leaving HTML structure."
  },
     {
    id: 16,
      title: "FrontEnd / NextJs",
    images: ["/assets/blog2.png","/assets/blog1.png"],
    href: "/contact",
    description: " With Next.js, I build high-performance, SEO-friendly interfaces.Server-side rendering (SSR), API Routes, and metadata management give me great flexibility for developing complete full-stack projects."
  },
     {
    id: 17,
      title: "React",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
    description: "I use React.js to create interactive, component-based UIs.With hooks, context, and modern state management patterns, I build responsive applications that are maintainable and scalable."
  },
    {
    id: 18,
      title: "React / Hook",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
    description: "I use React Hooks to manage component state.UseState allows me to store and update data in functional components,UseEffect helps me handle lifecycle events such as fetching data or subscribing to events."
  },   
  ];
  return (
   <div className="min-h-screen bg-gray-100">

      {/* LAYOUT GLOBAL */}
      <div className="grid grid-cols-12">

        {/* SIDEBAR → col-3 desktop, hidden mobile */}
        <aside className="lg:block lg:col-span-3 h-screen">
         <SideBar />
        </aside>

        {/* CONTENU PRINCIPAL → col-9 desktop / col-12 mobile */}
        <main className="col-span-12 lg:col-span-9  lg:ml-10">

          {/* TITRE */}
          <section className="text-center max-w-3xl mx-auto mt-10 lg:ml-20 ps-5  ml-0 md:ml-10 px-5 title-blog">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold leading-tight">
            A Blog About Web Development
            </h1>
            <p className="text-gray-600 mt-5 font-semibold">
           Welcome to my blog. Subscribe and get my latest blog post in your inbox.
                          </p>
          </section>
          <section className="button-blog">
            <div className="flex flex-col md:flex-row justify-evenly items-center text-center pt-10 mt-10 max-w-4xl lg:ml-5">
                      <input type="email" placeholder="Your email" className="w-full border-2  md:flex-1 border-gray-300 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 md:max-w-full max-w-[200px]"/>
            <button type="submit" className="bg-blue-600 text-white md:px-12 md:py-3 px-6 py-2 mt-2 rounded-xl font-semibold hover:bg-blue-700">Submit</button>
            </div>
                      </section>
                    <div className="flex max-w-5xl itmes-center justify-center lg:-ml-10 pt-5">
  <hr className="border-gray-300 w-full border-t md:max-w-full mt-5 pt-5 max-w-[250px] "></hr>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 maw-w-3xl gap-10 pt-2 md:max-w-5xl pl-10 md:-ml-10 group-col"> 
       {/*blogs-hover*/}
  {imgBlogs.map((imgBlog) => (
    <div key={imgBlog.id} className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition w-[200px] md:w-[250px] max-w-[250px]">

           {/* Image principale */}
        <div className=" group-img relative h-[100px] overflow-hidden md:w-[250px] md:h-[150px]">
        <Image5
          src={imgBlog.images[0]}
          alt={imgBlog.title}
          fill
          className="group-hover object-contain w-[250px] md:w-[250px] transition duration-300 group-hover:opacity-0 pb-2"
        />

        {/* Image hover */}
        {imgBlog.images[1] && (
          <Image5
            src={imgBlog.images[1]}
            alt={imgBlog.title + ' hover'}
            fill
             className="absolute inset-0 object-contain opacity-0 
               transition duration-300 
               group-hover:opacity-100 group-hover:scale-105 pb-2"
                  />
        )}
          </div>
      <div className="pt-2 ps-2">
        
        <Link href={imgBlog.href} className="text-xs font-semibold text-gray-800 hover:text-blue-500 block ps-2">
          {imgBlog.title}
        </Link>
              <p className="text-justify text-[9px] md:text-[12px] md:tracking-tight tracking-tight max-w-[150px] md:max-w-[220px] ps-2 pb-3 leading-[2]">
{imgBlog.description}
  </p>
      </div>     
    </div>
  ))}
    {/*blogs-hover*/}
  




    </div>
 </main>
      
      </div>
    </div>
    
   
  );
}
