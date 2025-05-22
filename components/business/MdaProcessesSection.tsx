"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mdaSteps = ["Step 1", "Step 2", "Step 3"];

export default function MdaProcessesSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedStep, setSelectedStep] = useState("Step 1");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 120;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const stepContent: Record<string, string> = {
    "Step 1": "This is the content for Step 1 under MDA Processes.",
    "Step 2": "This is the content for Step 2 under MDA Processes.",
    "Step 3": "This is the content for Step 3 under MDA Processes.",
  };

  return (
    <section id="MdaProcesses" className="space-y-10 mt-[80px]">
      <h2 className="text-[24px] italic font-playfair text-center">
        MDA Processes
      </h2>

      {/* Scrollable Tabs */}
      <div className="relative w-full max-w-[690px] flex items-center justify-center mb-6 mx-auto">
        {/* Left Arrow */}
        <div className="absolute -left-6 z-10">
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
          className="flex overflow-x-auto gap-2 px-2 scrollbar-none w-full justify-center"
        >
          <div className="flex gap-2 min-w-max mx-auto">
            {mdaSteps.map((step) => (
              <button
                key={step}
                onClick={() => setSelectedStep(step)}
                className={`rounded-[8px] flex-shrink-0 h-[36px] px-3 border-2 font-medium text-[13px] transition ${
                  selectedStep === step
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black hover:bg-gray-100"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="absolute -right-6 z-10">
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-[#F9F9F9] border border-gray-300 rounded p-6 text-sm text-gray-700 max-w-[800px] mx-auto">
        <p>{stepContent[selectedStep]}</p>
      </div>
    </section>
  );
}
