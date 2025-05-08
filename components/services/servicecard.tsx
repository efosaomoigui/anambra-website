"use client";

import Link from "next/link";

type Props = {
  title: string;
  slug: string;
};

export default function ServiceCard({ title, slug }: Props) {
  const iconName =
    title
      .toLowerCase()
      .replace(/’/g, "")
      .replace(/[&,:]/g, "")
      .replace(/\s+/g, " ")
      .trim() + ".png";

  const iconPath = `/images/icons/${iconName}`;

  return (
    <Link href={`/services/${slug}`}>
      <div className="border border-gray-200 bg-white rounded-xl flex flex-col p-4 items-center text-center transition">
        <div className="w-[74px] h-[74px] mb-4">
          <img
            src={iconPath}
            alt={title}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-xs text-gray-500 px-1 leading-relaxed">
          This service helps you manage your {title.toLowerCase()} needs quickly
          and efficiently through our digital platform.
        </p>
      </div>
    </Link>
  );
}
