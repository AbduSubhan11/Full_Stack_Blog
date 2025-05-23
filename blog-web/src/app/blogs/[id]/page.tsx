"use client";
import { fetchUserBlogs } from "@/components/fetch-user-blogs";
import { Blog } from "@/Data/blog-types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const blogData = [
  {
    id: "1",
    title: "Understanding Agentic AI: The Next Frontier",
    author: "Dr. Elena Royce",
    date: "April 15, 2025",
    image:
      "https://img.freepik.com/free-photo/futuristic-humanoid-robot-with-circuit-board-brain_23-2150870936.jpg?w=1380",
    content: `
Agentic AI marks a significant leap beyond traditional machine learning models. These systems act with purpose, adapt over time, and can make context-aware decisions. Unlike narrow AI tools, agentic systems understand environments and pursue goals proactively.

In this post, we explore:
- The philosophy behind agentic systems
- Core components such as goal-setting, planning, and memory
- How agentic AI blends LLMs with real-time perception
- Why it matters for society and technology

From autonomous assistants to smart infrastructure—this evolution is redefining our relationship with machines.
    `,
  },
  // Add more blogs here...
];

export default function BlogDetail({ params }: { params: { id: string } }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);


  useEffect(() => {
    const userBlogs = async () => {
      const data = await fetchUserBlogs();
      if (data) {
        setBlogs(data);
      } else {
        toast.error("Failed to fetch blogs.");
      }
    };

    userBlogs();
  }, []);

  const blog = blogs.find((b) => b._id === params.id);


  return (
    <section className="bg-[#141414] text-white min-h-screen py-16 font-sans">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto">
        {/* Header */}
        <div className="space-y-2 mb-8">
          <p className="text-yellow-500 text-sm">{new Date(blog?.createdAt || "").toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}</p>
          <h1 className="text-4xl font-bold leading-tight">{blog?.title}</h1>
          {/* <p className="text-gray-400 text-sm">By {blog?.author}</p> */}
        </div>

        {/* Image */}
        <div className="mb-10">
          <Image
            src={blog?.image || ""}
            alt={blog?.title || ""}
            width={1000}
            height={500}
            className=" w-full object-cover  "
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
          {/* {blog.content.split("\n\n").map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))} */}
          {blog?.description}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-gray-800 pt-6 text-sm text-gray-500">
          <p>
            Want to contribute your thoughts or write for us?{" "}
            <Link
              href={"/create"}
              className="text-yellow-500 underline cursor-pointer"
            >
              Create a blog post.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
