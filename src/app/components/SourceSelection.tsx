
'use client';

import { Smartphone, Upload } from 'lucide-react';

interface SourceSelectionProps {
  onSelectSource: (source: 'mobile' | 'upload') => void;
}

const SourceSelection = ({ onSelectSource }: SourceSelectionProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Starting Extraction</h1>
      <p className="text-center text-gray-400 mt-2">
        Select your source to begin the extraction process.
      </p>
      <div className="flex justify-around mt-8">
        <button
          onClick={() => onSelectSource('mobile')}
          className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Smartphone size={48} className="text-purple-400" />
          <span className="mt-2">iPhone / Android</span>
        </button>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => onSelectSource('upload')}
          className="text-purple-400 hover:underline"
        >
          Or, Upload Files
        </button>
      </div>
    </div>
  );
};

export default SourceSelection;
