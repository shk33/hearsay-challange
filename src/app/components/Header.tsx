
'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          Hearsay
        </Link>
        <nav>
          {session ? (
            <div className="flex items-center space-x-4">
              <Link href="/upload" className="hover:text-purple-300">
                Upload
              </Link>
              <Link href="/dashboard" className="hover:text-purple-300">
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/login" className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
