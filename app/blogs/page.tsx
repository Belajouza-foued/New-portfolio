"use client"
import SideBar from "../components/SideBar";
import { EnvelopeOpen, ImageSquare} from "phosphor-react";
import Link from "next/link";
import Image5 from "next/image";
import { title } from "process";
export default function Blog() {
  const imgBlogs = [
  {
    id: 10,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
  {
    id: 11,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
   {
    id: 12,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
     {
    id: 13,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
     {
    id: 14,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
     {
    id: 15,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
     {
    id: 16,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
     {
    id: 17,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },
    {
    id: 17,
      title: "test blogs",
    images: ["/assets/blog1.png","/assets/blog2.png"],
    href: "/contact",
  },

   
  ];





  return (
   <div className="min-h-screen bg-gray-100">

      {/* LAYOUT GLOBAL */}
      <div className="grid grid-cols-12">

        {/* SIDEBAR → col-3 desktop, hidden mobile */}
        <aside className="hidden lg:block lg:col-span-3 h-screen">
         <SideBar />
        </aside>

        {/* CONTENU PRINCIPAL → col-9 desktop / col-12 mobile */}
        <main className="col-span-12 lg:col-span-9  lg:ml-10 pt-10 mt-10">

          {/* TITRE */}
          <section className="text-center max-w-3xl mx-auto mt-10 lg:ml-20 ps-5  ml-0 md:ml-10 px-5">
            <h1 className="text-3xl sm:text-4xl text-gray-700 font-bold">
            A Blog About Web Development And Life
            </h1>
            <p className="text-gray-600 mt-5 font-semibold">
           Welcome to my blog. Subscribe and get my latest blog post in your inbox.
                          </p>
          </section>
          <section>
            <div className="flex flex-col md:flex-row relative justify-evently items-center text-center pt-10 mt-10 max-w-4xl lg:ml-5">
           <EnvelopeOpen className=" absolute left-2 top-3/4 -translate-y-3/4 translate-x-2 text-gray-400" size={15}/>
           <input type="email" placeholder="Your email" className="w-full border-2 border-gray-300 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
            <button type="submit" className="bg-blue-600 text-white md:px-12 md:py-3 px-6 py-1 mt-1 rounded-xl font-semibold hover:bg-blue-700">Submit</button>
            </div>
                      </section>
                    <div className="flex max-w-5xl itmes-center justify-center lg:-ml-10 mt-10">
  <hr className="border-gray-300 w-full border-t  mt-10 pt-10"></hr>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl ps-5 gap-10"> 
       {/*blogs-hover*/}
  {imgBlogs.map((imgBlog) => (
    <div key={imgBlog.id} className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition  w-[200px]">

           {/* Image principale */}
        <div className=" group relative w-[200px] h-[120px] overflow-hidden">
        <Image5
          src={imgBlog.images[0]}
          alt={imgBlog.title}
          fill
          className="object-contain w-32 md:w-[220px]  transition duration-300 group-hover:opacity-0"
        />

        {/* Image hover */}
        {imgBlog.images[1] && (
          <Image5
            src={imgBlog.images[1]}
            alt={imgBlog.title + ' hover'}
            fill
             className="absolute inset-0 object-contain opacity-0 
               transition duration-300 
               group-hover:opacity-100 group-hover:scale-105"
                  />
        )}
          </div>
      <div className="pt-2 ps-2">
        
        <Link href={imgBlog.href} className="text-sm font-semibold text-gray-800 hover:text-blue-500 block ps-2">
          {imgBlog.title}
        </Link>
              <p className="text-justify text-[10px] md:text-[12px] max-w-[180px]">
Learn how JavaScript powers the web and explore key features like closures, async/await,
 and DOM manipulation to build dynamic, interactive user experiences.
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
