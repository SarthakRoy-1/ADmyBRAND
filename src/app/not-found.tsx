'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you&apos;re looking for doesn’t exist.</p>
      <Link href="/" className="text-purple-500 underline hover:text-purple-300 transition duration-300">
        Go back home
      </Link>
    </div>
  );
}
