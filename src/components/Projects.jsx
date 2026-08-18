const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Enterprise POS System",
      category: "Enterprise / POS",
      description:
        "A complete point-of-sale platform for managing inventory, purchases, sales, invoicing and business analytics.",
      features: [
        "Inventory Management",
        "Purchase & Sales Tracking",
        "Invoice Generation",
        "Analytics Dashboard",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "REST API",
      ],
      featured: true,
    },

    {
      number: "02",
      title: "E-Commerce Platform",
      category: "E-Commerce",
      description:
        "A full-featured eCommerce platform covering product management, shopping cart, checkout and payment processing.",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Checkout System",
        "Payment Gateway Integration",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Payment APIs",
      ],
      featured: true,
    },

    {
      number: "03",
      title: "Parking Management System",
      category: "Management System",
      description:
        "A parking management solution designed for real-time parking slot tracking, billing and operational reporting.",
      features: [
        "Real-Time Slot Tracking",
        "Parking Management",
        "Billing",
        "Reports",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "REST API",
      ],
      featured: false,
    },

    {
      number: "04",
      title: "Real-Time Chat Application",
      category: "Real-Time Communication",
      description:
        "A real-time messaging platform supporting user communication, active status and profile management.",
      features: [
        "User Messaging",
        "Active Status",
        "User Profiles",
        "Real-Time Communication",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "JavaScript",
        "MongoDB",
      ],
      featured: false,
    },

    {
      number: "05",
      title: "Employee Management System",
      category: "HR / Enterprise",
      description:
        "An HR management platform covering employee administration, payroll, leave management and departments.",
      features: [
        "Employee Management",
        "Payroll",
        "Leave Management",
        "Department Management",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
      ],
      featured: false,
    },

    {
      number: "06",
      title: "Restaurant & Food Ordering",
      category: "Restaurant / Food Tech",
      description:
        "Restaurant and food ordering systems with online ordering, management dashboards and reporting capabilities.",
      features: [
        "Online Ordering",
        "Restaurant Dashboard",
        "Order Management",
        "Reports",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "REST API",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Selected Projects
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Systems I've
              <span className="text-cyan-400"> built.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Enterprise applications, SaaS platforms and business systems
              built across different industries and use cases.
            </p>

          </div>

          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 md:block">

            <p className="text-3xl font-black text-cyan-400">
              06
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
              Major Systems
            </p>

          </div>

        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-500 sm:p-8 ${
                project.featured
                  ? "border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.07] to-transparent"
                  : "border-white/10 bg-white/[0.03]"
              } hover:-translate-y-2 hover:border-cyan-400/30`}
            >

              {/* Top glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

              <div className="relative">

                {/* Project Top */}
                <div className="flex items-start justify-between">

                  <div>
                    <span className="text-sm font-bold tracking-[0.2em] text-cyan-400">
                      {project.number}
                    </span>

                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-600">
                      {project.category}
                    </p>
                  </div>

                  {project.featured && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                      Featured
                    </span>
                  )}

                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold text-white transition group-hover:text-cyan-400 sm:text-3xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-7">

                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Key Features
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">

                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                        {feature}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* Architecture Highlight */}
        <div className="mt-16 rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-8 sm:p-10">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Engineering Focus
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                From architecture to deployment.
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                My experience covers the complete software development
                lifecycle — architecture, database modeling, backend APIs,
                frontend integration, third-party services, deployment and
                maintenance.
              </p>

            </div>

            <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">

              {[
                "Architecture",
                "APIs",
                "Database",
                "Frontend",
                "Cloud",
                "Deployment",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-medium text-slate-400"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;