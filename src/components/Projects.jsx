export default function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      description: "A full-featured shopping app with authentication, Firestore, and cart checkout.",
      link: "#",
    },
    {
      title: "Portfolio Site",
      description: "This very portfolio! Built with React, Vite, and Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-emerald-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
