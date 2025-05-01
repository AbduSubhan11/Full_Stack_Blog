"use client";
import { fetchUserBlogs } from "@/components/fetch-user-blogs";
import { CardContainer } from "@/components/ui/3d-card";
import { Blog } from "@/Data/blog-types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function BlogsPage() {
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

  return (
    <section className="bg-[#141414] text-white min-h-screen py-16 font-sans">
      <div className="2xl:max-w-[1400px] w-[90%] mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Latest Blog Posts
          </h1>
          <p className="text-[#807f7f] text-lg md:text-xl">
            Discover the latest insights, tutorials, and ideas from the world of
            Agentic AI.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-400 text-lg md:text-xl">
              No blog posts found please add your blog .
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {blogs.map((blog: Blog) => (
              <CardContainer
                key={blog._id}
                className="bg-[#191919] flex flex-col w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition p-3"
              >
                <div className="h-52">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full h-full obect-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-semibold text-yellow-500 line-clamp-1">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {blog.description}
                  </p>
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="inline-block text-yellow-400 mt-2 hover:underline text-sm"
                  >
                    Read More →
                  </Link>
                </div>
              </CardContainer>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
