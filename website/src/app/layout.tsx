import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { WebsiteProvider } from '@/context/AppContext';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Numaan Ali — MERN Stack Developer",
  description:
    "Portfolio of Numaan Ali, a MERN Stack Developer specializing in Next.js, React, Node.js, and MongoDB. Building scalable, high-quality web applications.",
  keywords: [
    "Numaan Ali",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Portfolio",
  ],
  authors: [{ name: "Numaan Ali" }],
  openGraph: {
    title: "Numaan Ali — MERN Stack Developer",
    description: "Portfolio of Numaan Ali — building scalable web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body><WebsiteProvider>
        {children}</WebsiteProvider>
      </body>
    </html>
  );
}
