import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Sotter Labs Ltd.",
  description: "Terms and Conditions for Juno, developed by Sotter Labs Ltd.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#030B26]">
      <Navbar />

      <section className="px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          <span className="rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-bold text-[#2F7DF6]">
            JUNO
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#030B26] sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-4 text-sm font-bold text-[#667085]">
            Last updated: June 2026
          </p>

          <div className="mt-12 space-y-10 rounded-[2rem] border border-[#E6ECF5] bg-white p-8 shadow-sm lg:p-12">
            <p className="leading-7 text-[#344054]">
              Welcome to Juno. By downloading or using the App, you agree
              to these Terms and Conditions.
            </p>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Eligibility
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                You must meet the minimum legal age required in your
                country to use Juno.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Accounts
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                You are responsible for maintaining accurate account
                information and for keeping your login credentials secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Subscriptions
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Some features require an active Premium subscription.
                Subscription billing is handled entirely through Apple App
                Store or Google Play.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Acceptable Use
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                You agree not to:
              </p>
              <ul className="mt-4 space-y-2 leading-7 text-[#344054]">
                <li className="flex gap-3">
                  <span className="text-[#7657FF]">•</span>
                  Use the App for illegal purposes.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7657FF]">•</span>
                  Attempt to modify or reverse engineer the App.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7657FF]">•</span>
                  Disrupt or interfere with the service.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7657FF]">•</span>
                  Create fraudulent accounts.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Content
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Juno contains party games intended for entertainment
                purposes only. Users are responsible for their own
                decisions and actions while playing.
              </p>
            </div>

            <div className="rounded-2xl border border-[#FFE3B8] bg-[#FFF8EC] p-6">
              <h2 className="text-xl font-black text-[#030B26]">
                Alcohol Disclaimer
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Some game modes may include references to alcoholic
                beverages. Participation is completely optional. Users
                should always drink responsibly and comply with the laws
                applicable in their country or region.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Limitation of Liability
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Sotter Labs is not responsible for injuries, damages, or
                consequences resulting from the use of the App or
                participation in any challenges suggested by the games.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Changes
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                We may update these Terms from time to time. Continued use
                of the App constitutes acceptance of any updated version.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FBFF] p-6">
              <h2 className="text-xl font-black text-[#030B26]">Contact</h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Questions regarding these Terms may be sent to:
              </p>
              <a
                href="mailto:contact@sotterlabs.com"
                className="mt-3 inline-block font-bold text-[#2F7DF6] transition hover:text-[#7657FF]"
              >
                contact@sotterlabs.com
              </a>
            </div>
          </div>

          <Link
            href="/privacy"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#2F7DF6] transition hover:text-[#7657FF]"
          >
            Read our Privacy Policy →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
