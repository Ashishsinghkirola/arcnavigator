import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArcNavigator — The smartest way to move stablecoins",
  description:
    "Intelligent cross-chain routing for stablecoins. Move USDC, USDT, and DAI across 12+ chains with the lowest fees and fastest settlement.",
  openGraph: {
    title: "ArcNavigator — The smartest way to move stablecoins",
    description:
      "Intelligent cross-chain routing for stablecoins. Move value across chains in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
