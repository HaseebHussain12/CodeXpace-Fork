import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollRestoration from "@/components/ScrollRestoration";
import DisableScrollRestoration from "@/components/DisableScrollRestoration";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CodeXpace - Bridging.",
  description:
    "Fast, intelligent custom software solutions, powered by AI and automation, tailored to meet your unique needs."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <DisableScrollRestoration />
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
