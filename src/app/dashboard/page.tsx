
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
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Dashboard</h1>
        <div className="mt-6">
          <div className="max-h-96 overflow-y-auto">
            <ul className="space-y-4">
              {files.map((file) => (
                <li
                  key={file.id}
                  className="flex items-center justify-between p-4 bg-gray-100 rounded-md text-gray-900"
                >
                  <span>{file.fileName}</span>
                  <span>{(file.fileSize / 1024).toFixed(2)} KB</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
