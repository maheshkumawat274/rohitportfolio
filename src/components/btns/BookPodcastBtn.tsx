

const BookPodcastBtn = () => {
  return (
    <>
     <button
          className=" text-xl w-64 h-12 rounded bg-emerald-500 text-gray-300 relative overflow-hidden group z-10 hover:text-gray-300 duration-1000"
        >
          <span
            className="absolute bg-emerald-600 w-72 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
          ></span>
          <span
            className="absolute bg-emerald-800 w-72 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
          ></span>
          <a 
                href='https://calendly.com/rohitprasharwork/30min?month=2025-07'
                target="_blank"
                rel="noopener noreferrer">
          Book Your Podcast
          </a>
        </button>
    </>
  )
}

export default BookPodcastBtn