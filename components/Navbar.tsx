import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#E6ECF5]/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <Image
            src="/sotter-logo-complete.png"
            alt="Sotter Labs"
            width={160}
            height={53}
            priority
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-[#344054] md:flex">
          <a href="#services" className="transition hover:text-[#2F7DF6]">
            Services
          </a>
          <a href="#projects" className="transition hover:text-[#2F7DF6]">
            Projects
          </a>
          <a href="#about" className="transition hover:text-[#2F7DF6]">
            About
          </a>
          <a href="#contact" className="transition hover:text-[#2F7DF6]">
            Contact
          </a>
        </div>

        {/*}<a
          href="#contact"
          className="rounded-full bg-[#030B26] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(3,11,38,0.20)] transition hover:-translate-y-0.5 hover:bg-[#2F7DF6]"
        >
          Let&apos;s talk
        </a>*/}
      </nav>
    </header>
  );
}