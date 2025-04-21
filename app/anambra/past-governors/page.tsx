"use client";

import Image from "next/image";
import TopTabs from "@/components/TopTabs";

const governors = [
  {
    name: "Dr. Chris Ngige",
    year: "2003 - 2006",
    party: "PDP",
    image: "/images/gov_ngige.jpg",
    bio: "Played a major role in stabilizing the political landscape of Anambra with key infrastructural improvements.",
  },
  {
    name: "Mr. Peter Obi",
    year: "2006 - 2014",
    party: "APGA",
    image: "/images/gov_obi.jpg",
    bio: "Known for prudent fiscal policies and significant investments in education and health.",
  },
  {
    name: "Chief Willie Obiano",
    year: "2014 - 2022",
    party: "APGA",
    image: "/images/gov_obiano.jpg",
    bio: "Focused on economic development, agriculture, and security reforms across the state.",
  },
];

const PastGovernors = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="mt-[50px] mb-[70px] text-3xl font-bold text-black mb-10 text-center">
        Past Governors of Anambra
      </h2>

      <TopTabs />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {governors.map((gov, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-md overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={gov.image}
              alt={gov.name}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{gov.name}</h3>
              <p className="text-sm text-gray-600">{gov.year}</p>
              <p className="text-sm text-blue-600 mb-2">{gov.party}</p>
              <p className="text-sm text-gray-700">{gov.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastGovernors;
