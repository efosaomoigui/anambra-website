export default function LatestNews() {
  return (
    <section className="px-4 md:px-20 py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="space-y-4">
            <img
              src={`/images/news-${idx + 1}.jpg`}
              alt={`News ${idx + 1}`}
              style={{ width: "381.33px", height: "217px", objectFit: "cover" }}
              className="rounded-lg mx-auto"
            />
            <h4 className="text-xl font-black text-black">
              News Headline {idx + 1}
            </h4>
            <p className="text-sm text-gray-700">
              This is a summary of the news article. It gives a quick overview
              of the topic and what to expect in the full post.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
