const Skills = () => {
  const skillGroups = [
    {
      number: "01",
      title: "Backend Development",
      description: "Building secure, scalable and high-performance backend systems.",
      skills: [
        { name: "PHP", level: "Expert" },
        { name: "Laravel", level: "Expert" },
        { name: "CodeIgniter", level: "Advanced" },
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
      ],
    },
    {
      number: "02",
      title: "Frontend Development",
      description: "Creating responsive and modern user interfaces.",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Angular", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Bootstrap", level: "Advanced" },
      ],
    },
    {
      number: "03",
      title: "Database & Storage",
      description: "Designing efficient data models and database systems.",
      skills: [
        { name: "MySQL", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
        { name: "Database Design", level: "Advanced" },
      ],
    },
    {
      number: "04",
      title: "Cloud & DevOps",
      description: "Deployment, version control and application infrastructure.",
      skills: [
        { name: "AWS", level: "Advanced" },
        { name: "Git", level: "Expert" },
        { name: "GitHub", level: "Advanced" },
        { name: "REST API", level: "Expert" },
        { name: "CI/CD", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Skills & Technologies
            </span>

            <span className="h-px w-10 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Technologies I use to
            <span className="text-cyan-400"> build products.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A combination of backend engineering, frontend development,
            database architecture and cloud technologies.
          </p>

        </div>

        {/* Skill Groups */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
            >

              {/* Group Header */}
              <div className="flex items-start justify-between">

                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-cyan-400">
                    {group.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    {group.description}
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 sm:flex">
                  <span className="text-lg font-bold text-cyan-400">
                    {group.number}
                  </span>
                </div>

              </div>

              {/* Skills */}
              <div className="mt-7 space-y-4">

                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3 transition hover:border-cyan-400/20"
                  >

                    <div className="flex items-center gap-3">

                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-xs font-bold text-cyan-400">
                        {skill.name.substring(0, 2).toUpperCase()}
                      </span>

                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>

                    </div>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500">
                      {skill.level}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Technology Strip */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">

          <div className="border-b border-white/10 px-6 py-5">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Technology Stack
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-5 px-6 py-8">

            {[
              "PHP",
              "Laravel",
              "Node.js",
              "React",
              "Angular",
              "JavaScript",
              "MySQL",
              "MongoDB",
              "Redis",
              "AWS",
              "Git",
              "GitHub",
              "REST API",
              "Tailwind CSS",
            ].map((technology) => (
              <span
                key={technology}
                className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;