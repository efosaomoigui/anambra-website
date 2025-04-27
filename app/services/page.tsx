"use client";

import { useState } from "react";
import ServiceCard from "@/components/services/servicecard";
import { Search } from "lucide-react";

const services = [
  { title: "Vehicle Registration", slug: "vehicle-registration" },
  { title: "Business Permit", slug: "business-permit" },
  { title: "Marriage Certificate", slug: "marriage-certificate" },
  { title: "Tax Payment", slug: "tax-payment" },
  { title: "Driver’s License", slug: "drivers-license" },
  { title: "Building Approval", slug: "building-approval" },
  { title: "Birth Certificate", slug: "birth-certificate" },
  { title: "Land Title Search", slug: "land-title-search" },
  { title: "Public Health Service", slug: "public-health-service" },
  { title: "Environmental Report", slug: "environmental-report" },
  { title: "School Enrolment", slug: "school-enrolment" },
  { title: "Utility Billing", slug: "utility-billing" },
];

export default function ServicesPage() {
  const [query, setQuery] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-4 pt-[50px] pb-20">
      <h1 className="mt-[50px] text-3xl font-bold text-center mb-10">
        All Services
      </h1>

      {/* Search Bar */}
      <div className="flex flex-col items-center justify-center mb-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center bg-[#E9E9E9] rounded-full h-12 px-4 w-full max-w-xl"
        >
          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent px-2 text-sm text-gray-800 focus:outline-none"
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services
          .filter((service) =>
            service.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
      </div>
    </main>
  );
}
