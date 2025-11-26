export default function Projects() {
  const projects = [
    {
      name: "E-commerce React",
      description: "Site complet avec panier, API, authentification.",
    },
    {
      name: "Dashboard Next.js",
      description: "Dashboard admin avec charts et CRUD.",
    },
    {
      name: "Portfolio UI/UX",
      description: "Design complet réalisé avec Figma.",
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-8">Mes Projets</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <div key={index} className="p-6 shadow rounded-lg bg-white">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
