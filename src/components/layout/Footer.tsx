// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 py-10 text-center text-gray-500">
//       © 2026 AshLabs. All rights reserved.
//     </footer>
//   );
// }


import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      </div>

      <p>© 2026 AshLabs. All rights reserved.</p>
    </footer>
  );
}
