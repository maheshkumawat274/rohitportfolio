// components/ImageCursorHome.tsx

import React from "react";
import ImageCursorTrail from "../../components/ui/ImageCursorTrail"; // Update path as per your structure

const images: string[] = [
  "/imgs/abouthome.jpg",
  "/imgs/about2.jpg",
  "/imgs/home.jpg",
  "/imgs/DSC_3516 (2).jpg",
  "/imgs/abouthome.jpg",
  "/imgs/about1.jpg",
  "/imgs/DSC_3510 (1).jpg",
  "/imgs/DSC_2541 2 (1).jpg",
  "/imgs/home.jpg",
];

const ImageCursorHome: React.FC = () => {
  return (
   <>
    <div className="flex justify-center bg-black">
       <ImageCursorTrail
      items={images}
      maxNumberOfImages={5}
      distance={25}
      imgClass="sm:w-60 w-28 sm:h-68 h-36"
      className="max-w-7xl rounded-3xl"
    >
      <article className="relative z-20 flex flex-col items-center justify-center">
        <h1 className="max-w-2xl text-center text-5xl font-bold text-gray-300 tracking-tight">
          Rohit Prashar – Gallery
        </h1>
      </article>
    </ImageCursorTrail>
    </div>
   </>
  );
};

export default ImageCursorHome;
