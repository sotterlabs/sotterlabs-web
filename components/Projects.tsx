export default function Projects() {
  const projects = [
    {
      name: "Juno",
      type: "Social Gaming Platform",
      description:
        "A social gaming platform designed to help people connect through local party games and online experiences. Juno combines casual games, real-time interaction and social discovery to make meeting new people feel more natural, fun and human.",
      status: "In development",
    },
    {
      name: "ChoroyApp",
      type: "Local Marketplace",
      description:
        "A local commerce platform built around products, wallets, payments, geolocation and mobile-first experiences. ChoroyApp was designed to help communities buy and sell locally through a modern marketplace flow.",
      status: "MVP",
    },
    {
      name: "Enterprise Solutions",
      type: "Custom Software",
      description:
        "Custom backend systems, web platforms, cloud integrations and automation tools built for businesses that need reliable technology adapted to their real operational processes.",
      status: "Available",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(118,87,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(47,125,246,0.10),transparent_35%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-bold text-[#2F7DF6]">
            PROJECTS
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#030B26] sm:text-5xl">
            Ideas transformed into digital products.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#667085]">
            We build products with purpose: scalable platforms, mobile
            experiences and systems designed to support real business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-[#E6ECF5] bg-[#F8FBFF] p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#C9DCFF] hover:bg-white hover:shadow-xl"
            >
              <div className="mb-8 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black text-[#2F7DF6] shadow-sm">
                {project.status}
              </div>

              <h3 className="text-2xl font-black text-[#030B26]">
                {project.name}
              </h3>

              <p className="mt-2 text-sm font-bold text-[#7657FF]">
                {project.type}
              </p>

              <p className="mt-5 leading-7 text-[#667085]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}