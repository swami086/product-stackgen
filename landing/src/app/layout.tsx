import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aiden OS — Agent Ops Platform for the AI native SDLC | StackGen",
  description:
    "Aiden is an Agentic OS for DevOps and Platform engineers. Build and operate production, then observe and remediate it with shared context and guardrails in the same path.",
  openGraph: {
    title: "Aiden OS — Agent Ops Platform for the AI native SDLC",
    description:
      "Purpose built on one Agentic OS. Start anywhere in the SDLC loop.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text">{children}</body>
    </html>
  );
}
