"use client";

import { useState } from "react";
import clsx from "clsx";

// Topbar categories
const categories = [
  "Festivals",
  "Investments in Anambra",
  "Signs & Places",
  "Other Events",
];

// Sample image data (20 total)
const galleryImages = [
  { url: "/gallery/festival-1.jpg", category: "Festivals" },
  { url: "/gallery/festival-2.jpg", category: "Festivals" },
  { url: "/gallery/festival-3.jpg", category: "Festivals" },
  { url: "/gallery/festival-4.jpg", category: "Festivals" },
  { url: "/gallery/festival-5.jpg", category: "Festivals" },
  { url: "/gallery/investment-1.jpg", category: "Investments in Anambra" },
  { url: "/gallery/investment-2.jpg", category: "Investments in Anambra" },
  { url: "/gallery/investment-3.jpg", category: "Investments in Anambra" },
  { url: "/gallery/investment-4.jpg", category: "Investments in Anambra" },
  { url: "/gallery/investment-5.jpg", category: "Investments in Anambra" },
  { url: "/gallery/signs-1.jpg", category: "Signs & Places" },
  { url: "/gallery/signs-2.jpg", category: "Signs & Places" },
  { url: "/gallery/signs-3.jpg", category: "Signs & Places" },
  { url: "/gallery/signs-4.jpg", category: "Signs & Places" },
  { url: "/gallery/signs-5.jpg", category: "Signs & Places" },
  { url: "/gallery/event-1.jpg", category: "Other Events" },
  { url: "/gallery/event-2.jpg", category: "Other Events" },
  { url: "/gallery/event-3.jpg", category: "Other Events" },
  { url: "/gallery/event-4.jpg", category: "Other Events" },
  { url: "/gallery/event-5.jpg", category: "Other Events" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Festivals");

  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === "All" || img.category === selectedCategory
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="mt-[50px] text-3xl font-bold text-black">Gallery</h2>
      </div>

      {/* Topbar Links - margin top and bottom 50px */}
      <div className="flex flex-wrap justify-center gap-6 my-[70px]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={clsx(
              "text-sm font-semibold text-black transition border-b-2",
              selectedCategory === cat
                ? "border-black"
                : "border-transparent hover:border-black"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid: 4 rows x 5 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredImages.slice(0, 20).map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer overflow-hidden rounded-md border hover:shadow-md transition"
            onClick={() => {
              console.log("Clicked:", img.url);
            }}
          >
            <img
              src={img.url}
              alt={`Gallery ${idx}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
