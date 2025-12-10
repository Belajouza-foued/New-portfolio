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

   
    </div>
   
  );
}
