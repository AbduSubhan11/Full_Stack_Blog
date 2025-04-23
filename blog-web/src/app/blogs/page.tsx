"use client";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: "1",
    title: "Understanding Agentic AI: The Next Frontier",
    description:
      "Dive deep into the evolution from reactive AI to proactive, agentic systems and what it means for the future of technology.",
    image:
      "https://img.freepik.com/free-photo/futuristic-humanoid-robot-with-circuit-board-brain_23-2150870936.jpg?w=1380",
    date: "April 15, 2025",
  },
  {
    id: "2",
    title: "How Developers Can Build Smarter Agents",
    description:
      "A practical guide on architectures, tools, and frameworks to create autonomous AI agents.",
    image:
      "https://img.freepik.com/free-photo/ai-chip-technology-background-futuristic-innovations_53876-124661.jpg?w=1380",
    date: "April 10, 2025",
  },
  {
    id: "3",
    title: "Agentic vs Traditional AI: Key Differences",
    description:
      "Explore the core concepts that distinguish agentic AI systems from traditional ML models.",
    image:
      "https://img.freepik.com/free-photo/robot-face-close-up-with-glowing-eyes_23-2150849636.jpg?w=1380",
    date: "April 1, 2025",
  },
];

export default function BlogsPage() {
  return (
    <section className="bg-[#141414] text-white min-h-screen py-16 font-sans">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6 text-center">Latest Blog Posts</h1>
          <p className="text-[#807f7f] text-lg md:text-xl">
            Discover the latest insights, tutorials, and ideas from the world of Agentic AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-[#191919] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <p className="text-sm text-gray-400">{blog.date}</p>
                <h3 className="text-xl font-semibold text-yellow-500 line-clamp-1">{blog.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{blog.description}</p>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="inline-block text-yellow-400 mt-2 hover:underline text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
