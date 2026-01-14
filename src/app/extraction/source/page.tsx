import Link from 'next/link';
import { Apple, Smartphone } from 'lucide-react';

const SourceSelectionPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <span className="text-sm text-purple-500">Starting Extraction</span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Hearsay Extraction Assistant</h1>
          <p className="text-gray-600 mt-2">Follow the instructions below to prepare for an extraction.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Link href="/extraction/platform" className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Apple size={64} className="text-gray-900" />
            <h2 className="font-semibold text-gray-900 mt-4">iPhone</h2>
            <p className="text-sm text-gray-500">iOS versions 11.1+</p>
          </Link>
          <Link href="/extraction/platform" className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:bg-gray-100 cursor-pointer">
            <Smartphone size={64} className="text-gray-900" />
            <h2 className="font-semibold text-gray-900 mt-4">Android</h2>
            <p className="text-sm text-gray-500">OS version 11.1+</p>
          </Link>
        </div>
        <div className="mt-6">
          <div className="block w-full text-center py-3 px-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
            Extract from a Non-Phone Source →
          </div>
        </div>
        <div className="mt-4">
          <Link href="/upload" className="block w-full text-center py-3 px-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200">
            Or, Upload Files
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SourceSelectionPage;