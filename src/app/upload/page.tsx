
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileUploader from '../components/FileUploader';
import Uploading from '../components/Uploading';
import UploadComplete from '../components/UploadComplete';

type UploadStep = 'upload' | 'uploading' | 'complete';

const UploadPage = () => {
  const [uploadStep, setUploadStep] = useState<UploadStep>('upload');
  const router = useRouter();

  const handleUpload = async (files: File[]) => {
    setUploadStep('uploading');

    const uploadPromises = files.map((file) => {
      return fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: file.name,
          fileSize: file.size,
        }),
      });
    });

    try {
      await Promise.all(uploadPromises);
      setUploadStep('complete');
    } catch (error) {
      console.error('Upload failed', error);
      // Handle error, maybe go back to the upload step with an error message
      setUploadStep('upload');
    }
  };

  const handleShareMore = () => {
    router.push('/extraction/platform');
  };

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  const renderStep = () => {
    switch (uploadStep) {
      case 'upload':
        return <FileUploader onUpload={handleUpload} />;
      case 'uploading':
        return <Uploading />;
      case 'complete':
        return (
          <UploadComplete
            onShareMore={handleShareMore}
            onGoToDashboard={handleGoToDashboard}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {renderStep()}
      </div>
    </div>
  );
};

export default UploadPage;

