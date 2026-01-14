
'use client';

import { useState, useEffect } from 'react';

interface File {
  id: string;
  fileName: string;
  fileSize: number;
}

const DashboardPage = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch('/api/files');
      const data = await res.json();
      setFiles(data);
    };

    fetchFiles();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        <div className="mt-6">
          <ul className="space-y-4">
            {files.map((file) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-4 bg-gray-700 rounded-md"
              >
                <span>{file.fileName}</span>
                <span>{(file.fileSize / 1024).toFixed(2)} KB</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
