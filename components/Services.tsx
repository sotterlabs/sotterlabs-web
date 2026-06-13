export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern websites, business platforms and customer portals built for performance and scalability.",
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform mobile experiences for iOS and Android using modern technologies.",
    },
    {
      title: "Backend & APIs",
      description:
        "Robust backend systems, integrations and RESTful APIs for growing businesses.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Deployments, automation and infrastructure designed for reliability and growth.",
    },
    {
      title: "Digital Transformation",
      description:
        "Helping organizations modernize processes and embrace technology effectively.",
    },
    {
      title: "Custom Software",
      description:
        "Tailor-made solutions built around your business needs and objectives.",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-bold text-[#2F7DF6]">
            SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#030B26]">
            Technology solutions built for real businesses.
          </h2>

          <p className="mt-4 text-lg text-[#667085]">
            From idea to production, we help companies design,
            build and scale digital products that create value.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-[#E6ECF5] bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-black text-[#030B26]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}