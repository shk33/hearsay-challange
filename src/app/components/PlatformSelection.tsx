
'use client';

import { Facebook, Instagram, MessageSquare } from 'lucide-react';

const PlatformSelection = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Platform Selection</h1>
      <p className="text-center text-gray-400 mt-2">
        Select the platform you want to extract files from.
      </p>
      <div className="flex justify-around mt-8">
        <button className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Facebook size={48} className="text-blue-500" />
          <span className="mt-2">Facebook</span>
        </button>
        <button className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Instagram size={48} className="text-pink-500" />
          <span className="mt-2">Instagram</span>
        </button>
        <button className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <MessageSquare size={48} className="text-green-500" />
          <span className="mt-2">Threads</span>
        </button>
      </div>
    </div>
  );
};

export default PlatformSelection;
