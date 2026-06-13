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

        <p className="text-sm text-[#667085]">
          © {new Date().getFullYear()} Sotter Labs Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}