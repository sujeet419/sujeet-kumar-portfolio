const Experience = () => {
  const experiences = [
    {
      period: "Aug 2022 — Present",
      company: "Appypie LLP",
      role: "Senior Full-Stack Developer",
      location: "India",
      current: true,
      description:
        "Architecting and developing scalable PHP and Node.js web applications with RESTful APIs, modern frontend integrations and AWS infrastructure.",
      achievements: [
        "Architect and develop scalable PHP and Node.js based web applications.",
        "Build RESTful APIs consumed by Angular and React frontend applications.",
        "Deploy and maintain applications on AWS infrastructure.",
        "Collaborate with frontend teams to deliver modern UI platforms.",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Node.js",
        "React",
        "Angular",
        "AWS",
        "REST APIs",
      ],
    },

    {
      period: "Sep 2021 — Jul 2022",
      company: "Satguru Overseas",
      role: "Senior Laravel Developer",
      location: "India",
      current: false,
      description:
        "Developed enterprise web platforms using Laravel, Node.js and CodeIgniter with a focus on payment integrations, dashboards and backend performance.",
      achievements: [
        "Developed enterprise web platforms using Laravel, Node.js and CodeIgniter.",
        "Implemented payment gateway integrations and admin dashboards.",
        "Optimized database performance and backend APIs.",
      ],
      technologies: [
        "Laravel",
        "PHP",
        "Node.js",
        "CodeIgniter",
        "MySQL",
        "Payment Gateways",
      ],
    },

    {
      period: "Oct 2019 — Sep 2021",
      company: "Sourcedot Pvt Ltd",
      role: "Senior PHP / Full-Stack Developer",
      location: "India",
      current: false,
      description:
        "Delivered enterprise applications with scalable backend architecture, third-party integrations and complete development lifecycle ownership.",
      achievements: [
        "Delivered enterprise applications with scalable backend architecture.",
        "Developed APIs and integrated multiple third-party services.",
        "Worked across the complete development lifecycle including deployment.",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "REST APIs",
        "MySQL",
        "Third-Party APIs",
        "Git",
      ],
    },

    {
      period: "Aug 2016 — Oct 2019",
      company: "IAP Company Pvt Ltd",
      role: "Senior PHP Developer",
      location: "India",
      current: false,
      description:
        "Developed and maintained enterprise web applications and backend services using PHP MVC frameworks.",
      achievements: [
        "Developed web applications using PHP MVC frameworks.",
        "Maintained enterprise applications and backend services.",
        "Worked on application enhancements and backend development.",
      ],
      technologies: [
        "PHP",
        "MVC",
        "MySQL",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },

    {
      period: "2012 — 2016",
      company: "Webappmate / Nexgenn / Tekshapers",
      role: "Software Developer",
      location: "India",
      current: false,
      description:
        "Started professional software development career by building web applications, CMS platforms and eCommerce solutions using PHP and MySQL.",
      achievements: [
        "Developed multiple web applications using PHP and MySQL.",
        "Built CMS solutions for clients.",
        "Developed eCommerce solutions for different business requirements.",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "CMS",
        "eCommerce",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Career Journey
            </span>

            <span className="h-px w-10 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            12+ years of
            <span className="text-cyan-400"> building software.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            From PHP and MySQL development to full-stack architecture,
            SaaS platforms, APIs, cloud deployment and modern frontend
            applications.
          </p>

        </div>

        {/* Experience Timeline */}
        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">

            {experiences.map((experience, index) => (
              <div
                key={`${experience.company}-${experience.period}`}
                className="relative"
              >

                {/* Timeline dot */}
                <div className="absolute left-4 top-8 z-20 -translate-x-1/2 md:left-1/2">

                  <div
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-4 border-slate-900 ${
                      experience.current
                        ? "bg-cyan-400 shadow-lg shadow-cyan-400/50"
                        : "bg-slate-500"
                    }`}
                  />

                </div>

                {/* Card */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto"
                      : "md:ml-auto"
                  }`}
                >

                  <article
                    className={`group rounded-3xl border p-7 transition duration-300 sm:p-8 ${
                      experience.current
                        ? "border-cyan-400/30 bg-cyan-400/[0.04] shadow-xl shadow-cyan-500/5"
                        : "border-white/10 bg-white/[0.03]"
                    } hover:-translate-y-1 hover:border-cyan-400/30`}
                  >

                    {/* Top */}
                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <span
                        className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                          experience.current
                            ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                            : "border border-white/10 bg-slate-950 text-slate-400"
                        }`}
                      >
                        {experience.current
                          ? "Current Position"
                          : experience.period}
                      </span>

                      {experience.current && (
                        <span className="text-xs text-slate-500">
                          {experience.period}
                        </span>
                      )}

                    </div>

                    {/* Role */}
                    <h3 className="mt-5 text-2xl font-bold text-white">
                      {experience.role}
                    </h3>

                    {/* Company */}
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-cyan-400">
                        {experience.company}
                      </span>

                      <span className="text-slate-700">
                        •
                      </span>

                      <span className="text-sm text-slate-500">
                        {experience.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {experience.description}
                    </p>

                    {/* Contributions */}
                    <div className="mt-7">

                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Key Responsibilities
                      </p>

                      <div className="space-y-3">

                        {experience.achievements.map(
                          (achievement) => (
                            <div
                              key={achievement}
                              className="flex gap-3 text-sm leading-6 text-slate-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                              <span>{achievement}</span>
                            </div>
                          )
                        )}

                      </div>

                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">

                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </article>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Career Summary */}
        <div className="mx-auto mt-20 max-w-5xl">

          <div className="grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-3xl font-black text-cyan-400">
                12+
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-3xl font-black text-white">
                Full Stack
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Engineering Expertise
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-3xl font-black text-cyan-400">
                AWS
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Cloud Deployment
              </p>
            </div>

          </div>

        </div>

        {/* Resume CTA */}
        <div className="mt-14 text-center">

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Download Full Resume
            <span>↓</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Experience;