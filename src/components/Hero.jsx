export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Main content */}
      <div className="bg-gradient-to-br from-emerald-600 to-green-900 py-20 text-white text-center relative z-10 px-4 max-w-4xl mx-auto rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold">Hello!</h1>

        <img
          src="https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/311582517_479972837506145_672770590169247421_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QEK6-sHx0b_CbDdgTPGb-Cp3MEyFqLU1hrYFJ6bGPCkAKEaZuhsAvlNZplF841m_UacEakeCY-gDsRGrAjSqt9-&_nc_ohc=IxrZcg4MP_8Q7kNvwHLUV08&_nc_gid=O7xzy86YKqc364WIpl_pQw&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfWJgaM1ELM_0emLXvpjl5T3n3O1NJR0HUPQ3-sWk9mweg&oe=689AAEC4&_nc_sid=7a9f4b"
          alt="Profile"
          className="mx-auto mt-6 w-32 h-32 rounded-full shadow-lg"
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
