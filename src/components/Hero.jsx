import profile from '../assets/profile.png'; 

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Main content */}
      <div className="bg-gradient-to-br from-emerald-600 to-green-900 py-20 text-white text-center relative z-10 px-4 max-w-4xl mx-auto rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold">Hello!</h1>

        <img
          src={profile} 
          alt="Profile"
          className="mx-auto mt-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white shadow-xl transition-all duration-500 ease-in-out"
        />
        
        <p className="mt-4 text-gray-200 max-w-xl mx-auto">
          I'm a full-stack web developer focused on building responsive, high-performance apps with React, TypeScript, Firebase, and more.
        </p>

        <a
          href="#projects"
          className="mt-8 inline-block px-6 py-3 bg-emerald-500 text-black font-semibold rounded hover:bg-emerald-400 transition"
        >
          View My Work
        </a>
      </div>

      {/* Floating circles for subtle background flair */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-24 h-24 bg-emerald-400 rounded-full opacity-30 animate-pulse blur-3xl"></div>
      <div className="pointer-events-none absolute top-32 right-1/4 w-32 h-32 bg-green-700 rounded-full opacity-20 animate-pulse blur-2xl"></div>

      {/* Wavy SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#0f172a"
          fillOpacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,112C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
