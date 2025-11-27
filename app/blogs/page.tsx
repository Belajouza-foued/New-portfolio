export default function Contact() {
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold">Contact</h1>

      <form className="mt-6 flex flex-col gap-4">
        <input className="p-3 border rounded" placeholder="Nom" />
        <input className="p-3 border rounded" placeholder="Email" />
        <textarea className="p-3 border rounded" rows={4} placeholder="Message"></textarea>

        <button className="bg-blue-600 text-white py-3 rounded">
          Envoyer
        </button>
        <h2>cafe rihab</h2>
         <h3>cafe achraf</h3>
      </form>
    </div>
  );
}
