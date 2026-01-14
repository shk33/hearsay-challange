
'use client';

import { CheckCircle, X, File as FileIcon } from 'lucide-react';
import { useState, useRef } from 'react';

interface FileUploaderProps {
  onUpload: (files: File[]) => void;
}

const FileUploader = ({ onUpload }: FileUploaderProps) => {
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
    <div className="text-gray-900 dark:text-white">
      <div className="text-center">
        <span className="text-sm text-purple-500">Starting Extraction</span>
        <h1 className="text-2xl font-bold mt-2">File Upload</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Select files to upload for review</p>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center">
            <FileIcon className="text-gray-500" />
            <span className="ml-2 text-gray-500">Find files to upload</span>
          </div>
          <button
            onClick={handleBrowseClick}
            className="px-4 py-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700"
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
              className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-md"
            >
              <div className="flex items-center">
                <CheckCircle className="text-green-500" />
                <span className="ml-2">{file.name}</span>
              </div>
              <button
                onClick={() => handleRemoveFile(index)}
                className="text-gray-400 hover:text-white"
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
      </div>
    </div>
  );
};

export default FileUploader;
