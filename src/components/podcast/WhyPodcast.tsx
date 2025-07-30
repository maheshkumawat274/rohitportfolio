import React from "react";
import {
  Mic,
  Users,
  Globe,
  Radio,
  BrainCircuit,
} from "lucide-react"; // icons from lucide-react

const cards = [
  {
    icon: <Mic className="text-green-500 w-8 h-8" />,
    title: "Share Your Expertise",
    description:
      "Use your voice to educate, inform, and influence others in your industry.",
  },
  {
    icon: <Users className="text-green-500 w-8 h-8" />,
    title: "Build Authentic Connections",
    description:
      "Podcasting builds trust and creates a loyal community around your message.",
  },
  {
    icon: <Globe className="text-green-500 w-8 h-8" />,
    title: "Reach a Global Audience",
    description:
      "Break geographical boundaries and share your content with listeners worldwide.",
  },
  {
    icon: <Radio className="text-green-500 w-8 h-8" />,
    title: "Increase Visibility",
    description:
      "Boost your personal or brand presence through regular audio content.",
  },
  {
    icon: <BrainCircuit className="text-green-500 w-8 h-8" />,
    title: "Develop Communication Skills",
    description:
      "Enhance your clarity, storytelling, and confidence by consistently speaking on topics you love.",
  },
];

const WhyPodcast: React.FC = () => {
  return (
    <section className="bg-black flex justify-center py-4 px-2 md:px-20">
      <div>
        <h2 className="text-3xl md:text-5xl text-gray-300 font-bold text-center mb-4">
        Why You Should Start a Podcast
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Explore the key reasons why podcasting is one of the most powerful ways to connect, grow, and share your voice in the digital age.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl text-gray-300 font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-500 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WhyPodcast;
