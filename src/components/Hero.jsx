const Hero = () => {
  const technologies = [
    "PHP",
    "Laravel",
    "Node.js",
    "React",
    "Angular",
    "MySQL",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/4 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-20 top-20 -z-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div className="relative z-10">

          {/* Availability */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm font-medium text-emerald-300">
              Available for opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="mb-3 text-lg text-slate-400">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sujeet
            <span className="text-cyan-400"> Kumar</span>
          </h1>

          {/* Profession */}
          <h2 className="mt-5 text-2xl font-bold text-slate-200 sm:text-3xl">
            Senior Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I build scalable web applications, SaaS platforms and
            AI-powered products using modern technologies and
            clean, maintainable architecture.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              View My Work →
            </a>

            <a
          href={`${import.meta.env.BASE_URL}Sujeet_Kumar_Resume_2026.pdf`}
          download="Sujeet-Kumar-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-7 py-3.5 text-center font-bold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
        >
          Download Resume
        </a>

          </div>

          {/* Technologies */}
          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur transition hover:border-cyan-400/40 hover:text-cyan-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Outer Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Profile Card */}
          <div className="relative">

            {/* Decorative Circle */}
            <div className="absolute -inset-4 rounded-full border border-cyan-400/10" />

            <div className="absolute -inset-8 rounded-full border border-white/5" />

            {/* Profile Image */}
            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl shadow-cyan-500/10 sm:h-80 sm:w-80">

              <div className="text-center">
                <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                  <span className="text-4xl font-black text-cyan-400">
                    SK
                  </span>
                </div>

                <p className="font-semibold text-white">
                  Your Photo
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Sujeet Kumar"
                    className="h-full w-full object-cover"
                  />
                </p>
              </div>

            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 -left-8 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-2xl font-black text-cyan-400">
                10+
              </p>

              <p className="text-xs text-slate-400">
                Years Experience
              </p>
            </div>

            {/* Projects Badge */}
            <div className="absolute -right-8 top-10 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-2xl font-black text-white">
                50+
              </p>

              <p className="text-xs text-slate-400">
                Projects
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-400 md:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="h-8 w-px bg-slate-700" />
      </a>

    </section>
  );
};

export default Hero;