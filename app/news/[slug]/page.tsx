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
    title: "Inter-School Sports Festival",
    summary: "Students across LGAs compete in a grand sports event.",
    content: "Full content of the article goes here...",
    imageUrl: "/news2.jpg",
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
