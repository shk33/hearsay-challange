import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const PlatformSelectionPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <span className="text-sm text-purple-500">Starting Extraction</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Hearsay Extraction Assistant</h1>
          <p className="text-gray-600 mt-2">Follow the instructions below to prepare for an extraction device.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <Link href="/upload" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Facebook size={64} className="text-gray-900" />
            <h2 className="font-semibold text-gray-900 mt-2">Facebook</h2>
          </Link>
          <Link href="/upload" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Instagram size={64} className="text-gray-900" />
            <h2 className="font-semibold text-gray-900 mt-2">Instagram</h2>
          </Link>
          <Link href="/upload" className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Twitter size={64} className="text-gray-900" />
            <h2 className="font-semibold text-gray-900 mt-2">Threads</h2>
          </Link>
        </div>
        <div className="mt-6">
          <Link href="/upload" className="block w-full text-center py-3 px-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
            Or, Upload Files
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/extraction/source" className="block w-full text-center px-4 py-3 font-bold text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelectionPage;