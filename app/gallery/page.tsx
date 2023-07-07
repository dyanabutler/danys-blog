import React from 'react';
import MasonryGallery from '@/components/MasonryGallery';
import GalleryNavbar from '@/components/GalleryNavbar';


const GalleryPage: React.FC = () => {
  return (
    <>
    <GalleryNavbar />
    <div className='pt-20 m-5'>
      
       
      
      <MasonryGallery />
      
      </div>
    
    </>
  );
};

export default GalleryPage;
