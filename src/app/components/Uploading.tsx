
'use client';

import { UploadCloud } from 'lucide-react';

const Uploading = () => {
  return (
    <div className="text-center text-gray-900 dark:text-white">
        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">Uploading In Progress</span>
        <h1 className="text-2xl font-bold mt-4">Extraction Assistant</h1>
        <p className="text-gray-600 dark:text-gray-400">Extraction in progress</p>

        <div className="my-8 flex justify-center">
            <div className="w-32 h-32 bg-cyan-200 rounded-full flex items-center justify-center">
                <UploadCloud className="text-cyan-800" size={64} />
            </div>
        </div>

        <div className="text-4xl font-bold">00:00</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
            <div className="bg-purple-600 h-2.5 rounded-full w-1/2"></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">Uploading</p>

        <p className="mt-8 text-purple-500 font-bold">Do Not Close App While Processing</p>
    </div>
  );
};

export default Uploading;
