"use client"
import { useState } from 'react';
import Modal from './Modal';


interface ImageProps {
  url: string;
  caption: string;
}

const images: ImageProps[] = [
  { url: '/Square_TransparentLines_Mushroom.png', caption: 'Image 1' },
  { url: '/Square_Neon_Heart.png', caption: 'Image 1' },
  { url: '/Square_FullColor_Sunset.png', caption: 'Image 1' },
  { url: '/Square_Purple_AlbumArt.png', caption: 'Image 1' },
  { url: '/Long_Mushroom_Flowers.png', caption: 'Image 1' },
  { url: '/Long_Purple.png', caption: 'Image 1' },
  { url: '/Long_Mushroom_Neon.png', caption: 'Image 1' },
  { url: '/Long_Shroomline.png', caption: 'Image 1' },
  // add more image objects here
];

const MasonryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="grid gap-4 cursor-pointer transform transition-all duration-500 ease-in-out hover:scale-105">
          <img
            className="h-auto max-w-full rounded-lg"
            src={image.url}
            alt={`gallery ${index}`}
            onClick={() => setSelectedImage(image.url)}
          />
        </div>
      ))}
      {selectedImage && (
        <Modal 
          img={selectedImage} 
          alt={`Selected`}
          setImg={setSelectedImage}
        />
      )}
    </div>
  );
};

export default MasonryGallery;

