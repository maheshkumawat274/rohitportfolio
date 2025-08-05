// "use client"

// import React, { useEffect, useRef, useState } from "react"
// import {
//   motion,
//   useAnimationFrame,
//   useMotionValue,
//   useScroll,
//   useSpring,
//   useTransform,
//   useVelocity,
// } from "framer-motion"

// import { cn } from "../lib/utils"

// interface TextScrollProps {
//   text: string
//   default_velocity?: number
//   className?: string
// }

// interface ParallaxProps {
//   children: string
//   baseVelocity: number
//   className?: string
// }

// export const wrap = (min: number, max: number, v: number) => {
//   const rangeSize = max - min
//   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
// }

// export const TextScroll: React.FC<TextScrollProps> = ({
//   text,
//   default_velocity = 5,
//   className,
// }) => {
//   const ParallaxText: React.FC<ParallaxProps> = ({
//     children,
//     baseVelocity = 100,
//     className,
//   }) => {
//     const baseX = useMotionValue(0)
//     const { scrollY } = useScroll()
//     const scrollVelocity = useVelocity(scrollY)
//     const smoothVelocity = useSpring(scrollVelocity, {
//       damping: 50,
//       stiffness: 400,
//     })

//     const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//       clamp: false,
//     })

//     const [repetitions, setRepetitions] = useState(1)
//     const containerRef = useRef<HTMLDivElement>(null)
//     const textRef = useRef<HTMLSpanElement>(null)

//     useEffect(() => {
//       const calculateRepetitions = () => {
//         if (containerRef.current && textRef.current) {
//           const containerWidth = containerRef.current.offsetWidth
//           const textWidth = textRef.current.offsetWidth
//           const newRepetitions = Math.ceil(containerWidth / textWidth) + 2
//           setRepetitions(newRepetitions)
//         }
//       }

//       calculateRepetitions()

//       window.addEventListener("resize", calculateRepetitions)
//       return () => window.removeEventListener("resize", calculateRepetitions)
//     }, [children])

//     const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`)

//     const directionFactor = useRef<number>(1)
//     useAnimationFrame((_, delta) => {
//       let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

//       if (velocityFactor.get() < 0) {
//         directionFactor.current = -1
//       } else if (velocityFactor.get() > 0) {
//         directionFactor.current = 1
//       }

//       moveBy += directionFactor.current * moveBy * velocityFactor.get()

//       baseX.set(baseX.get() + moveBy)
//     })

//     return (
//       <div
//         className="w-full overflow-hidden whitespace-nowrap"
//         ref={containerRef}
//       >
//         <motion.div className={cn("inline-block", className)} style={{ x }}>
//           {Array.from({ length: repetitions }).map((_, i) => (
//             <span key={i} ref={i === 0 ? textRef : null}>
//               {children}{" "}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     )
//   }

//   return (
//     <section className="relative w-full">
//       <ParallaxText baseVelocity={default_velocity} className={className}>
//         {text}
//       </ParallaxText>
//       <ParallaxText baseVelocity={-default_velocity} className={className}>
//         {text}
//       </ParallaxText>
//     </section>
//   )
// }
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// interface Props {
//   images: string[]; // array of image paths (6 items for a row)
//   baseVelocity?: number; // positive -> move left, negative -> move right
// }

// const wrap = (min: number, max: number, v: number) => {
//   const rangeSize = max - min;
//   if (rangeSize === 0) return min;
//   return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
// };

// export const TextScroll: React.FC<Props> = ({
//   images,
//   baseVelocity = 40,
// }) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const x = useMotionValue(0);
//   const [oneSetWidth, setOneSetWidth] = useState<number>(0);
//   const [ready, setReady] = useState(false);

//   // Wait for images to load, then measure width of one set
//   useEffect(() => {
//     let mounted = true;
//     const imgPromises = images.map(
//       (src) =>
//         new Promise<void>((res) => {
//           const img = new Image();
//           img.src = src;
//           if (img.complete) return res();
//           img.onload = () => res();
//           img.onerror = () => res(); // resolve even on error
//         })
//     );

//     const measure = () => {
//       if (!containerRef.current) return;
//       // container will contain images.concat(images) => totalWidth = 2 * oneSetWidth
//       const total = containerRef.current.scrollWidth || 0;
//       const one = total / 2;
//       if (mounted) {
//         setOneSetWidth(one);
//         setReady(one > 0);
//       }
//     };

//     Promise.all(imgPromises).then(() => {
//       measure();
//       // extra measure after small delay for stable layout
//       setTimeout(measure, 50);
//     });

//     const onResize = () => {
//       measure();
//     };
//     window.addEventListener("resize", onResize);

//     return () => {
//       mounted = false;
//       window.removeEventListener("resize", onResize);
//     };
//   }, [images]);

//   // Animation: only when ready and oneSetWidth known
//   useAnimationFrame((_, delta) => {
//     if (!ready || oneSetWidth === 0) return;
//     const moveBy = (baseVelocity * delta) / 1000;
//     // subtract so positive velocity moves content left (standard effect)
//     x.set(wrap(-oneSetWidth, 0, x.get() - moveBy));
//   });

//   return (
//     <div className="overflow-hidden w-full" ref={containerRef}>
//       <motion.div
//         className="flex items-center"
//         style={{ x }}
//       >
//         {/** render two sets for seamless loop **/}
//         {images.concat(images).map((src, idx) => (
//           <div
//             key={idx}
//             className="flex-shrink-0 px-2"
//             // RESPONSIVE widths:
//             // lg: 1/6 -> 6 visible on large screens
//             // sm: 1/3 -> 3 visible on small screens
//             // default w-1/2 for tiny screens (2 visible)
//             style={{ minWidth: 0 }}
//           >
//             <div className="w-1/2 px-2 bg-amber-300">
//               <img
//                 src={src}
//                 alt={`slide-${idx}`}
//                 className="w-full object-cover select-none pointer-events-none"
//                 draggable={false}
//               />
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default TextScroll;

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "../lib/utils";

interface TextScrollProps {
  images: string[]; // image list for one row
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  images: string[];
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const ParallaxImages: React.FC<ParallaxProps> = ({
  images,
  baseVelocity = 100,
  className,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && itemRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = itemRef.current.offsetWidth;
        const setWidth = itemWidth * images.length;
        if (setWidth > 0) {
          const newRepetitions = Math.ceil(containerWidth / setWidth) + 2;
          setRepetitions(newRepetitions);
        } else {
          setRepetitions(1);
        }
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [images]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <motion.div className={cn("inline-flex", className)} style={{ x }}>
        {Array.from({ length: repetitions }).map((_, rep) =>
          images.map((src, idx) => (
            <div
              key={`${rep}-${idx}`}
              ref={rep === 0 && idx === 0 ? itemRef : null}
              className="flex-shrink-0 px-2"
              style={{
                width: "16.66vw", // 100% / 6 images visible
                minWidth: "150px", // fallback for small screens
              }}
            >
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full  object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export const TextScroll: React.FC<TextScrollProps> = ({
  images,
  default_velocity = 50,
  className,
}) => {
  return (
    <section className="relative w-full space-y-6 py-6 bg-black">
      {/* Top Row → scroll right */}
      <ParallaxImages
        images={images.slice(0, 6)}
        baseVelocity={default_velocity}
        className={className}
      />
      {/* Bottom Row → scroll left */}
      <ParallaxImages
        images={images.slice(6, 12)}
        baseVelocity={-default_velocity}
        className={className}
      />
    </section>
  );
};
