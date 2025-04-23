"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ModelViewer from "./model-viewer";

export default function Hero() {
  return (
    <section className="relative bg-[#141414] text-white min-h-[90vh] flex ">

      {/* RIGHT SECTION */}
      <div className="absolute w-[50%] h-full z-20 right-0">
        {/* GLB background */}
        {/* <ModelViewer /> */}
      </div>

      {/* LEFT SECTION */}
      <div className="relative z-10 w-[90%] 2xl:max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Section: Text Content */}
        <div className="lg:w-[60%] mb-12 lg:mb-0 space-y-8">
          <h3 className="text-lg font-semibold text-[#807f7f] uppercase tracking-wide">
            Your Journey to Tomorrow Begins Here
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-4 leading-tight font-semibold">
            Explore the Frontiers of Artificial Intelligence
          </h1>
          <p className="text-[#807f7f] lg:w-[70%]">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="https://github.com/shadcn.png"
                  alt={`User ${i + 1}`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-black"
                />
              ))}
            </div>
            <p className="text-[#807f7f]">
              Over 1000+ articles on emerging tech trends & breakthroughs.
            </p>
          </div>
          <div className="flex space-x-6">
            <div>
              <p className="text-3xl font-bold text-yellow-500">300+</p>
              <p className="text-[#807f7f]">Resources Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">12K+</p>
              <p className="text-[#807f7f]">Total Downloads</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">10K+</p>
              <p className="text-[#807f7f]">Active Users</p>
            </div>
          </div>  
          <Link
            href="/blogs"
            className="inline-flex items-center bg-yellow-500 text-[#141414] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
          >
            Explore Blogs
            <ChevronRight className="mt-[2px]" />
          </Link>
        </div>

        {/* Right Section: Call to Action */}
        <div className="lg:w-1/3"></div>
      </div>

    </section>
  );
}
