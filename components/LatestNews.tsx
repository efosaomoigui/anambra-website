import Link from "next/link";

export default function LatestNews() {
  return (
    <section className="px-4 md:px-20 py-16">
      <div className="max-w-[1201px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-black">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_, idx) => (
            <article key={idx} className="space-y-3">
              <div className="w-full h-[217px] overflow-hidden rounded-lg">
                <img
                  src={`/images/news-${idx + 1}.jpg`}
                  alt={`Thumbnail for news article ${idx + 1}`}
                  className="w-full h-full object-cover mx-auto"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 px-1">
                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-[4px]">
                  State
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-[4px]">
                  Security
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-lg font-bold text-black">
                This is a summary of the news article. It gives a quick overview
                of the topic and what to expect in the full post. {idx + 1}
              </h3>

              {/* Date */}
              <time className="text-xs text-gray-500" dateTime="2024-12-04">
                Dec 04, 2024
              </time>
            </article>
          ))}
        </div>

        {/* Centered Button with Image */}
        <div className="text-center mt-8 py-8 md:py-7 px-4">
          <Link
            href="/news"
            className="inline-flex items-center px-6 py-2 rounded-md bg-white border border-gray-700 text-gray-700 text-sm font-semibold leading-6 hover:bg-gray-300 transition"
          >
            View All News
            <img
              src="/images/arrowup.png"
              alt="FAQs"
              className="ml-2 w-5 h-5 object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
