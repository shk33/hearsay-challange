
'use client';

import { UploadCloud } from 'lucide-react';
import { useEffect, useState } from 'react';

interface UploadingProps {
  onUploadComplete: () => void;
}

const Uploading = ({ onUploadComplete }: UploadingProps) => {
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (progress === 100) {
      onUploadComplete();
    }
  }, [progress, onUploadComplete]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(timer);
          return 100;
        }
        return prev + 20;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(progressInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <div className="text-center text-gray-900">
        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">Uploading In Progress</span>
        <h1 className="text-2xl font-bold mt-4">Extraction Assistant</h1>
        <p className="text-gray-600">Extraction in progress</p>

        <div className="my-8 flex justify-center">
            <div className="w-32 h-32 bg-cyan-200 rounded-full flex items-center justify-center">
                <UploadCloud className="text-cyan-800" size={64} />
            </div>
        </div>

        <div className="text-4xl font-bold">{formatTime(time)}</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">Uploading</p>

        <p className="mt-8 text-purple-500 font-bold">Do Not Close App While Processing</p>
    </div>
  );
};

export default Uploading;
