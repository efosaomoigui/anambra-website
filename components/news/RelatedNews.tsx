// components/news/RelatedNews.tsx
import NewsCard from "./NewsCard";

const relatedNews = [
  {
    title: "Free Eye Test Campaign",
    summary: "Citizens benefit from MDA health outreach.",
    tags: ["Health", "Events"],
    imageUrl: "/images/soludo1.png",
    slug: "free-eye-test-campaign",
  },
  {
    title: "School Renovations Underway",
    summary: "10 government schools undergoing upgrades.",
    tags: ["Education", "State"],
    imageUrl: "/images/soludo2.png",
    slug: "school-renovations-underway",
  },
  {
    title: "State Marathon Announced",
    summary: "Anambra to host annual state-wide marathon.",
    tags: ["Sport", "State"],
    imageUrl: "/images/soludo1.png",
    slug: "state-marathon-announced",
  },
];

export default function RelatedNews() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-8">Related News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedNews.map((news) => (
          <NewsCard key={news.slug} {...news} />
        ))}
      </div>
    </section>
  );
}
