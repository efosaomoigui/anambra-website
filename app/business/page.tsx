// app/business/page.tsx or components/BusinessPage.tsx

"use client";

import HeadingSection from "@/components/business/HeadingSection";
import OverviewSection from "@/components/business/OverviewSection";
import RequirementsSection from "@/components/business/RequirementsSection";
import StimulatorsSection from "@/components/business/StimulatorsSection ";
import MdaProcessesSection from "@/components/business/MdaProcessesSection";

export default function BusinessPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* 1. Heading and Links */}
      <HeadingSection />

      {/* 2. Overview */}
      <OverviewSection />

      {/* 3. Business Stimulators */}
      <StimulatorsSection />

      {/* 4. Requirements */}
      <RequirementsSection />

      {/* 5. MDA Processes */}
      <MdaProcessesSection />
    </div>
  );
}
