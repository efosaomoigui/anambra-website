"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FAQComponent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 md:px-20 py-16">
      <div className="max-w-[1201px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black">
            FAQs
          </h2>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full "
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          {/* Scrollable FAQs */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-none gap-6 px-4 md:px-8 py-2"
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-[300px] max-w-[300px] bg-white border border-gray-300 p-6 rounded-[8px] flex flex-col justify-between"
              >
                <p className="text-sm text-black mb-8">
                  This is a short answer to FAQ {idx + 1}. It briefly addresses
                  a common question users might have.
                </p>
                <div className="flex justify-between mt-auto pt-4 text-xs text-gray-600">
                  {/* <span>Read More</span>
                  <span>Share</span> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full "
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Centered Button */}
        <div className="text-center mt-8 py-8 md:py-7 px-4">
          <Link
            href="/news"
            className="inline-flex items-center px-6 py-2 rounded-md bg-white border border-gray-700 text-gray-700 text-sm font-semibold leading-6 hover:bg-gray-300 transition"
          >
            View All FAQs
            <img
              src="/images/arrowup.png"
              alt="FAQs"
              className="ml-2 w-5 h-5 object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
