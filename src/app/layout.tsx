import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite",
  description: "An AI-powered marketing SaaS landing page built with Next.js, Tailwind, and Framer Motion.",
  openGraph: {
    title: "ADmyBRAND AI Suite",
    description: "AI-powered marketing tools for modern brands.",
    url: "https://your-vercel-url.vercel.app",
    siteName: "ADmyBRAND",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ADmyBRAND AI Suite",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite",
    description: "AI-powered marketing tools for modern brands.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
