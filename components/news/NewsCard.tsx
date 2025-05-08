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
    <Link href={`/news/${slug}`} className="block">
      <article className="space-y-3 rounded-lg overflow-hidden transition p-3">
        {/* Image */}
        <div className="w-full h-[217px] overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover mx-auto"
          />
        </div>

        {/* Tags */}
        <div className="flex gap-2 px-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#DADADA] text-gray-800 text-xs font-medium px-3 py-1 rounded-[4px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h3 className="text-lg font-bold text-black">{summary}</h3>

        {/* Date */}
        <time
          className="text-xs text-gray-500"
          dateTime={new Date().toISOString()}
        >
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </time>
      </article>
    </Link>
  );
}
