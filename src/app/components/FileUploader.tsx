
'use client';

import { CheckCircle, X, Folder as FolderIcon } from 'lucide-react';
import { useState, useRef } from 'react';

interface FileUploaderProps {
  onUpload: (files: File[]) => void;
  onBack: () => void;
}

const FileUploader = ({ onUpload, onBack }: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files as FileList)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="text-gray-900">
      <div className="text-center">
        <span className="text-sm text-purple-500">Starting Extraction</span>
        <h1 className="text-2xl font-bold mt-2">File Upload</h1>
        <p className="text-gray-600 mt-2">Select files to upload for review</p>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <FolderIcon className="text-gray-500" />
            <span className="ml-2 text-gray-500">Find files to upload</span>
          </div>
          <button
            onClick={handleBrowseClick}
            className="px-4 py-2 font-bold text-blue-800 bg-blue-200 rounded-md hover:bg-blue-300"
          >
            Browse
          </button>
        </div>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
            >
              <div className="flex items-center">
                <CheckCircle className="text-green-500" />
                <span className="ml-2">{file.name}</span>
              </div>
              <button
                onClick={() => handleRemoveFile(index)}
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
        {files.length > 0 && (
          <button
            onClick={() => onUpload(files)}
            className="w-full px-4 py-3 mt-6 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700"
          >
            Upload Now
          </button>
        )}
        <button
          onClick={onBack}
          className="w-full px-4 py-3 mt-4 font-bold text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
