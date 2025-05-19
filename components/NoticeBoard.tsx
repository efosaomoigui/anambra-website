// components/NoticeBoard.tsx
export default function NoticeBoard() {
  return (
    <section className="px-4 md:px-20 mt-20 py-16 bg-[#F9F9F9]">
      <div className="max-w-[1201px] mx-auto">
        <div className="grid md:grid-cols-11 gap-8">
          {/* Left Column: Notice Board */}
          <div className="md:col-span-6 space-y-4 bg-gradient-to-r from-[#FFC7C3] to-[#FFDEC2] p-8 rounded-[12px]">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/images/icons/notice.svg"
                alt="Notice Icon"
                className="w-10 h-10"
              />
              <h3 className="text-[18px] sm:text-xl font-black text-black">
                Notice Board
              </h3>
            </div>

            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="text-black border-b-[1px] border-b-[rgba(0,0,0,0.1)] pb-4"
              >
                <h3 className="text-[15px] sm:text-lg font-semibold">
                  Soludo’s new executive order specifies number of police
                  checkpoints per sq km. {idx + 1}
                </h3>
                <p className="sm:text-sm text-gray-600 text-[13px]">
                  Dec 04, 2024
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Upcoming Events */}
          <div className="md:col-span-5 space-y-4 bg-[#FFDEC2] p-8 rounded-[12px]">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/images/icons/event.svg"
                alt="Event Icon"
                className="w-10 h-10"
              />
              <h3 className="text-[18px] sm:text-xl font-black text-black">
                Upcoming Events
              </h3>
            </div>

            {/* Main Event */}
            <div className="text-black border-b-[1px] border-b-[rgba(0,0,0,0.1)] pb-6">
              <h3 className="text-[15px] sm:text-lg font-semibold">
                Anambra Developer Summit 2024
              </h3>
              <p className="sm:text-sm text-gray-700 text-[13px] ">
                Feb 4, 2025  — Feb 6, 2025 - 1.00 PM
              </p>
              <p className="text-[13px] sm:text-sm text-gray-700">
                Govt House, Aroma, Awka.
              </p>
            </div>

            {/* Additional Events */}
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="text-black border-b-[1px] border-b-[rgba(0,0,0,0.1)] pb-6"
              >
                <h3 className="text-[15px] sm:text-lg font-semibold">
                  1st International Agrivoltaics Conference in Nigeria {idx + 2}
                </h3>
                <p className="text-[13px] sm:text-sm text-gray-700">
                  Feb 4, 2025  — Feb 6, 2025 · 10.00 AM
                </p>
                <p className="text-[13px] sm:text-sm text-gray-700">
                  Govt House, Aroma, Awka. {idx + 2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
