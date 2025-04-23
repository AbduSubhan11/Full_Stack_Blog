"use client";
import { useRef, useState } from "react";
import { toast } from "sonner";

const categories = [
  "Quantum Computing",
  "AI Ethics",
  "Space Exploration",
  "Biotechnology",
  "Renewable Energy",
  "other",
];

export default function BlogPostPage() {
  const [selectedcategory, setSelectedcategory] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleTagToggle = (tag: string) => {
    setSelectedcategory((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image) {
      toast.error("All fields are required!");
      return;
    }

    if (!localStorage.getItem("token") && !localStorage.getItem("user"))
      return toast.error("You are not logged in!");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("category", JSON.stringify(selectedcategory));

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL_BLOG}/createblog`,
        {
          method: "POST",
          headers: {
            Authorization: `token ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      
      if (res.ok) {
        toast.success("Blog posted successfully!");
        setTitle("");
        setDescription("");
        setSelectedcategory([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create a Blog Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Image Upload */}
          <div>
            <label className="block font-medium text-[#807f7f]">
              Blog Image
            </label>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full p-2 rounded-md border border-neutral-700 bg-[#141414] text-[#807f7f]"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium text-[#807f7f]">Title</label>
            <input
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded-md border border-neutral-700 bg-[#141414] placeholder-[#807f7f]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2 text-[#807f7f]">
              Description
            </label>
            <textarea
              placeholder="Write your blog content..."
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded-md border border-neutral-700 bg-[#141414] placeholder-[#807f7f]"
            />
          </div>

          {/* Category category */}
          <div>
            <label className="block font-medium mb-2 text-[#807f7f]">
              Category category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedcategory.includes(tag)
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
          <div>
            <button
              type="submit"
              className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
