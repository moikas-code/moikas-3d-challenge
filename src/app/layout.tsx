import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moika;s 3D Modeling Challenge - Free Self-Paced Course for Printable Designs",
  description: "Master 3D modeling for 3D printing at your own pace. 52 progressive steps from beginner to advanced. Perfect for TinkerCAD & Blender users.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        {children}
        <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Link
              href="/challenge"
              className="inline-block bg-jade-500 hover:bg-jade-600 text-black font-bold py-2 px-6 rounded-lg mb-6"
            >
              Begin Your Journey Now
            </Link>
            <p className="mb-4">
              © 2024 Moikas. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="https://moikas.etsy.com" className="hover:text-jade-300">Etsy Shop</a>
              <a href="https://moikas.com" className="hover:text-jade-300">Shopify Store</a>
              <a href="https://youtube.com/@moikapy" className="hover:text-jade-300">YouTube</a>
              <a href="https://makerworld.com/@moikapy" className="hover:text-jade-300">MakerWorld</a>
              <a href="https://x.com/moikapy" className="hover:text-jade-300">X</a>
              <a href="https://twitch.tv/moikapy" className="hover:text-jade-300">Twitch</a>
            </div>
            <p className="mt-4 text-sm">Support the challenge — buy my merch!</p>
          </div>
        </footer>
      </body>
    </html>
  );
}