"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const TABS = ["All", "Services", "FAQ"];
const SERVICES = [
  { id: 1, name: "Emergency Response", slug: "emergency-response" },
  { id: 2, name: "Neighborhood Watch", slug: "neighborhood-watch" },
  { id: 3, name: "Online Crime Reporting", slug: "online-crime-reporting" },
  { id: 4, name: "Cyber Security", slug: "cyber-security" },
  { id: 5, name: "Neighborhood Patrol", slug: "neighborhood-patrol" },
  { id: 6, name: "Traffic Monitoring", slug: "traffic-monitoring" },
  { id: 7, name: "Agencies", slug: "agencies" }, // Add "Agencies" to the SERVICES array
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("Services");
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(SERVICES);

  // Find the service based on the slug
  const service = SERVICES.find((s) => s.slug === slug);
  const heading = service ? service.name : "Service Not Found";

  // Update the filtered services based on the query and tab
  useEffect(() => {
    const filterBySlug = SERVICES.filter(
      (s) => activeTab === "All" || s.slug === slug
    );
    setFilteredServices(
      filterBySlug.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [slug, activeTab, query]);

  const renderTabContent = () => {
    return (
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="border border-gray-200 bg-white rounded-lg p-4 flex flex-col justify-between h-full"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {activeTab === "Services"
                ? `This card represents ${service.name}. Learn more about this service below.`
                : `Learn about the ${service.name} service offered.`}
            </p>
            <div className="flex justify-between text-xs text-blue-600">
              <Link href={`/services/${service.slug}`}>Learn More</Link>
              <Link href={`/services/${service.slug}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-6 pt-[50px] pb-20">
      {/* Dynamic Heading */}
      <h1 className="text-[40px] font-bold text-center leading-tight mb-9">
        {heading}
      </h1>

      {/* Search Bar */}
      <div className="mt-[36px] flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center bg-[#E9E9E9] rounded-[12px] w-full max-w-[529px] px-[7px]"
        >
          <input
            type="text"
            placeholder="Search Services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent text-[13px] text-gray-800 focus:outline-none"
            style={{ borderRadius: "12px" }}
          />
          <button
            type="submit"
            className="text-gray-600 hover:text-black transition text-xl"
          >
            <img
              src="/images/searchicon.png"
              alt="Search"
              className="w-[47px] h-[54px] object-contain"
            />
          </button>
        </form>
      </div>

      {/* Tab Navigation */}
      <div className="mt-[36px] w-[529px] h-[48px] mx-auto mb-12">
        <div className="flex h-full">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-[165.67px] h-[48px] text-base font-semibold transition duration-200 border-b-4 ${
                activeTab === tab
                  ? "text-black border-black"
                  : "text-black border-transparent hover:text-black hover:border-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </main>
  );
}
