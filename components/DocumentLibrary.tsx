"use client";

import { useState } from "react";
import { FaFilePdf, FaFileExcel, FaFileWord } from "react-icons/fa";
import { Search } from "lucide-react";
import clsx from "clsx";

const categories = [
  "All",
  "Laws",
  "Budget",
  "AG Report",
  "Debts",
  "Signage & Advertisement",
];

const documents = [
  {
    title: "2022 Budget Report",
    size: "12MB",
    date: "Jan 10, 2023",
    type: "pdf",
  },
  {
    title: "State Debts Summary",
    size: "5MB",
    date: "Feb 5, 2023",
    type: "excel",
  },
  { title: "AG Report 2021", size: "8MB", date: "Mar 3, 2023", type: "word" },
  { title: "Law Reform Bill", size: "2MB", date: "Apr 1, 2023", type: "pdf" },
  {
    title: "Budget Forecast",
    size: "7MB",
    date: "May 22, 2023",
    type: "excel",
  },
  {
    title: "Advertisement Policy",
    size: "4MB",
    date: "Jun 15, 2023",
    type: "word",
  },
  { title: "Signage Guide", size: "1.2MB", date: "Jul 19, 2023", type: "pdf" },
  {
    title: "2023 Debt Plan",
    size: "10MB",
    date: "Aug 10, 2023",
    type: "excel",
  },
  {
    title: "Budget Highlights",
    size: "6MB",
    date: "Sep 7, 2023",
    type: "word",
  },
  {
    title: "Gov’t Expenditure Law",
    size: "3MB",
    date: "Oct 3, 2023",
    type: "pdf",
  },
  { title: "Debt Breakdown", size: "9MB", date: "Nov 11, 2023", type: "excel" },
  { title: "Legal Drafts", size: "2MB", date: "Dec 25, 2023", type: "word" },
];

// Inside DocumentLibrary.tsx...

const iconMap = {
  pdf: (
    <div className="bg-[#FFDB8E] h-[140px] flex items-center justify-center">
      <FaFilePdf className="text-[#E5A825] w-16 h-16" />
    </div>
  ),
  excel: (
    <div className="bg-[#FFDB8E] h-[140px] flex items-center justify-center">
      <FaFileExcel className="text-[#E5A825] w-16 h-16" />
    </div>
  ),
  word: (
    <div className="bg-[#FFDB8E] h-[140px] flex items-center justify-center">
      <FaFileWord className="text-[#E5A825] w-16 h-16" />
    </div>
  ),
};

export default function DocumentLibrary() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mdaFilter, setMdaFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === "All" || doc.title.includes(selectedCategory);
    const matchesQuery = doc.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="mt-[50px] text-3xl font-bold text-black">
          Document Library
        </h2>
      </div>

      {/* Centered Search Section */}
      <div className="flex flex-col items-center justify-center mb-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center bg-[#E9E9E9] rounded-full h-12 px-4 w-full max-w-xl"
        >
          <input
            type="text"
            placeholder="Search documents..."
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
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar Filters */}
        <div className="col-span-12 md:col-span-3">
          <div className="bg-[#F7F7F7] border border-[#D4D4D4] rounded-lg p-7 space-y-4">
            {categories.map((cat) => (
              <label
                key={cat}
                className={clsx(
                  "flex items-center gap-2 font-semibold cursor-pointer transition",
                  selectedCategory === cat ? "text-[#DA9617]" : "text-black"
                )}
              >
                <input
                  type="checkbox"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="custom-golden w-4 h-4 rounded"
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Document Display */}
        <div className="col-span-12 md:col-span-9 space-y-6">
          {/* Filters Row */}
          <div className="flex justify-between items-center">
            <select
              className="bg-[#E9E9E9] border border-[#D4D4D4] px-4 py-2 rounded text-sm text-gray-800"
              value={mdaFilter}
              onChange={(e) => setMdaFilter(e.target.value)}
            >
              <option value=""></option>
              <option value="">Ministry of Education</option>
              <option value="">Ministry of Agriculture</option>
              <option value="">Other Secretary of State</option>
            </select>

            <select
              className="bg-[#E9E9E9] border border-[#D4D4D4] px-4 py-2 rounded text-sm text-gray-800"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Sort By</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
            </select>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDocs.map((doc, idx) => (
              <div
                key={idx}
                className=" rounded  border hover:shadow-md transition"
              >
                <div className="bg-[#FFDB8E] flex justify-center mb-3">
                  {iconMap[doc.type]}
                </div>
                <h4 className="text-sm font-bold text-gray-800 mb-1 px-4">
                  {doc.title}
                </h4>
                <p className="text-xs text-gray-500 px-4">Size: {doc.size}</p>
                <p className="text-xs text-gray-500 px-4 pb-4">
                  Date: {doc.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
