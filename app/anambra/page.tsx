"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import TopTabs from "@/components/TopTabs"; // Your reusable top link nav

const sidebarLinks = [
  "About State",
  "Past Governors",
  "Key Landmarks",
  "Climate",
  "Culture",
  "Tourism",
  "Education",
  "Healthcare",
  "Infrastructure",
  "Economy",
];

const topTabs = ["About State", "Past Governors", "Key Landmarks"];

const moreParagraphs = [
  {
    title: "Administration",
    text: "The people of Anambra are known for their colorful festivals, rich traditions, and strong community spirit that is passed from one generation to another.",
  },
  {
    title: "Populagtion",
    text: "From expanding road networks to power and digital connectivity, Anambra continues to invest in long-term infrastructure projects for its citizens.",
  },
  {
    title: "Culture",
    text: "The state supports tech hubs and start-ups, positioning itself as the next innovation destination in Africa.",
  },
  {
    title: "Notable Figures",
    text: "The people of Anambra State are perhaps its most outstanding assets and the reason why the State is regarded as 'The Light of the Nation, Nigeria'. The history of Africa and indeed the entire black race can never be told without the mention of outstanding sons and daughters of Anambra like: The great 'Zik of Africa', Rt. Hon. Dr. Nnamdi Azikiwe, who played a key role in the emancipation of Africa and who is one of the founders of modern Nigeria; Sir Louis Philippe Odumegwu-Ojukwu, one of Africa's earliest millionaires; Chief Mrs Margaret Ekpo (Margaret Obiasulor), Nigeria's pioneer female politician, activist and leader; Professor Chinua Achebe, novelist, poet, professor and critic, whose first novel, \"Things Fall Apart\", is considered the most widely read book in modern African Literature. The never-ending list includes the First African Secretary-General of the Commonwealth, Chief Emeka Anyaoku; fiery pre and post-independence politicians like Chief Mbazulike Amaechi and Chief Mokwugo Okoye; and the First Vice President of the Federal Republic of Nigeria, Dr Alex Ekwueme, to mention but a few.Indeed, there is at least one 'Onye Anambra' in the top ten bracket of any area of human endeavor.",
  },
];

const scrollableImages = [
  "/images/anambra_landmark1.jpg",
  "/images/anambra_landmark2.jpg",
  "/images/anambra_landmark3.jpg",
];

export default function Anambra() {
  const [activeTab, setActiveTab] = useState("About State");

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="mt-[50px] mb-[70px] text-[40px] font-bold text-black mb-6 text-center">
        Welcome To Anambra
      </h2>

      {/* Top Navigation Tabs */}
      {/* <div className="flex flex-wrap justify-center gap-8 sm:gap-10 border-b border-gray-200 mb-10 px-6 pb-4">
        {topTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "pb-2 text-sm sm:text-base font-bold transition",
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-800 hover:text-blue-600"
            )}
          >
            {tab}
          </button>
        ))}
      </div> */}
      <TopTabs />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-2">
          <div className="flex flex-col border rounded-md overflow-hidden">
            {sidebarLinks.map((link, idx) => (
              <button
                key={idx}
                className="py-3 px-4 border-b last:border-none text-left text-sm hover:bg-gray-100"
              >
                {link}
              </button>
            ))}
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="md:col-span-10 space-y-12">
          {/* Section 1: Text Left / Image Right */}
          <div className="grid md:grid-cols-2 gap-6  items-start">
            <div>
              <h3 className="inline-block text-sm font-semibold text-[#CB681C] bg-[#CB681C]/20 px-4 py-2 rounded">
                History
              </h3>
              <p className="text-gray-700">
                Anambra is a state of rich history and great myths. Created on
                August 27, 1991, by the then Military President Ibrahim
                Babangida GCFR, the state derives its name from Anambra River,
                which is a colonial convenient pronunciation of Omambala River.
                The River Anambra is a tributary of the majestic River Niger.
              </p>
              <p className="text-gray-700">
                The diverse perspectives to the origin of Anambra and Ndi
                Anambra are as mythical as the great people. Ndi Anambra are
                among the first set of God's creation on Earth, who migrated
                from the cradle of human civilization to their present location.
                Their history is strongly linked to the history of the entire
                Igboland, as Ndi Anambra are perceived as the source of Igbo
                Civilization.
              </p>
              <p className="text-gray-700">
                Archaeological findings confirm their existence dates as far
                back as 4500BC, with evidence unearthed in various locations in
                the state, including Igbo Ukwu, Aguleri, Awka, Ezira and Nri.
              </p>
            </div>
            <Image
              src="/images/history.png"
              width={436}
              height={254}
              alt="Anambra"
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* Section 2: Image Left / Text Right */}
          <div className="grid md:grid-cols-2 gap-6  py-[40px] items-start">
            <Image
              src="/images/geography.png"
              width={436}
              height={254}
              alt="Anambra"
              className="rounded-md w-full h-auto"
            />
            <div>
              <h3 className="inline-block text-sm font-semibold text-[#CB681C] bg-[#CB681C]/20 px-4 py-2 rounded">
                Geography
              </h3>
              <p className="text-gray-700">
                The natural features of Hills, Lakes, Caves, Forests, and table
                Savannah land form the beautiful landscapes of Anambra State.
                Situated on a rolling flat savannah land, dotted by Hills,
                Lakes, Forests, and caves on the eastern plains of the River
                Niger, Anambra State covers an area of 4,416sq kilometers with
                rainforest vegetation, humid climate, a temperature of about
                87°F, and rainfall of between 152cm and 203cm.
              </p>
              <p className="text-gray-700">
                Anambra State shares boundaries with Abia, Delta, Enugu, Imo,
                and Kogi States making it one of the few states in the country
                with many neighbors.
              </p>
            </div>
          </div>

          {/* Section 3: Text Left / Image Right */}
          <div className="grid md:grid-cols-2 gap-6 py-[40px] items-start">
            <div>
              <h3 className="inline-block text-sm font-semibold text-[#CB681C] bg-[#CB681C]/20 px-4 py-2 rounded">
                Economy
              </h3>
              <p className="text-gray-700">
                With a booming commerce hub and industrial activity, Anambra
                drives significant growth in Nigeria's economy. The state is
                known for its thriving markets, industries, and manufacturing
                sectors.
              </p>
            </div>
            <Image
              src="/images/economy.png"
              width={436}
              height={254}
              alt="Anambra"
              className="rounded-md w-full h-auto"
            />
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold">6M+</h3>
              <p className="text-sm text-gray-600">Beautiful People</p>
            </div>
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold">4416</h3>
              <p className="text-sm text-gray-600">Sq Km Land Area</p>
            </div>
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold">21</h3>
              <p className="text-sm text-gray-600">Local Gov't Areas</p>
            </div>
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm text-gray-600">Festivals Yearly</p>
            </div>
          </div>

          {/* More Paragraphs */}
          {moreParagraphs.map((para, idx) => (
            <div key={idx}>
              <h3 className="inline-block text-sm font-semibold text-[#CB681C] bg-[#CB681C]/20 px-4 py-2 rounded">
                {para.title}
              </h3>
              <p className="text-gray-700 text-sm">{para.text}</p>
            </div>
          ))}

          {/* Final Paragraph with Scrollable Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {/* Scrollable Image Cards */}
            {scrollableImages.map((src, idx) => (
              <div
                key={`scroll-${idx}`}
                className="rounded-md overflow-hidden hover:shadow-md transition"
              >
                <Image
                  src={src}
                  alt={`Landmark ${idx + 1}`}
                  width={340}
                  height={200}
                  className="w-full h-52 object-cover rounded-md"
                />
                <div className="pt-4 pb-4 px-4">
                  <h3 className="text-[20px] font-semibold leading-[28px] mb-2 text-gray-900">
                    Landmark {idx + 1}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-gray-700">
                    Description of landmark {idx + 1} goes here.
                  </p>
                </div>
              </div>
            ))}

            {/* Static 2-Column Card */}
            <div className="rounded-md overflow-hidden hover:shadow-md transition md:col-span-2">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="pt-4 pb-4 px-4">
                  <h3 className="inline-block text-sm font-semibold text-[#CB681C] bg-[#CB681C]/20 px-4 py-2 rounded mb-4">
                    Economy
                  </h3>
                  <p className="text-[14px] leading-[22px] text-gray-700">
                    With a booming commerce hub and industrial activity, Anambra
                    drives significant growth in Nigeria's economy. The state is
                    known for its thriving markets, industries, and
                    manufacturing sectors.
                  </p>
                </div>
                <Image
                  src="/images/economy.png"
                  width={436}
                  height={254}
                  alt="Anambra"
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
