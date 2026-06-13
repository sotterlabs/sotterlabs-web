export default function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <span className="rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-bold text-[#2F7DF6]">
            ABOUT SOTTER LABS
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[#030B26] sm:text-5xl">
            A software studio focused on clarity, execution and long-term value.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#667085]">
            Sotter Labs Ltd. is a Chilean/Canadian software development studio building
            modern digital products for businesses, startups and independent
            projects.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#667085]">
            We combine technical experience in backend development, mobile apps,
            web platforms, cloud services and automation to create solutions
            that are simple to use, reliable to operate and ready to scale.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-[#E6ECF5] bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-[#2F7DF6]">01</p>
              <p className="mt-2 text-sm font-bold text-[#030B26]">
                Strategy first
              </p>
            </div>

            <div className="rounded-3xl border border-[#E6ECF5] bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-[#7657FF]">02</p>
              <p className="mt-2 text-sm font-bold text-[#030B26]">
                Clean execution
              </p>
            </div>

            <div className="rounded-3xl border border-[#E6ECF5] bg-white p-6 shadow-sm">
              <p className="text-3xl font-black text-[#2F7DF6]">03</p>
              <p className="mt-2 text-sm font-bold text-[#030B26]">
                Scalable results
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2rem] bg-[#030B26] p-8 shadow-[0_30px_80px_rgba(3,11,38,0.22)]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(118,87,255,0.45),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(47,125,246,0.35),transparent_35%)]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8FB7FF]">
              Our approach
            </p>

            <h3 className="mt-6 text-3xl font-black text-white">
              Build what matters. Keep it simple. Make it work.
            </h3>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="font-bold text-white">Product mindset</p>
                <p className="mt-2 text-sm leading-6 text-[#B8C4D9]">
                  We design solutions around the business problem, not around
                  unnecessary complexity.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="font-bold text-white">Modern engineering</p>
                <p className="mt-2 text-sm leading-6 text-[#B8C4D9]">
                  Clean architecture, maintainable code and cloud-ready systems
                  from the beginning.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="font-bold text-white">Human-centered software</p>
                <p className="mt-2 text-sm leading-6 text-[#B8C4D9]">
                  Technology should make work easier, clearer and more useful
                  for the people using it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}