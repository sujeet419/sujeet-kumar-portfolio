function Education() {
  const expertise = [
    {
      title: "Architecture",
      description:
        "Designing scalable, maintainable and production-ready software architectures.",
    },
    {
      title: "REST APIs",
      description:
        "Building secure, scalable and well-structured RESTful APIs for web and mobile applications.",
    },
    {
      title: "Microservices",
      description:
        "Designing modular services that can scale independently and communicate efficiently.",
    },
    {
      title: "SaaS",
      description:
        "Building multi-tenant SaaS platforms with subscriptions, roles and scalable architecture.",
    },
    {
      title: "AWS",
      description:
        "Cloud-ready application deployment, infrastructure planning and AWS integration.",
    },
    {
      title: "Database Optimization",
      description:
        "Query optimization, indexing, database design and performance improvement.",
    },
    {
      title: "Payment Gateways",
      description:
        "Integrating payment gateways, subscriptions, transactions and secure webhooks.",
    },
  ];

  return (
    <section id="education" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education & Architecture
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Academic Foundation &{" "}
            <span className="text-cyan-400">
              Technical Expertise
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Combining strong academic fundamentals with hands-on experience
            building scalable enterprise applications and SaaS platforms.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Education */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Education
            </h3>

            <div className="space-y-5">

              {/* MCA */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    2010
                  </span>

                  <span className="text-xs text-slate-500">
                    Post Graduation
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white">
                  MCA
                </h4>

                <p className="mt-2 font-medium text-slate-300">
                  H.R Institute of Technology
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Ghaziabad
                </p>

                <div className="mt-5 h-px bg-slate-800" />

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Master of Computer Applications
                </p>
              </div>

              {/* B.Sc */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    2006
                  </span>

                  <span className="text-xs text-slate-500">
                    Graduation
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white">
                  B.Sc Mathematics
                </h4>

                <p className="mt-2 font-medium text-slate-300">
                  Vardhman College
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Bijnor
                </p>

                <div className="mt-5 h-px bg-slate-800" />

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Bachelor of Science — Mathematics
                </p>
              </div>

            </div>
          </div>

          {/* Architecture Expertise */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Architecture Highlights
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">

              {expertise.map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-slate-700 transition group-hover:text-cyan-400">
                      ↗
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;