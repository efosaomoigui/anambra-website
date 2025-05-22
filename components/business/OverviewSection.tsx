import Image from "next/image";

const councilMembers = [
  {
    name: "Mr. C. Fred Agbata",
    role: "MD/CEO Anambra State ICT Agency Council Member",
    image: "/images/fred.jpg",
  },
  // Add 5 more as needed
];

export default function OverviewSection() {
  return (
    <section
      id="Overview"
      className="mt-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-[24px] italic font-playfair mb-[80px] mt-[80px] text-center">
        Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Column 1: Textual content */}
        <div className="lg:col-span-8 space-y-10">
          <div>
            <h3 className="text-lg font-semibold border-l-4 border-[#F67C10] pl-4 rounded">
              Introduction
            </h3>
            <p className="mt-2 text-gray-700">
              Anambra State offers a dynamic environment for businesses to
              thrive. The introduction outlines how the state supports
              entrepreneurs...
            </p>
            <p className="mt-2 text-gray-700">
              With infrastructure and policy improvements, Anambra sets the tone
              for economic progress.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-l-4 border-[#F67C10] pl-4 rounded">
              Objectives
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Encourage local enterprise growth</li>
              <li>Create employment opportunities</li>
              <li>Boost state revenue through investment</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="italic font-playfair text-sm text-gray-600">
                Sub-national
              </p>
              <h4 className="text-xl font-bold">1st</h4>
              <p className="italic font-playfair text-sm text-gray-600">
                in Southern Nigeria
              </p>
            </div>
            <div>
              <p className="italic font-playfair text-sm text-gray-600">
                Ease of doing business
              </p>
              <h4 className="text-xl font-bold">7th</h4>
              <p className="italic font-playfair text-sm text-gray-600">
                nationally
              </p>
            </div>
            <div>
              <p className="italic font-playfair text-sm text-gray-600">
                Ranking Source
              </p>
              <h4 className="text-xl font-bold">PEBEC</h4>
              <p className="italic font-playfair text-sm text-gray-600">
                2023 Report
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-l-4 border-[#F67C10] pl-4 rounded">
              Council Mandate
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Drive investment policies</li>
              <li>Facilitate stakeholder engagement</li>
              <li>Oversee SME initiatives</li>
              <li>Track business climate metrics</li>
              <li>Collaborate with MDAs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-l-4 border-[#F67C10] pl-4 rounded">
              Front Line MDAs
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Ministry of Commerce</li>
              <li>Anambra Investment Promotion Agency</li>
              <li>Corporate Affairs Commission</li>
              <li>Anambra Internal Revenue Service</li>
              <li>Ministry of Lands</li>
            </ul>
          </div>
        </div>

        {/* Column 2: Council members */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-6">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded shadow p-4 text-center"
            >
              <div className="w-full h-32 relative mb-3">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <p className="text-base font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
