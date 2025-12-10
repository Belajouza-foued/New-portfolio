"use client"
import { useState } from "react";
import { DeviceMobileCamera,Compass  } from "phosphor-react";
import SideBar from "../components/SideBar";

export default function Contact() {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100">
  <div className="grid grid-cols-1 lg:grid-cols-12">
 <div className="flex"></div>
    {/* SIDEBAR → 3 colonnes sur lg+ */}
       <SideBar/>

    {/* CONTENU → 9 colonnes sur lg+ */}
    <main className="col-span-1 lg:col-span-9 p-6">
      
      {/* Contact Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700">Contact</h1>
        <p className="mt-4 text-gray-600">
          Interested in hiring me for your project or just want to say hi? 
          Send me an email to <a href="mailto:foued.belajouza@gmail.com" className="text-blue-600 underline">foued.belajouza@gmail.com</a>.
        </p>
      </div>

      {/* Contact Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 justify-center">
          <DeviceMobileCamera size={40} className="text-blue-600" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+216 58 860 181</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Compass size={40} className="text-blue-600" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p>Sousse</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Compass size={40} className="text-blue-600" />
          <div>
            <h3 className="font-semibold">Location 2</h3>
            <p>Sousse</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-10 max-w-5xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1535222957714!2d10.600185575258116!3d35.845238920948034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b00157e66eb%3A0x8b4bca4156e550a8!2sKhezama%20Ouest!5e0!3m2!1sfr!2stn!4v1739987311370!5m2!1sfr!2stn"
          className="w-full h-64 md:h-96 rounded-xl border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get In Touch</h2>
        <form className="bg-white p-6 rounded-2xl shadow-lg border space-y-4">
          <input type="text" placeholder="Your Name*" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="email" placeholder="Email*" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="number" placeholder="Phone*" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <input type="text" placeholder="Location*" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          <textarea rows={5} placeholder="Message*" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>

    </main>
  </div>
</div>

  );
}
