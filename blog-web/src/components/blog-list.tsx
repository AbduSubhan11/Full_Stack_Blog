"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    author: "John Techson",
    category: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    summary:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: "24.5k",
    comments: 50,
    shares: 20,
    avatar: "/avatars/john.png",
  },
  {
    id: 2,
    author: "Sarah Ethicist",
    category: "AI Ethics",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    summary:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: "32k",
    comments: 72,
    shares: 18,
    avatar: "/avatars/sarah.png",
  },
  {
    id: 3,
    author: "Astronomer X",
    category: "Space Exploration",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    summary:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: "20k",
    comments: 31,
    shares: 12,
    avatar: "/avatars/astro.png",
  },
];

const categories = [
  "All",
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#141414] text-white space-y-12">
      {/* HEADER */}
      <section className="bg-[#191919] text-white py-16 ">
        <div className="2xl:max-w-[1400px] w-[90%] mx-auto  flex flex-col md:flex-row justify-between items-start md:items-center ">
          <div>
            <span className="bg-[#2a2a2a] text-sm text-gray-300 px-3 py-1 rounded-md mb-2 inline-block">
              A Knowledge Treasure Trove
            </span>
            <h1 className="text-3xl md:text-[40px] font-semibold mt-2">
              Explore FutureTech&apos;s In-Depth Blog Posts
            </h1>
          </div>
          <Link
            href="/blogs"
            className="mt-6 md:mt-0 inline-flex items-center group gap-2 bg-[#1d1d1d] hover:bg-yellow-500 hover:text-[#141414] text-gray-200 px-5 py-3 rounded-md text-sm transition-all duration-500 border border-neutral-700"
          >
            View All Blogs{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:text-[#141414] text-yellow-400" />
          </Link>
        </div>
      </section>

      {/* BLOG LIST */}
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded border border-neutral-700 hover:bg-yellow-600 hover:text-[#141414] transition-all duration-500 ${
                selectedCategory === cat ? "bg-yellow-500 text-[#141414]" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-10 bor ">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row items-center gap-6 border-t border-gray-800 pt-6"
            >
              <Image
                src={blog.avatar}
                alt={blog.author}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex-1 space-y-4">
                <div className="text-gray-400 font-semibold">
                  <h1>{blog.date}</h1>
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold ">{blog.title}</h2>
                  <p className="text-gray-400">{blog.summary}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>❤️ {blog.likes}</span>
                  <span>💬 {blog.comments}</span>
                  <span>📤 {blog.shares}</span>
                </div>
              </div>
              <button className="flex items-center group gap-1 px-4 py-2 text-sm border border-neutral-700 rounded hover:bg-yellow-500 hover:text-[#141414] transition-all duration-500">
                View Blog{" "}
                <ArrowUpRight
                  className="group-hover:text-[#141414] text-yellow-400"
                  size={16}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
