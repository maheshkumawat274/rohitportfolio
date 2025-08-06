import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import FeatureBtn from "../btns/FeatureBtn";

interface VideoCard {
  videoId: string;
  title: string;
  description: string;
  link: string;
}

const videoCards: VideoCard[] = [
  {
    videoId: "WBI5atoH4Oo?si=r13EfZEoME7JdL11",
    title: "How Can UX/UI Designers Earn More Than ₹2 Lakh Per Month?",
    description: "Tips and strategies to increase your podcast listenership organically.",
    link: "https://youtu.be/WBI5atoH4Oo?si=eO4v-ex4OatZtQnQ",
  },
  {
    videoId: "FUzBiPQHriU?si=DRD1-b2uSXzEoLYS",
    title: "19 Year Old Boy Freelancer Earns ₹5 Lakh/Month with Video Editing?",
    description: "A deep dive into advanced audio editing techniques for podcasts.",
    link: "https://youtu.be/FUzBiPQHriU?si=LvV5vUlAVZ0xHiIU",
  },
  {
    videoId: "nuMBN9TVDds?si=nwiQOhj12Vj5rqY5",
    title: "16 Year Old Girl Earns ₹1 Lakh/Month with Video Editing?",
    description: "Learn proven monetization models and sponsorship strategies.",
    link: "https://youtu.be/nuMBN9TVDds?si=OEUYbFnB59rT0Rht",
  },
  {
    videoId: "PS-1HK_BVys?si=TV4HYCHLDHHT6uqw",
    title: "UPSC Aspirants, Don’t Miss This Before You Start!",
    description: "Tips and strategies to increase your podcast listenership organically.",
    link: "https://youtu.be/PS-1HK_BVys?si=kHHvtpaFhtm7xQ7f",
  },
  {
    videoId: "43LbnPWA9wY?si=WLxZrpN0PnvDvVFi",
    title: "Before You Start an Agency in 2025 Watch This! (Real Talk)",
    description: "A deep dive into advanced audio editing techniques for podcasts.",
    link: "https://youtu.be/43LbnPWA9wY?si=WLxZrpN0PnvDvVFi",
  },
  {
    videoId: "nY00oIIFLQ4?si=CTvmiBr6r2HSTTYv",
    title: "₹1.2 CRORE Worth of Business Knowledge in 47 Minutes?",
    description: "Learn proven monetization models and sponsorship strategies.",
    link: "https://youtu.be/nY00oIIFLQ4?si=CTvmiBr6r2HSTTYv",
  },
];

const FeaturedPodcastHome: React.FC = () => {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string>("");
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Helper: remove any query params after '?'
  const cleanId = (vid: string) => vid.split("?")[0];

  // Open modal
  const openModal = (videoId: string, title: string) => {
    setOpenVideoId(cleanId(videoId));
    setOpenTitle(title);
  };

  // Close modal
  const closeModal = () => {
    setOpenVideoId(null);
    setOpenTitle("");
  };

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus close button when modal opens
  useEffect(() => {
    if (openVideoId && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [openVideoId]);

  return (
    <section className="py-0 md:py-16 px-2 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl text-gray-300 font-bold text-center mb-4">
          Watch My Podcasts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-in">
          {videoCards.map(({ videoId, title, description, link }) => {
            const id = cleanId(videoId);
            return (
              <div
                key={videoId}
                className="bg-[#0D0D0D] rounded-2xl shadow-lg overflow-hidden flex flex-col cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => openModal(videoId, title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openModal(videoId, title);
                }}
                aria-label={`Open video: ${title}`}
              >
                {/* Thumbnail (YouTube embed preview) */}
                <div className="aspect-video w-full bg-black flex items-center justify-center">
                  {/* Using YouTube thumbnail */}
                  <img
                    src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl text-gray-300 font-semibold mb-2 line-clamp-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 flex-grow line-clamp-3">{description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-500 font-medium">Play ▶</span>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-gray-400 hover:underline"
                    >
                      Open on YouTube
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-14">
          <Link to="/podcast">
            <FeatureBtn />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {openVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={openTitle}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            <div className="bg-[#0B0B0B] rounded-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <h3 className="text-sm sm:text-lg text-gray-200 font-semibold truncate max-w-[80%]">
                  {openTitle}
                </h3>
                <button
                  ref={closeBtnRef}
                  onClick={closeModal}
                  className="ml-4 px-3 py-1 rounded-md border border-transparent text-gray-200 hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                  aria-label="Close video"
                >
                  Close ✕
                </button>
              </div>

              {/* Responsive iframe */}
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1&rel=0`}
                  title={openTitle}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Footer (optional: direct link) */}
              <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-end gap-4">
                <a
                  href={`https://youtu.be/${openVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Open on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPodcastHome;
