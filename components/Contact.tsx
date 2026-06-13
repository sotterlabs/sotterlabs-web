export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-[#030B26] shadow-[0_30px_80px_rgba(3,11,38,0.22)]">
          <div className="relative px-8 py-16 sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(118,87,255,0.45),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(47,125,246,0.35),transparent_35%)]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#8FB7FF]">
                  CONTACT
                </span>

                <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Let&apos;s build something meaningful.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#B8C4D9]">
                  Whether you need a website, mobile app, backend system or
                  cloud-based solution, Sotter Labs can help you turn your idea
                  into a real product.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#8FB7FF]">
                  Get in touch
                </p>

                <a
                  href="mailto:contact@sotterlabs.com"
                  className="mt-5 block text-2xl font-black text-white transition hover:text-[#8FB7FF]"
                >
                  contact@sotterlabs.com
                </a>

                <p className="mt-5 text-sm leading-6 text-[#B8C4D9]">
                  Based in Canada. Working with businesses across North America
                  and beyond.
                </p>

                <a
                  href="mailto:contact@sotterlabs.com"
                  className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[#030B26] transition hover:-translate-y-1 hover:bg-[#EAF4FF]"
                >
                  Send an email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}