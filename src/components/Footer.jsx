function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">
              Sujeet Kumar
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Senior Software Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <a
              href="#about"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#education"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-slate-400 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-sm font-semibold text-slate-400 transition hover:border-cyan-500/40 hover:text-cyan-400"
            >
              GH
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-sm font-semibold text-slate-400 transition hover:border-cyan-500/40 hover:text-cyan-400"
            >
              IN
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Sujeet Kumar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;