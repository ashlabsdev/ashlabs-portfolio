import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-500">
      <div className="mb-4 flex justify-center gap-5">
        <a
          href="https://github.com/ashlabsdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-white"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://www.linkedin.com/company/ashlabsdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-white"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://www.instagram.com/ashlabs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-colors hover:text-white"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href="https://www.youtube.com/@ashlabsdev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="transition-colors hover:text-white"
        >
          <FaYoutube size={20} />
        </a>

        <a
          href="https://medium.com/@ashlabs.office"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
          className="transition-colors hover:text-white"
        >
          <FaMedium size={20} />
        </a>
      </div>

      <p>© 2026 AshLabs. All rights reserved.</p>
    </footer>
  );
}