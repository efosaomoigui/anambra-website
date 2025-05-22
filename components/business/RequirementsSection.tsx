"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
];

export default function RequirementsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState("Step 1");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 120;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="Requirements" className="space-y-6">
      <h2 className="text-[24px] italic font-playfair mb-[80px] mt-[80px] text-center">
        Requirements
      </h2>

      {/* Scrollable Tabs */}
      <div className="relative w-full max-w-[690px] flex items-center justify-center mb-6 mx-auto">
        {/* Left Arrow */}
        <div className="absolute -left-6 z-10 top-1/2 -translate-y-1/2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white shadow"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Scrollable Button List */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-none w-full justify-center"
        >
          <div className="flex justify-center h-full gap-12 min-w-max mx-auto px-6 whitespace-nowrap">
            {steps.map((step) => (
              <button
                key={step}
                onClick={() => setSelected(step)}
                className={`text-sm sm:text-base font-semibold border-b-2 transition duration-200 ${
                  selected === step
                    ? "text-black border-black"
                    : "text-black border-transparent hover:text-black hover:border-black"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="absolute -right-6 z-10 top-1/2 -translate-y-1/2">
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="bg-[#F9F9F9] border border-gray-300 rounded p-6 text-sm text-gray-700">
        <p>
          This is the content for <strong>{selected}</strong>. You can add
          specific step instructions here.
        </p>
      </div>
    </section>
  );
}
