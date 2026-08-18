const About = () => {
  const highlights = [
    {
      number: "10+",
      title: "Years Experience",
      description: "Professional experience building web applications and business platforms.",
    },
    {
      number: "50+",
      title: "Projects",
      description: "Web applications, SaaS platforms, APIs and enterprise solutions.",
    },
    {
      number: "15+",
      title: "Technologies",
      description: "Modern backend, frontend, database and cloud technologies.",
    },
  ];

  const expertise = [
    {
      icon: "01",
      title: "Backend Development",
      description:
        "Building secure, scalable and maintainable backend systems using PHP, Laravel, Node.js and REST APIs.",
    },
    {
      icon: "02",
      title: "Frontend Development",
      description:
        "Creating responsive and modern interfaces using React, Angular, JavaScript, Tailwind CSS and Bootstrap.",
    },
    {
      icon: "03",
      title: "SaaS & Architecture",
      description:
        "Designing multi-tenant SaaS applications, role-based systems, APIs and scalable application architectures.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 max-w-3xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Building digital products
            <span className="text-cyan-400"> that solve real problems.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm a Senior Full Stack Developer focused on building scalable
            applications, SaaS platforms and business solutions using modern
            technologies and clean software architecture.
          </p>

        </div>

        {/* Main About Grid */}
        <div className="grid gap-10 lg:grid-cols-12">

          {/* About Content */}
          <div className="lg:col-span-7">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <span className="text-xl font-bold text-cyan-400">
                    SK
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Senior Full Stack Developer
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Backend • Frontend • SaaS • APIs
                  </p>
                </div>

              </div>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">

                <p>
                  I specialize in developing complete web applications from
                  database design and backend APIs to responsive frontend
                  interfaces and deployment.
                </p>

                <p>
                  My experience includes building{" "}
                  <span className="font-semibold text-slate-200">
                    SaaS platforms, ERP systems, POS applications,
                    multi-tenant applications and AI-powered products.
                  </span>
                </p>

                <p>
                  I enjoy solving complex technical problems, designing
                  maintainable architectures and transforming business
                  requirements into reliable software products.
                </p>

              </div>

              {/* Key Skills */}
              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Clean Architecture",
                  "REST APIs",
                  "SaaS",
                  "Multi-Tenancy",
                  "Database Design",
                  "Cloud Deployment",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 lg:col-span-5">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >

                <div className="flex items-center gap-5">

                  <div>
                    <p className="text-4xl font-black text-cyan-400">
                      {item.number}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Expertise */}
        <div className="mt-20">

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              What I Do
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Areas of expertise
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {expertise.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-slate-950/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
              >

                <div className="mb-7 flex items-center justify-between">

                  <span className="text-sm font-bold text-cyan-400">
                    {item.icon}
                  </span>

                  <span className="h-px w-16 bg-white/10 transition group-hover:w-24 group-hover:bg-cyan-400/50" />

                </div>

                <h4 className="text-xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;