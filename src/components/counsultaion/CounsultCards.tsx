
import { FaVideo, FaPhoneAlt, FaLinkedin, FaYoutube } from "react-icons/fa";

const cardData = [
  {
    title: "🎬 Learn Video Editing for Free: Complete Playlist",
    desc: "A step-by-step video editing learning path for beginners. Free resource to help you master editing and grow your content skills.",
    btn: "More Details",
    link: "https://topmate.io/therohitprashar/page/cTXbOFKSlE",
    icon: <FaVideo className="text-4xl text-[#1ec258]" />,
  },
  {
    title: "📞 1:1 Consultation Call: Roadmap to 6 Figures",
    desc: "A 1:1 call where we break down your potential, analyze your niche, and create a roadmap to build a 6-figure content strategy.",
    btn: "More Details",
    link: "https://topmate.io/therohitprashar/page/UrbTcTJkYD",
    icon: <FaPhoneAlt className="text-4xl text-[#1ec258]" />,
  },
  {
    title: "💼 LinkedIn Personal Branding Call",
    desc: "Optimize your LinkedIn, build authority, and learn how to stand out as a creator or professional.",
    btn: "More Details",
    link: "https://topmate.io/therohitprashar/page/EFZ7IgqBJ7",
    icon: <FaLinkedin className="text-4xl text-[#1ec258]" />,
  },
  {
    title: "📈 1:1 YouTube Growth Consultation Call",
    desc: "Learn how to build, grow and monetize your YouTube channel with content, hooks, thumbnails, and consistency strategies.",
    btn: "More Details",
    link: "https://topmate.io/therohitprashar/page/LPVUdXQAQO",
    icon: <FaYoutube className="text-4xl text-[#1ec258]" />,
  },
];

const CounsultCards = () => {
  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="border border-white rounded-xl p-6 bg-black shadow-md transition-transform transform hover:scale-101 hover:shadow-[0_0_8px_#1ec258] flex flex-col items-start"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-bold text-gray-300 mb-3">{card.title}</h2>
            <p className="text-gray-500 mb-5">{card.desc}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white hover:border-green-400 text-gray-300 hover:text-green-400 rounded-lg transition"
            >
              {card.btn}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounsultCards;
