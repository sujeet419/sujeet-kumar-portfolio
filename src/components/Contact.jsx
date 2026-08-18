function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Build Something{" "}
            <span className="text-cyan-400">Great Together</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Looking for a senior developer to build scalable applications,
            SaaS platforms, APIs or enterprise solutions? Let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-10">

            <h3 className="text-2xl font-bold text-white">
              Let's Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm open to exciting opportunities, freelance projects,
              consulting work and collaborations.
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <a
                href="mailto:sujeet419@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-slate-800 p-4 transition hover:border-cyan-500/40 hover:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  ✉
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    sujeet419@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-slate-800 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  ◉
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Delhi NCR, India
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 rounded-xl border border-slate-800 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
                  ●
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-medium text-green-400">
                    Open to opportunities
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">

              <a
                href="#"
                className="rounded-lg border border-slate-800 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-800 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 sm:p-10">

            <h3 className="text-2xl font-bold text-white">
              Send a Message
            </h3>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message →
              </button>

            </form>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-cyan-400/5 p-8 text-center sm:p-12">

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Have an idea or project in mind?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Let's discuss how I can help turn your idea into a scalable,
            reliable and high-quality product.
          </p>

          <a
            href="mailto:sujeet419@gmail.com"
            className="mt-7 inline-flex rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Start a Conversation →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;