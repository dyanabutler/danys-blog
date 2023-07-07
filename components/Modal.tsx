"use client"

import { useState } from 'react';

interface ModalProps {
  img: string | null;
  alt?: string;
  setImg: React.Dispatch<React.SetStateAction<string | null>>;
}

const Modal: React.FC<ModalProps> = ({ img, alt, setImg }) => {
  const [isZoomed, setIsZoomed] = useState(true); // Image initially fitted to screen

  if (!img) return null;

  const handleZoom = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation(); // Prevents the click event from propagating up to the modal background
    setIsZoomed(!isZoomed); // Toggle zoom on click
  };

  return (
    <div 
      className="fixed z-10 left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75" 
      onClick={() => setImg(null)}
    >
      <img
        className={`max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)] ${isZoomed ? 'w-auto h-auto' : 'w-full h-full'} object-cover`}
        src={img}
        alt={alt || ''}
        onClick={handleZoom}
      />
      <button
        className="absolute top-4 right-4 bg-white bg-opacity-75 rounded-full p-1"
        onClick={() => setImg(null)}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
