import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YADNESH KALYANKAR // TECHYHANDZ_0108",
  description: "Yadnesh Kalyankar (techyhandz_0108) — Personal Portfolio in a modern cyber-terminal monospace design language.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
