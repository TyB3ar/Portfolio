export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Product Management App",
      description: "A full-featured product management app with authentication, Firestore, and cart checkout.",
      link: "https://github.com/TyB3ar/E-Commerce-App-",
    },
    {
      title: "Task Management App",
      description: "A modern task management application built with React, TypeScript, and Auth0. TaskTracker provides a secure, responsive, and user-friendly dashboard for creating, editing, viewing, and managing tasks.",
      link: "https://github.com/TyB3ar/Task-Management-App",
    },
    {
      title: "Event Center Website",
      description: "A simple, yet elegent re-creation of a website built for Paypal Park, home of the San Jose Earthquakes! Built with just HTML and CSS.",
      link: "https://event-center-copy.netlify.app/",
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
