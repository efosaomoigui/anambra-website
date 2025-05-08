"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const TABS = ["All", "Services", "FAQ"];

const SERVICES = [
  { title: "Advertisement", slug: "advertisement" },
  { title: "Agencies", slug: "agencies" },
  { title: "Archive", slug: "archive" },
  { title: "Business", slug: "business" },
  { title: "Citizens", slug: "citizens" },
  { title: "Construction", slug: "construction" },
  { title: "Education", slug: "education" },
  { title: "Emergency Vehicle", slug: "emergency-vehicle" },
  { title: "Environment", slug: "environment" },
  { title: "Event", slug: "event" },
  { title: "Events Calendar", slug: "events-calendar" },
  { title: "Government Benefits", slug: "government-benefits" },
  { title: "Health Services", slug: "health-services" },
  { title: "Housing And Lands", slug: "housing-and-lands" },
  { title: "Identity Management", slug: "identity-management" },
  { title: "Job Opportunities", slug: "job-opportunities" },
  { title: "Law & Safety", slug: "law-safety" },
  {
    title: "License, Permits & Applications",
    slug: "license-permits-applications",
  },
  { title: "Loans & Trustfund", slug: "loans-trustfund" },
  { title: "Media & Entertainment", slug: "media-entertainment" },
  { title: "Ministries", slug: "ministries" },
  { title: "Notice", slug: "notice" },
  { title: "Payments & Levies", slug: "payments-levies" },
  { title: "Pilgrimage & Religion", slug: "pilgrimage-religion" },
  { title: "Projects & Construction", slug: "projects-construction" },
  { title: "Science & Technology", slug: "science-technology" },
  { title: "Security Services", slug: "security-services" },
  { title: "Sports", slug: "sports" },
  { title: "Tax", slug: "tax" },
  { title: "Tourism & Culture", slug: "tourism-culture" },
  { title: "Training", slug: "training" },
  { title: "Vehicle & Transportation", slug: "vehicle-transportation" },
  { title: "Water", slug: "water" },
].map((s, index) => ({ ...s, id: index + 1, name: s.title }));

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("Services");
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  // Get services under the same category slug
  const categoryServices = SERVICES.filter((s) => s.slug === slug);

  const slugString = Array.isArray(slug) ? slug[0] : slug;

  const heading = categoryServices.length
    ? slugString.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Service Not Found";

  useEffect(() => {
    const servicesToShow =
      activeTab === "All" ? SERVICES : SERVICES.filter((s) => s.slug === slug);

    const result = servicesToShow.filter((service) =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredServices(result);
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
