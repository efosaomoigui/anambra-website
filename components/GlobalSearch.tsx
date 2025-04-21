// components/GlobalSearch.tsx
"use client";

import { useState } from "react";
import clsx from "clsx";
import { Search } from "lucide-react";

const categories = ["All", "Ministry", "Agency", "Services", "Documents"];

export default function GlobalSearch() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform search logic here
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black">Global Search</h2>
      </div>

      {/* Row 1 - Search form and category links */}
      <div className="flex flex-col items-center justify-center mb-10">
        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-[#E9E9E9] rounded-full h-12 px-4 w-full max-w-xl mb-6"
        >
          <input
            type="text"
            placeholder="How to resolve business issues..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent px-2 text-sm text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="text-gray-600 hover:text-black transition text-xl"
          >
            <Search size={20} />
          </button>
        </form>

        {/* Category Tabs */}
        <div className="flex gap-6 border-b border-gray-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={clsx(
                "pb-2 text-sm font-semibold transition",
                selectedCategory === category
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-black hover:text-blue-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2 - Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-bold mb-2">
                Result Title {index + 1}
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                modi.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 text-sm font-medium text-blue-600">
              <a href="#">Read More</a>
              <a href="#">Share</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
