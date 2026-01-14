
'use client';

import { File as FileIcon, Search } from 'lucide-react';

interface UploadCompleteProps {
  onShareMore: () => void;
  onGoToDashboard: () => void;
}

const UploadComplete = ({
  onShareMore,
  onGoToDashboard,
}: UploadCompleteProps) => {
  return (
    <div className="text-center text-gray-900 dark:text-white">
        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">Uploading Completed</span>
        <h1 className="text-2xl font-bold mt-4">Files Uploaded Successfully</h1>
        <p className="text-gray-600 dark:text-gray-400">Files are being processed for review online.</p>

        <div className="my-8 flex justify-center">
            <div className="w-32 h-32 bg-cyan-200 rounded-full flex items-center justify-center">
                <FileIcon className="text-cyan-800" size={64} />
            </div>
        </div>

        <h2 className="text-xl font-bold">You're all set!</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Share more files or head back to the dashboard</p>

        <div className="mt-8 space-y-4">
            <button
                onClick={onShareMore}
                className="w-full flex items-center justify-center px-4 py-3 font-bold text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600"
            >
                <Search className="mr-2" />
                Share more files →
            </button>
            <button
                onClick={onGoToDashboard}
                className="w-full px-4 py-3 font-bold text-purple-600 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900"
            >
                Go to Dashboard
            </button>
        </div>
    </div>
  );
};

export default UploadComplete;
