// components/services/ServiceCard.tsx
import Link from "next/link";
import { BriefcaseIcon } from "lucide-react";

export default function ServiceCard({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="border rounded-lg p-6 text-center hover:shadow-lg transition"
    >
      <div className="flex justify-center mb-4">
        <BriefcaseIcon className="h-10 w-10 text-gray-500" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>The content for this icon</p>
    </Link>
  );
}
