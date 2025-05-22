"use client";

import { useState } from "react";

const items = [
  {
    title:
      "1. Improved planning and Accountability of Business enabling reforms",
    content:
      "Anambra State has adopted better tools for planning and evaluating business reforms, ensuring each initiative is trackable and tied to results.",
  },
  {
    title:
      "2. Continue Transparency of Annual State Budget and Audited financial Statements and Transparent Debt Management",
    content:
      "Annual budget and audit reports are now more accessible, ensuring accountability and building trust with investors and the public.",
  },
  {
    title:
      "3. Improved efficiency in property registration and sustainability of the land-based investment process",
    content:
      "Processes around land ownership and investment have been streamlined for faster delivery, reduced fraud, and improved investor confidence.",
  },
  {
    title: "4. Development of an effective PPP framework",
    content:
      "The Public-Private Partnership framework promotes clear, transparent collaboration with the private sector for infrastructure and service delivery.",
  },
];

export default function StimulatorsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="BusinessStimulators" className="space-y-6">
      <h2 className="text-[24px] italic font-playfair mb-[80px] mt-[80px] text-center">
        Business Stimulators
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left p-4 bg-[#BBBBBB] text-black font-medium rounded-t"
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white text-sm text-gray-800">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
