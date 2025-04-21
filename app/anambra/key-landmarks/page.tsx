"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import TopTabs from "@/components/TopTabs";

const landmarks = [
  {
    name: "Anambra Culture Centre",
    image: "/images/anambra_landmark1.jpg",
    openTime: "Opens between 10AM - 8PM",
    text: "This is the text that made me rich and powerful",
  },
  {
    name: "Ogbunike Caves",
    image: "/images/anambra_landmark2.jpg",
    openTime: "Opens between 10AM - 8PM",
    text: "This is the text that made me rich and powerful",
  },
  {
    name: "River Niger Bridge",
    image: "/images/anambra_landmark3.jpg",
    openTime: "Opens between 10AM - 8PM",
    text: "This is the text that made me rich and powerful",
  },
];

const tabContent = {
  About: `To promote culture, tourism, entertainment, hospitality, and good communication and relationship between the government and its citizens resident abroad and within the states of the Federation.`,
  Location: `Jerome Udorji Secretary Complex, (first floor), Awka.`,
  "Opening Hours": `
MON: 10:00AM — 4:00PM
TUE: 10:00AM — 4:00PM
WED: 10:00AM — 4:00PM
THU: 10:00AM — 4:00PM
FRI: 10:00AM — 4:00PM
SAT: 10:00AM — 4:00PM
SUN: 10:00AM — 4:00PM`,
  Contact: `09073775141
mocet@demo.anambrastate.gov.ng`,
};

export default function KeyLandmarks() {
  const [activeLandmark, setActiveLandmark] = useState<null | string>(null);
  const [activeTab, setActiveTab] = useState<keyof typeof tabContent>("About");

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 relative">
      <h2 className="mt-[50px] mb-[70px] text-3xl font-bold text-black mb-6 text-center">
        Key Landmarks
      </h2>

      <TopTabs />

      <div className="grid md:grid-cols-3 gap-6">
        {landmarks.map((landmark, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveLandmark(landmark.name);
              setActiveTab("About");
            }}
            className="cursor-pointer border rounded shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <Image
              src={landmark.image}
              alt={landmark.name}
              width={500}
              height={300}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4 space-y-1">
              <p className="text-xs text-gray-500">{landmark.openTime}</p>
              <h3 className="text-lg font-bold">{landmark.name}</h3>
              <p className="text-xs text-gray-500">{landmark.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {activeLandmark && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start p-4 md:p-6 overflow-y-auto">
          <div className="bg-white max-w-xl w-full rounded-md shadow-lg p-6 relative mt-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveLandmark(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl"
            >
              &times;
            </button>

            {/* Tab Buttons */}
            <div className="flex gap-4 border-b border-gray-200 mb-4">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as keyof typeof tabContent)}
                  className={clsx(
                    "pb-2 text-sm font-semibold",
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              <h3 className="text-xl font-bold mb-2">{activeTab}</h3>
              <p className="whitespace-pre-wrap text-sm text-gray-700">
                {tabContent[activeTab]}
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-black text-white px-8 py-3 text-sm font-semibold rounded hover:bg-gray-800">
                Location on Map
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
