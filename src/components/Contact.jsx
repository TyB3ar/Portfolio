import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'; // for X (Twitter icon)

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-400 mb-6">
        Feel free to reach out via email or connect with me on social media.
      </p>
      <div className="flex justify-center space-x-8 text-emerald-400 text-3xl">
        <a
          href="mailto:wronskityler@gmail.com"
          aria-label="Email"
          className="hover:text-emerald-600 transition"
        >
          📧
        </a>
        <a
          href="https://github.com/TyB3ar"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-wronski/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/WronskiTyler"
          aria-label="X"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/wronski_t/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
