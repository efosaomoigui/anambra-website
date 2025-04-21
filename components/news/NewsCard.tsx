// components/news/NewsCard.tsx
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  title: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

export default function NewsCard({
  title,
  summary,
  tags,
  imageUrl,
  slug,
}: NewsCardProps) {
  return (
    <Link
      href={`/news/${slug}`}
      className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
    >
      <div className="relative w-full h-52">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        {/* Tags */}
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 text-xs rounded px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Summary */}
        <h3 className="text-base font-semibold">{summary}</h3>
      </div>
    </Link>
  );
}
