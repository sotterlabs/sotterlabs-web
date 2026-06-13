export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(47,125,246,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(118,87,255,0.16),transparent_34%)]" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(3,11,38,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(3,11,38,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex rounded-full border border-[#D6E4FF] bg-white/80 px-5 py-2 text-sm font-bold text-[#2F7DF6] shadow-sm backdrop-blur">
            Software studio building meaningful digital experiences.
          </div>

          <h1 className="text-5xl font-black tracking-tight text-[#030B26] sm:text-6xl lg:text-7xl">
            We build software that feels{" "}
            <span className="bg-gradient-to-r from-[#2F7DF6] to-[#7657FF] bg-clip-text text-transparent">
              simple, scalable and human.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5A6B8A] sm:text-xl">
            Sotter Labs designs and develops modern web platforms, mobile apps,
            backend systems and cloud solutions for businesses ready to grow.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[#2F7DF6] to-[#7657FF] px-8 py-4 text-base font-bold text-white shadow-[0_18px_40px_rgba(47,125,246,0.28)] transition hover:-translate-y-1"
            >
              Start a project
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6E4FF] bg-white px-8 py-4 text-base font-bold text-[#030B26] shadow-sm transition hover:-translate-y-1 hover:border-[#2F7DF6]"
            >
              View services
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-[#E6ECF5] bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-[#2F7DF6]">01</p>
            <h3 className="mt-4 text-xl font-black text-[#030B26]">
              Web Platforms
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#667085]">
              Fast, responsive and scalable websites and business platforms.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E6ECF5] bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-[#7657FF]">02</p>
            <h3 className="mt-4 text-xl font-black text-[#030B26]">
              Mobile Apps
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#667085]">
              Cross-platform mobile experiences built with modern technologies.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E6ECF5] bg-white/80 p-6 shadow-sm backdrop-blur">
            <p className="text-sm font-bold text-[#2F7DF6]">03</p>
            <h3 className="mt-4 text-xl font-black text-[#030B26]">
              Cloud & APIs
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#667085]">
              Reliable backend systems, integrations and cloud-ready services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}