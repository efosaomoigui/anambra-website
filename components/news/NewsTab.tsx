// components/news/NewsTabs.tsx
"use client";

import { useState } from "react";

const tabs = [
  "All",
  "LGA",
  "State",
  "MDA",
  "Sport",
  "Events",
  "Health",
  "Education",
];

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex justify-center mb-[50px]">
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-[8px] text-sm font-medium border border-gray-300 
          ${
            activeTab === tab
              ? "bg-black text-white border-black"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
