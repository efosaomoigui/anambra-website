import { useState } from "react";
import clsx from "clsx";

const sections = [
  "Overview",
  "Business Stimulators",
  "Requirements",
  "MDA Processes",
  "Contact",
];

export default function HeadingSection() {
  const [selectedSection, setSelectedSection] = useState("Overview");

  const handleScrollTo = (id: string) => {
    setSelectedSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full  py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[40px] font-bold text-black">
          Guide to Starting Business in Anambra state
        </h1>
        <div className="mt-9 w-full h-12 bg-[#F0F0F0] mb-4 overflow-x-auto scrollbar-none">
          <div className="flex justify-center h-full gap-12 min-w-max mx-auto px-6 whitespace-nowrap">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScrollTo(section.replace(/\s+/g, ""))}
                className={clsx(
                  "text-sm sm:text-base font-semibold border-b-2 transition duration-200",
                  selectedSection === section
                    ? "text-black border-black"
                    : "text-black border-transparent hover:text-black hover:border-black"
                )}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
