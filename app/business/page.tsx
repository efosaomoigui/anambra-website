// app/business/page.tsx or components/BusinessPage.tsx

"use client";

import HeadingSection from "@/components/business/HeadingSection";
import OverviewSection from "@/components/business/OverviewSection";
import RequirementsSection from "@/components/business/RequirementsSection";
import StimulatorsSection from "@/components/business/StimulatorsSection ";
import MdaProcessesSection from "@/components/business/MdaProcessesSection";

export default function BusinessPage() {
  return (
    <>
      {/* HeadingSection without container wrapper */}
      <HeadingSection />

      {/* Container for rest of content */}
      <div className="w-full">
        <OverviewSection />
        <StimulatorsSection />
        <RequirementsSection />
        <MdaProcessesSection />
      </div>
    </>
  );
}
