"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  { name: "About State", href: "/anambra" },
  { name: "Past Governors", href: "/anambra/past-governors" },
  { name: "Key Landmarks", href: "/anambra/key-landmarks" },
];

const TopTabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center flex-wrap gap-x-10 gap-y-4 border-b border-gray-200 pb-6 mb-12">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={clsx(
            "text-lg font-bold transition-all tracking-wide",
            pathname === tab.href
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-gray-700 hover:text-blue-600"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default TopTabs;
