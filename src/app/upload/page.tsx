
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileUploader from '../components/FileUploader';
import Uploading from '../components/Uploading';
import UploadComplete from '../components/UploadComplete';

enum UploadSteps {
  UPLOAD = 'upload',
  UPLOADING = 'uploading',
  COMPLETE = 'complete',
}

const UploadPage = () => {
  const [uploadStep, setUploadStep] = useState<UploadSteps>(UploadSteps.UPLOAD);
  const [resetKey, setResetKey] = useState(0);
  const router = useRouter();

  const handleUpload = async (files: File[]) => {
    setUploadStep(UploadSteps.UPLOADING);
    setResetKey((prevKey) => prevKey + 1);

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
    } catch (error) {
      console.error('Upload failed', error);
      setUploadStep(UploadSteps.UPLOAD);
    }
  };

  const handleUploadComplete = () => {
    setUploadStep(UploadSteps.COMPLETE);
  };

  const handleShareMore = () => {
    router.push('/extraction/source');
  };

  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  const handleBack = () => {
    router.back();
  };

  const renderStep = () => {
    switch (uploadStep) {
      case UploadSteps.UPLOAD:
        return <FileUploader onUpload={handleUpload} onBack={handleBack} />;
      case UploadSteps.UPLOADING:
        return (
          <Uploading
            key={resetKey}
            onUploadComplete={handleUploadComplete}
          />
        );
      case UploadSteps.COMPLETE:
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
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md">
        {renderStep()}
      </div>
    </div>
  );
};

export default UploadPage;

