"use client"
import Link from "next/link";
import MoreContact from "../components/MoreContact"
import { DeviceMobileCamera,Compass  } from "phosphor-react";
import SideBar from "../components/SideBar";



export default function Contact() {
  return (
     <div className="min-h-screen bg-gray-100">

      {/* LAYOUT GLOBAL */}
      <div className="grid grid-cols-12">

        {/* SIDEBAR → col-3 desktop, hidden mobile */}
        <aside className="lg:col-span-3 h-screen">
          <SideBar />
        </aside>

        {/* CONTENU PRINCIPAL → col-9 desktop / col-12 mobile */}
        <main className="col-span-12 lg:col-span-9  lg:ml-10">

          {/* TITRE */}
          <section className="text-center max-w-3xl mx-auto mt-10 lg:ml-20 ps-5  ml-0 md:ml-10 px-5">
            <h1 className="text-3xl sm:text-4xl text-gray-700 font-bold">
              Contact
            </h1>
            <p className="text-gray-600 mt-5">
              Interested in hiring me or just saying hi?
              You can email me at{" "}
              <Link href="mailto:foued.belajouza@gmail.com" className="text-blue-600 underline">
                foued.belajouza@gmail.com
              </Link>
              .
            </p>
          </section>

          {/* CONTACT DETAILS */}
          <section
            data-aos="zoom-in-left"
            className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row items-center ps-5"
          >
            <div className="flex items-center gap-3 lg:-ml-20">
              <div className="w-1 h-24 bg-blue-600"></div>
              <h2 className="text-2xl md:text-3xl  lg:text-3xl font-semibold text-gray-800">
                Contact Details
              </h2>
            </div>

            <p className="text-gray-600 text-sm flex-1 ps-10 tracking-wide">
              If you are going to use a passage of Lorem Ipsum, be sure there isn't anything embarrassing hidden in the text.
            </p>
          </section>

          {/* 3 BOXES */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-10 ml-0 md:ml-10 lg:-ml-20 ps-7">

            <div className="flex items-center gap-4 justify-center">
              <div className="w-[2px] h-20 bg-blue-400"></div>
              <DeviceMobileCamera size={50} className="text-blue-600" />
              <div>
                <span className="font-semibold">Phone</span>
                <a href="tel:+21658860181" className="block text-gray-700">
                  +216 58 860 181
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="w-[2px] h-20 bg-blue-400"></div>
              <Compass size={50} className="text-blue-600" />
              <div>
                <span className="font-semibold">Location</span>
                <p>Sousse</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              <div className="w-[2px] h-20 bg-blue-400"></div>
              <Compass size={50} className="text-blue-600" />
              <div>
                <span className="font-semibold">Location 2</span>
                <p>Sousse</p>
              </div>
            </div>

          </section>

          {/* GOOGLE MAP */}
          <section data-aos="zoom-in" className="max-w-5xl mx-auto mt-14 lg:-ml-10  ml-0 md:ml-10 px-5">
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1535222957714!2d10.600185575258116!3d35.845238920948034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b00157e66eb%3A0x8b4bca4156e550a8!2sKhezama%20Ouest!5e0!3m2!1sfr!2stn!4v1739987311370!5m2!1sfr!2stn"
          className="w-full h-64 md:h-96 rounded-xl border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </section>

          {/* FORMULAIRE */}
          <section className="max-w-4xl mx-auto mt-14 lg:ml-10  ml-0 md:ml-10 px-5">
            <h2 className="text-center text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-center text-gray-600 mb-8">
              Send me a message — I'll respond as soon as possible.
            </p>

            <form className="bg-white p-6 rounded-2xl shadow-lg border space-y-4">
              <input type="text" placeholder="Your Name*" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email*" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500" />
              <input type="number" placeholder="Phone*" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Location*" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500" />
              <textarea rows={5} placeholder="Message*" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
                Send Message
              </button>
                        </form>
          </section>
<div className="text-center mx-auto lg:-ml-20 pt-5 mt-5">
  <MoreContact className=""/>
</div>
        </main>
      
      </div>
    </div>
  );
}
 
