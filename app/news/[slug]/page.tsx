// app/news/[slug]/page.tsx

import RelatedNews from "@/components/news/RelatedNews";

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // fake data for now
  const news = {
    title:
      "Soludo’s new executive order specifies number of police checkpoints per sq km.",
    summary: "Daniel James . 13 Feb 2024 . 3 min read",
    content:
      "Bitcoin, the world’s first and most prominent cryptocurrency, has always had a knack for grabbing headlines. Whether due to its meteoric price rises or sharp corrections, it’s a financial phenomenon that everyone from Wall Street to Main Street has an opinion on. The idea of Bitcoin reaching $100,000 per coin has long been a speculative milestone—one that is now coming into clearer focus as market trends, institutional interest, and macroeconomic conditions align.",
    imageUrl: "/images/checkpoints.png",
    tags: ["Sport", "LGA"],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 pt-[50px] pb-10">
      {/* Tags */}
      <div className="flex gap-2 mb-4">
        {news.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>

      {/* Summary */}
      <p className="text-lg font-semibold text-gray-600 mb-6">{news.summary}</p>

      {/* Image */}
      <img
        src={news.imageUrl}
        alt={news.title}
        className="w-full rounded-lg mb-8"
      />

      {/* Content */}
      <article className="prose prose-lg">
        <p>{news.content}</p>
      </article>

      {/* Related News */}
      <RelatedNews />
    </main>
  );
}
