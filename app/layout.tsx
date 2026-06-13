import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sotter Labs Ltd. | Software Development Studio",
  description:
    "Sotter Labs Ltd. builds modern web platforms, mobile apps, backend systems and cloud solutions for real-world businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}