// app/news/page.tsx
import NewsGrid from "@/components/news/NewsGrid";
import NewsTabs from "@/components/news/NewsTab";

export default function NewsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 pt-[50px] pb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-[50px]">
        Latest News
      </h1>

      {/* Tabbed filter menu */}
      <NewsTabs />

      {/* News Cards */}
      <NewsGrid />
    </main>
  );
}
