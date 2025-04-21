// components/faq/FAQComponent.tsx

import Link from "next/link";

export default function FAQComponent() {
  return (
    <section className="px-4 md:px-20 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-black">FAQs</h2>
      </div>

      <div className="overflow-x-auto mb-10">
        <div className="flex gap-6 w-max">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[300px] bg-[#F1F5F9] p-6 rounded-lg shadow-md relative flex flex-col justify-between"
            >
              <p className="text-sm text-black mb-8">
                This is a short answer to FAQ {idx + 1}. It briefly addresses a
                common question users might have.
              </p>

              <div className="flex justify-between mt-auto pt-4 text-xs text-gray-600">
                <span>Read More</span>
                <span>Share</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button */}
      <div className="text-center">
        <Link
          href="/faq"
          className="inline-block px-6 py-2 rounded-full bg-[#FFFFFF] text-gray-700 text-sm font-medium hover:bg-gray-300 transition"
        >
          View All FAQs
        </Link>
      </div>
    </section>
  );
}
