"use client"

import { TextScroll } from "../ui/text-scroll"

export function TextScrollDemo() {
  return (
    <>
     <div className="bg-black">
      <div className="px-2 md:px-20 pt-4">
      <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-gray-300 bg-black md:text-7xl md:leading-[5rem]"
      text="Rohit Prashar  "
      default_velocity={5}
    />
    </div>
     </div>
    </>
  )
}
