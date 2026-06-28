import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Sotter Labs Ltd.",
  description: "Privacy Policy for Juno, developed by Sotter Labs Ltd.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#030B26]">
      <Navbar />

      <section className="px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          <span className="rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-bold text-[#2F7DF6]">
            JUNO
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#030B26] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm font-bold text-[#667085]">
            Last updated: June 2026
          </p>

          <div className="mt-12 space-y-10 rounded-[2rem] border border-[#E6ECF5] bg-white p-8 shadow-sm lg:p-12">
            <p className="leading-7 text-[#344054]">
              Juno (&quot;the App&quot;) is developed and operated by Sotter
              Labs. This Privacy Policy explains what information we
              collect, how we use it, and how we protect your data.
            </p>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Information We Collect
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                The App may collect the following information:
              </p>
              <ul className="mt-4 space-y-2 leading-7 text-[#344054]">
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Name or nickname
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Email address
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Date of birth (only to verify minimum age requirements)
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Country or region
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Language preference
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Premium subscription status
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Anonymous analytics and crash reports (when available)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Google Sign-In
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                If you choose to sign in using Google, we receive only the
                information you authorize Google to share, such as your
                email address and basic profile. We never access your
                Google password.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                How We Use Your Information
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Your information is used to:
              </p>
              <ul className="mt-4 space-y-2 leading-7 text-[#344054]">
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Create and manage your account.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Verify your eligibility based on age.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Restore purchases and premium access.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Provide customer support.
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2F7DF6]">•</span>
                  Improve the application.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Subscriptions
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Premium subscriptions are processed securely through Apple
                App Store or Google Play. We do not store your payment
                information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Data Storage
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Your information is securely stored on servers managed by
                Sotter Labs. Reasonable security measures are implemented
                to protect your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Children
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                Juno is intended only for users who meet the minimum age
                required in their country. Users who do not meet the
                minimum age requirement may not create an account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#030B26]">
                Your Rights
              </h2>
              <p className="mt-3 leading-7 text-[#344054]">
                You may request access, correction, or deletion of your
                personal information by contacting us.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FBFF] p-6">
              <h2 className="text-xl font-black text-[#030B26]">Contact</h2>
              <p className="mt-3 leading-7 text-[#344054]">
                For questions regarding this Privacy Policy, please contact:
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
            href="/terms"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#2F7DF6] transition hover:text-[#7657FF]"
          >
            Read our Terms of Service →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}


