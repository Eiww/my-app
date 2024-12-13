import React from "react";

interface ImageItemProps {
  src: string;
  alt: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, alt }) => {
  return (
    <div className="image-item">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

export default ImageItem;
