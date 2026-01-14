
import Link from 'next/link';
import Image from 'next/image';

const SourceSelectionPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <span className="text-sm text-purple-500">Starting Extraction</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">Hearsay Extraction Assistant</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Follow the instructions below to prepare for an extraction device.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Image src="/globe.svg" alt="Facebook" width={64} height={64} />
            <h2 className="font-semibold text-gray-900 dark:text-white mt-2">Facebook</h2>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Image src="/globe.svg" alt="Instagram" width={64} height={64} />
            <h2 className="font-semibold text-gray-900 dark:text-white mt-2">Instagram</h2>
          </div>
          <div className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <Image src="/globe.svg" alt="Threads" width={64} height={64} />
            <h2 className="font-semibold text-gray-900 dark:text-white mt-2">Threads</h2>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/upload" className="block w-full text-center py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            Or, Upload Files
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="/extraction/platform" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SourceSelectionPage;
