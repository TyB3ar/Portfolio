export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-emerald-400">Tyler Wronski</h1>
      <div className="space-x-6 text-sm">
        <a href="#about" className="hover:text-emerald-400 transition">About</a>
        <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
        <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
      </div>
    </nav>
  );
}
