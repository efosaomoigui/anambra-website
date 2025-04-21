// app/services/page.tsx

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
  return (
    <main className="max-w-7xl mx-auto px-4 pt-[50px] pb-20">
      <h1 className="mt-[50px] text-3xl font-bold text-center mb-8">
        Services
      </h1>
      {/* Tabs */}
      {/* <div className="flex justify-center mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {["All", "Services", "FAQs"].map((tab) => (
            <button
              key={tab}
              className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
            >
              {tab}
            </button>
          ))}
        </div>
      </div> */}
      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a service..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-100 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>
    </main>
  );
}
