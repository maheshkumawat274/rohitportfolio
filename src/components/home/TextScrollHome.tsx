// "use client"

// import { TextScroll } from "../ui/text-scroll"

// export function TextScrollDemo() {
//   return (
//     <>
//      <div className="bg-black">
//       <div className="px-2 md:px-20 pt-4">
//       <TextScroll
//       className="font-display text-center text-4xl font-semibold tracking-tighter  text-gray-300 bg-black md:text-7xl md:leading-[5rem]"
//       text="Rohit Prashar  "
//       default_velocity={5}
//     />
//     </div>
//      </div>
//     </>
//   )
// }

// "use client";

// import { TextScroll } from "../ui/text-scroll";

// export function TextScrollDemo() {
//   const imagesRow1 = [...Array(6)].map((_, i) => `/imgs/image${i + 1}.jpg`);
//   const imagesRow2 = [...Array(6)].map((_, i) => `/imgs/image${i + 7}.jpg`);

//   return (
//     <div className="bg-black space-y-6 py-6 px-20">
//       {/* Top row - scroll right */}
//       <TextScroll images={imagesRow1} baseVelocity={30} />

//       {/* Bottom row - scroll left */}
//       <TextScroll images={imagesRow2} baseVelocity={-30} />
//     </div>
//   );
// }

import { TextScroll } from "../ui/text-scroll";

export default function TextScrollDemo() {
  const imgs = [
    "/imgs/image1.jpg",
    "/imgs/image2.jpg",
    "/imgs/image3.jpg",
    "/imgs/image4.jpg",
    "/imgs/image5.jpg",
    "/imgs/image6.jpg",
    "/imgs/image7.jpg",
    "/imgs/image8.jpg",
    "/imgs/image9.jpg",
    "/imgs/image10.jpg",
    "/imgs/image11.jpg",
    "/imgs/image12.jpg",
  ];

  return <div className="px-2 md:px-20 bg-black pt-8">
    <h2 className="text-center font-bold text-3xl md:text-6xl">Podcast With</h2>
    <TextScroll images={imgs} default_velocity={1} />
  </div>;
}
