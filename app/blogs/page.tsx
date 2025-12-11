"use clients"
export default function Blog() {
  return (
    <div className="container">
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold">Contact</h1>

      <form className="mt-6 flex flex-col gap-4">
        <input className="p-3 border rounded" placeholder="Nom" />
        <input className="p-3 border rounded" placeholder="Email" />
        <textarea className="p-3 border rounded" rows={4} placeholder="Message"></textarea>

        <button className="bg-blue-600 text-white py-3 rounded">
          Envoyer
        </button>
             </form>
    </div>
    <div className="container mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    <div>
      <h1>fofo</h1>
    </div>

    <div>
      <h1>samir</h1>
    </div>
     <div>
      <h1>ahmad</h1>
    </div>
     <div>
      <h1>safa</h1>
    </div>
    <div>
      <h1>salma</h1>
    </div>
     <div>
      <h1>ihab</h1>
    </div>

  </div>
 </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen mx-10 ">
      <section data-aos="zoom-in" className="max-w-full w-full mt-14 lg:-ml-10 ps-5">
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1535222957714!2d10.600185575258116!3d35.845238920948034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b00157e66eb%3A0x8b4bca4156e550a8!2sKhezama%20Ouest!5e0!3m2!1sfr!2stn!4v1739987311370!5m2!1sfr!2stn"
          className="w-full rounded-xl border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </section>
  </div>
  <div className="flex display-block">
      <span className="text-center">cafe opium</span>
    <span className="text-center">cafe second</span>
  </div>
    </div>
    
   
  );
}
