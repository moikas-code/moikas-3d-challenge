'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Moikas 3D</h2>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-jade-300">Home</Link>
          <Link href="/challenge" className="hover:text-jade-300">Challenge</Link>
          <a href="https://moikas.com" className="hover:text-jade-300">Shop</a>
        </nav>
        <Link
          href="/challenge"
          className="hidden md:block bg-jade-500 hover:bg-jade-600 text-black font-bold py-2 px-6 rounded-lg transition"
        >
          Start Challenge
        </Link>
        <button onClick={toggleSidebar} className="md:hidden text-2xl">☰</button>
      </div>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 ${sidebarOpen ? 'block' : 'hidden'}`} onClick={closeSidebar}>
        <div className="fixed right-0 top-0 h-full w-64 bg-black text-white p-6" onClick={(e) => e.stopPropagation()}>
          <button onClick={closeSidebar} className="text-2xl mb-4">&times;</button>
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={closeSidebar} className="hover:text-jade-300">Home</Link>
            <Link href="/challenge" onClick={closeSidebar} className="hover:text-jade-300">Challenge</Link>
            <a href="https://moikas.etsy.com" onClick={closeSidebar} className="hover:text-jade-300">Shop</a>
            <Link
              href="/challenge"
              onClick={closeSidebar}
              className="bg-jade-500 hover:bg-jade-600 text-black font-bold py-2 px-4 rounded-lg text-center"
            >
              Start Challenge
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}