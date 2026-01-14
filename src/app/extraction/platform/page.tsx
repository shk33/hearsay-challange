
import Link from 'next/link';
import Image from 'next/image';

const PlatformSelectionPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <span className="text-sm text-purple-500">Starting Extraction</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">Hearsay Extraction Assistant</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Follow the instructions below to prepare for an extraction.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Image src="/file.svg" alt="iPhone" width={64} height={64} />
            <h2 className="font-semibold text-gray-900 dark:text-white mt-4">iPhone</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">iOS versions 11.1+</p>
          </div>
          <div className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Image src="/window.svg" alt="Android" width={64} height={64} />
            <h2 className="font-semibold text-gray-900 dark:text-white mt-4">Android</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">OS version 11.1+</p>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/extraction/source" className="block w-full text-center py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            Extract from a Non-Phone Source →
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/upload" className="block w-full text-center py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            Or, Upload Files
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelectionPage;
