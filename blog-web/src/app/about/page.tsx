"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

interface SpotlightProps {
  className?: string;
  fill?: string;
  content?: { title: string; description: string }[]; // Added content prop
}

export default function AboutAIPage() {
  return (
    <section className="bg-[#141414] text-white min-h-screen  py-16 font-sans">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto space-y-10">
        {/* Hero */}
        <Spotlight
          className="top-0 left-0 right-0 h-full w-full opacity-65"
          fill="white"
        />
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold mb-6 text-center">
            About Agentic AI
          </h1>
          <p className="text-[#807f7f] text-lg md:text-xl">
            Exploring the frontier of autonomous intelligence and human-AI
            collaboration.
          </p>
        </div>
        <StickyScroll
          content={[
            {
              title: "What is Agentic AI?",
              description:
                "Agentic AI marks a bold shift from passive algorithms to intelligent entities that think, decide, and evolve with purpose. These systems don’t wait for instructions—they anticipate, adapt, and act with autonomy. Our blog is your gateway to understanding this emerging paradigm, where code gains agency and machines become collaborators in creativity, innovation, and problem-solving. Join us as we decode the future of intelligence.",
            },
            {
              title: "Our Mission",
              description:
                "At the core of Agentic AI lies a vision to create machines that don’t just compute, but comprehend. Our mission is to demystify this new frontier by translating complex AI advancements into insightful narratives, hands-on resources, and critical thought. We strive to empower developers, researchers, and forward-thinkers with the knowledge to build, challenge, and redefine what AI can become. This isn't just about automation, it's about intelligence with intent.\n\nWe created this platform as a space where developers, thinkers, and innovators can come together to share their ideas, insights, and breakthroughs around Agentic AI. Whether you're exploring new architectures, building intelligent agents, or simply curious about where AI is headed—this is a hub to connect, contribute, and grow together.",
            },
          ]}
          contentClassName=""
          backgroundImages={[
            "https://img.freepik.com/free-photo/futuristic-robot-interacting-with-digital-interface_23-2151966726.jpg?t=st=1745136931~exp=1745140531~hmac=a8c05f6254a7c25f9445376a0e4fd15702b057e8096e33c25707fd65e3d76174&w=1480",
            "https://img.freepik.com/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672054.jpg?t=st=1745137041~exp=1745140641~hmac=1721cb80f3004f9bc49bcfa9c4fc141978a3e60023db78ebbefc51f2d93ffd9a&w=1380",
          ]}
        />
      </div>

      {/* Join the Community */}
      <div className="bg-[#191919] mt-20 py-6">
        <div className=" bg-[#191919] text-center 2xl:max-w-[1400px] w-[90%] mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-yellow-500">
            Join the Agentic AI Community
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Whether you're writing code, researching behavior, or just
            passionate about where AI is headed your voice matters. Contribute,
            collaborate, and become a part of a movement that’s reshaping the
            way we think about intelligence.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-500 text-[#141414] font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-500"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
