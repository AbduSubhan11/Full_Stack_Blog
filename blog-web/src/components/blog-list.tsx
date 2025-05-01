"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Blog } from "@/Data/blog-types";
import { fetchUserBlogs } from "./fetch-user-blogs";
import { toast } from "sonner";

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

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category?.includes(selectedCategory));

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

        <div className="space-y-10 pb-16">
          {filteredBlogs.length === 0 && (
            <div className="text-center text-gray-400">
              No blogs found please add your blogs.
            </div>
          )}
          {/* Blog List */}
          {filteredBlogs.map((blog: Blog) => (
            <div
              key={blog._id}
              className="flex flex-col md:flex-row items-center gap-6 border-t border-gray-800 pt-6"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={200}
                height={1000}
                className="rounded-full"
              />
              <div className="flex-1 space-y-4">
                <div className="text-gray-400 font-semibold">
                  <h1>
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h1>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold ">{blog.title}</h2>
                  <p className="text-gray-400">{blog.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>❤️ {blog.like.length}</span>
            
                </div>
              </div>
              <Link
                href={`/blogs/${blog._id}`}
                className="flex items-center group gap-1 px-4 py-2 text-sm border border-neutral-700 rounded hover:bg-yellow-500 hover:text-[#141414] transition-all duration-500"
              >
                View Blog{" "}
                <ArrowUpRight
                  className="group-hover:text-[#141414] text-yellow-400"
                  size={16}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
