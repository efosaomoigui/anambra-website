"use client";

import { useState } from "react";
import clsx from "clsx";
import { Search, Building, X } from "lucide-react";

const categories = ["Ministries[x]", "Agencies[x]"];
const tabs = [
  "Core Mandate",
  "Functions",
  "Departments",
  "Contact",
  "Officials",
];

export default function MDA() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const openModal = (index: number) => {
    setActiveCard(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveTab(tabs[0]);
    setActiveCard(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="mt-[50px] text-3xl font-bold text-black">MDAs</h2>
      </div>

      {/* Centered Search Section */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex gap-6 border-b border-gray-300 mb-6">
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

        <form
          onSubmit={handleSearch}
          className="flex items-center bg-[#E9E9E9] rounded-[12px] h-12 w-full max-w-xl"
        >
          <input
            type="text"
            placeholder="How to resolve business issues..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent pl-[10px] text-sm text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="text-gray-600 hover:text-black transition text-xl pr-[6px]"
          >
            <img
              src="/images/searchicon.png"
              alt="Search"
              className="w-[47px] h-[54px] object-contain"
            />
          </button>
        </form>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="cursor-pointer bg-white shadow rounded-lg p-4 flex flex-col justify-between hover:ring-2 hover:ring-blue-600"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 p-2 rounded-full mr-3">
                <img
                  src="/images/icons/ministries.svg"
                  alt="Event Icon"
                  className="w-10 h-10"
                />
              </div>
              <h4 className="text-lg font-bold">Building {index + 1}</h4>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              modi.
            </p>
          </div>
        ))}
      </div>

      {/* Overlay Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="relative bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-lg p-6">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={clsx(
                    "pb-2 text-sm font-semibold transition",
                    activeTab === tab
                      ? "border-b-2 border-black text-black"
                      : "text-gray-600 hover:text-black"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">{activeTab}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                This is the detailed content for <strong>{activeTab}</strong>.
                Replace with actual data from the database or API response as
                needed.
              </p>
            </div>

            {/* Button */}
            <div className="text-center">
              <a
                href="#"
                target="_blank"
                className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
              >
                Go to website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
