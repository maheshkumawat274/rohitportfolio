import React, { useEffect, useRef, useState } from "react";
import FeatureBtn from "../btns/FeatureBtn";

interface VideoCard {
  videoId: string;
  title: string;
  description: string;
  link: string;
}

const videoCards: VideoCard[] = [
  { videoId: "WBI5atoH4Oo?si=r13EfZEoME7JdL11", title: "How Can UX/UI Designers Earn More Than ₹2 Lakh Per Month?", description: "Tips and strategies to increase your podcast listenership organically.", link: "https://youtu.be/WBI5atoH4Oo?si=eO4v-ex4OatZtQnQ" },
  { videoId: "FUzBiPQHriU?si=DRD1-b2uSXzEoLYS", title: "19 Year Old Boy Freelancer Earns ₹5 Lakh/Month with Video Editing?", description: "A deep dive into advanced audio editing techniques for podcasts.", link: "https://youtu.be/FUzBiPQHriU?si=LvV5vUlAVZ0xHiIU" },
  { videoId: "nuMBN9TVDds?si=nwiQOhj12Vj5rqY5", title: "16 Year Old Girl Earns ₹1 Lakh/Month with Video Editing?", description: "Learn proven monetization models and sponsorship strategies.", link: "https://youtu.be/nuMBN9TVDds?si=OEUYbFnB59rT0Rht" },
  { videoId: "htefwB-QVbc?si=sN4YHIPwCV4Vk4vf", title: "UX/UI Designers Can Earn ₹2 Lakh Per Month — Proven Secrets", description: "Strategies, pricing and client-playbook for scaling as a UX/UI designer.", link: "https://youtu.be/htefwB-QVbc?si=uLCG8SkWH6L_jOG8" },
  { videoId: "_s5jJujrMgw?si=lbLCrioHvqdberD2", title: "How to Start Video Editing in 2025 — Beginner’s Roadmap", description: "Step-by-step beginner roadmap to become a pro video editor in 2025.", link: "https://youtu.be/_s5jJujrMgw?si=HmwBYhOP489QP-zy" },
  { videoId: "3eSSXHP6yXQ?si=Qxj_XB1Scft4IbRS", title: "DON'T START Video Editing in 2025 Before Watching This!", description: "Common mistakes, expectations and realistic advice before you begin editing.", link: "https://youtu.be/3eSSXHP6yXQ?si=trFdyAV39FjDI3Xg" },
  { videoId: "PS-1HK_BVys?si=TV4HYCHLDHHT6uqw", title: "UPSC Aspirants, Don’t Miss This Before You Start!", description: "Tips and strategies to increase your podcast listenership organically.", link: "https://youtu.be/PS-1HK_BVys?si=kHHvtpaFhtm7xQ7f" },
  { videoId: "43LbnPWA9wY?si=WLxZrpN0PnvDvVFi", title: "Before You Start an Agency in 2025 Watch This! (Real Talk)", description: "A deep dive into advanced audio editing techniques for podcasts.", link: "https://youtu.be/43LbnPWA9wY?si=WLxZrpN0PnvDvVFi" },
  { videoId: "nY00oIIFLQ4?si=CTvmiBr6r2HSTTYv", title: "₹1.2 CRORE Worth of Business Knowledge in 47 Minutes?", description: "Learn proven monetization models and sponsorship strategies.", link: "https://youtu.be/nY00oIIFLQ4?si=CTvmiBr6r2HSTTYv" },
  { videoId: "j_kmZG3GfJQ?si=COtWA9o6Y1CAFmYz", title: "10 Lakh/Month as a BTech 3rd-Year Student & Agency Owner?!", description: "Talha shares how he scaled an editing agency as a college student.", link: "https://youtu.be/j_kmZG3GfJQ?si=COtWA9o6Y1CAFmYz" },
  { videoId: "A9HBRNwTmc4?si=vIt5LkafdX1x990G", title: "How I Earn ₹20000 for Just 1 Minute of Editing?!", description: "Insights from Episode 2 with Abhay PS Rajawat on The Rohit Prashar Show.", link: "https://youtu.be/A9HBRNwTmc4?si=vIt5LkafdX1x990G" },
  { videoId: "WCGN5OHOkM4?si=tpmuAged_mcNx4mm", title: "DON'T Start a Video Editing Agency Before Watching This!", description: "Pitfalls and planning before launching your own editing agency.", link: "https://youtu.be/WCGN5OHOkM4?si=lGWHJiCN7hsotBEu" },
];

const PodcastVideos: React.FC = () => {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string>("");
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // clean video id (remove query params and any accidental prefixes)
  const cleanId = (raw: string) => {
    if (!raw) return raw;
    // remove possible 'src="' prefix
    const withoutSrc = raw.replace(/^src=["']?/, "");
    // split at ? and take first part
    return withoutSrc.split("?")[0].replace(/[^a-zA-Z0-9-_]/g, "");
  };

  // open modal
  const openModal = (videoId: string, title: string) => {
    setOpenVideoId(cleanId(videoId));
    setOpenTitle(title);
  };

  // close modal
  const closeModal = () => {
    setOpenVideoId(null);
    setOpenTitle("");
  };

  // close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // focus close when modal opens
  useEffect(() => {
    if (openVideoId && closeBtnRef.current) closeBtnRef.current.focus();
  }, [openVideoId]);

  return (
    <section className="py-16 px-2 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl text-gray-300 font-bold text-center mb-3">Top podcasts:</h1>
        <p className="text-xl sm:text-2xl text-gray-500 font-semibold text-center mb-12">Discover the selection of the most popular podcasts.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                {/* Thumbnail */}
                <div className="aspect-video w-full bg-black flex items-center justify-center">
                  <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} className="w-full h-full object-cover" />
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-300 line-clamp-2">{title}</h2>
                  <p className="text-gray-400 flex-grow line-clamp-3">{description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-green-500 font-medium">Play ▶</span>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-0 text-sm text-gray-400 hover:underline"
                    >
                      Watch on YouTube →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-14">
          <a href="https://www.youtube.com/@therohitprashar" target="_blank" rel="noopener noreferrer">
            <FeatureBtn />
          </a>
        </div>
      </div>

      {/* Modal */}
      {openVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={openTitle}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={closeModal} />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            <div className="bg-[#0B0B0B] rounded-xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <h3 className="text-sm sm:text-lg text-gray-200 font-semibold truncate max-w-[80%]">{openTitle}</h3>
                <button
                  ref={closeBtnRef}
                  onClick={closeModal}
                  className="ml-4 px-3 py-1 rounded-md border border-transparent text-gray-200 hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                  aria-label="Close video"
                >
                  Close ✕
                </button>
              </div>

              {/* Iframe */}
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

              {/* Footer */}
              <div className="px-4 py-3 border-t border-gray-800 flex items-center justify-end gap-4">
                <a href={`https://youtu.be/${openVideoId}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
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

export default PodcastVideos;
