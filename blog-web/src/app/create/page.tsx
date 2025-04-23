"use client"; // for App Router
import { useState } from "react";

const categories =  [
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
  "other",

];;

export default function BlogPostPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create a Blog Post
        </h1>

        <form className="space-y-6 ">
          {/* Blog Image Upload */}
          <div>
            <label className="block font-medium text-[#807f7f]">Blog Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 rounded-md border border-neutral-700 bg-[#141414] text-[#807f7f] "
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium text-[#807f7f]">Title</label>
            <input
              type="text"
              placeholder="Enter your blog title"
              className="w-full p-2 rounded-md border border-neutral-700 bg-[#141414] placeholder-[#807f7f]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2 text-[#807f7f]">Description</label>
            <textarea
              placeholder="Write your blog content..."
              rows={5}
              className="w-full p-2 rounded-md border border-neutral-700 bg-[#141414] placeholder-[#807f7f]"
            />
          </div>

          {/* Category Tags */}
          <div>
            <label className="block font-medium mb-2 text-[#807f7f]">Category Tags</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedTags.includes(tag)
                      ? "bg-yellow-500 text-[#141414] border-yellow-500"
                      : "bg-[#191919] text-[#807f7f] border-neutral-700"
                  } hover:shadow`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div >
            <button
              type="submit"
              className="bg-yellow-500 text-black  py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Post Blog
            </button>
         
          </div>
        </form>
      </div>
    </div>
  );
}
