// app/news/[slug]/page.tsx
import Image from "next/image";

export default function NewsDetailPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Tags */}
      <div className="flex gap-2">
        <span className="bg-gray-100 text-gray-700 text-sm rounded px-3 py-1">
          Health
        </span>
        <span className="bg-gray-100 text-gray-700 text-sm rounded px-3 py-1">
          State
        </span>
      </div>

      {/* Summary */}
      <h2 className="text-2xl font-semibold">
        A new state-of-the-art hospital has been opened in Awka.
      </h2>

      {/* Image */}
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image src="/news1.jpg" alt="Hospital" fill className="object-cover" />
      </div>

      {/* Full Content */}
      <div className="prose max-w-none">
        <p>
          The Anambra State Government has completed the construction of a new
          hospital located in Awka. This initiative aims to improve access to
          quality healthcare in the region.
        </p>
        <p>
          The Governor emphasized the importance of community health during the
          opening ceremony, citing ongoing improvements in medical
          infrastructure across the state.
        </p>
      </div>
    </main>
  );
}
