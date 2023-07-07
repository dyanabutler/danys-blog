import React from 'react';
import VideosNavbar from '@/components/VideosNavbar'; // replace this with the actual path

const VideosPage: React.FC = () => {
  return (
    <div className="mt-24 mx-auto max-w-3xl">
      <VideosNavbar />
      <h1>This is the Videos Page</h1>
      {/* your videos display components go here */}
    </div>
  );
};

export default VideosPage;