

const FeatureBtn = () => {
  return (
    <>
<button
  className="overflow-hidden relative w-64 p-2 h-12 bg-black text-gray-300 border-1 border-gray-700 rounded-md text-xl font-bold cursor-pointer r z-10 group text-center"
>
  Watch More Podcast
  <span
    className="absolute w-70 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
  ></span>
  <span
    className="absolute w-70 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
  ></span>
  <span
    className="absolute w-70 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Click to Explore</span>
</button>

    </>
  )
}

export default FeatureBtn