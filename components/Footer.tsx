import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E6ECF5] bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-[#030B26]">Sotter Labs Ltd.</p>
          <p className="mt-1 text-sm text-[#667085]">
            Software solutions for real-world businesses.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex items-center gap-5 text-sm font-bold text-[#344054]">
            <Link href="/privacy" className="transition hover:text-[#2F7DF6]">
              Privacy Policy
            </Link>
            <span className="text-[#E6ECF5]">|</span>
            <Link href="/terms" className="transition hover:text-[#2F7DF6]">
              Terms of Service
            </Link>
          </div>

          <p className="text-sm text-[#667085]">
            © {new Date().getFullYear()} Sotter Labs Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}