"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SearchComponent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 flex flex-col items-center">
      {/* Text Above Search */}
      <div className="text-center mb-4">
        <p className="text-base text-[#1E1E1E]">
          Find anything you need with the search bar
        </p>
      </div>

      {/* Search Input with Icon */}
      <div className="flex items-center bg-[#E9E9E9] rounded-[12px] mb-6 w-full max-w-[611px] p-[6px]">
        <input
          type="text"
          placeholder="How to resolve business issues..."
          className="flex-grow bg-transparent px-2 text-[13px] text-gray-800 focus:outline-none h-full"
          style={{ borderRadius: "12px" }}
        />
        <button className="text-gray-600 hover:text-black transition text-xl">
          <img
            src="/images/searchicon.png"
            alt="Search"
            className="w-[47px] h-[54px] object-contain"
          />
        </button>
      </div>

      {/* Scroll Arrows + Button Pills */}
      <div className="relative w-full max-w-[700px] flex items-center justify-center">
        {/* Left Arrow - OUTSIDE */}
        <div className="absolute -left-12 z-10">
          <button
            onClick={() => scroll("left")}
            className="bg-white p-2 shadow-md rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Scrollable Button List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-2 px-2 scrollbar-none w-full"
        >
          {[
            "Emergency",
            "Budget",
            "Land Dispute",
            "Government Officials",
            "Ease of Business",
            "Public Complaints",
            "Road Works",
          ].map((label, index) => (
            <button
              key={index}
              className="rounded-[8px] min-w-[160px] flex-shrink-0 py-2 px-6 border-2 border-black text-black bg-white font-medium hover:bg-gray-100 transition leading-[36px] text-[13px]"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right Arrow - OUTSIDE */}
        <div className="absolute -right-12 z-10">
          <button
            onClick={() => scroll("right")}
            className="bg-white p-2 shadow-md rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
