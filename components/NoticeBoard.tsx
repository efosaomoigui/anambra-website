// components/NoticeBoard.tsx

export default function NoticeBoard() {
  return (
    <section className="px-4 md:px-20 mt-20 py-16 bg-[#F9F9F9]">
      <div className="grid md:grid-cols-11 gap-8">
        {/* Left Column: Notice Board */}
        <div className="md:col-span-6 space-y-4 bg-[#FFDEC2] p-8 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-5 text-black">📢</span>
            <h3 className="text-xl font-black text-black">Notice Board</h3>
          </div>

          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="text-black border-b pb-4">
              <h4 className="text-lg font-black">Notice {idx + 1}</h4>
              <p className="text-sm">
                This is a sample notice for public awareness. Detailed
                information about this notice will be provided.
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Upcoming Events */}
        <div className="md:col-span-5 space-y-4 bg-[#FFDEC2] p-8 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-5 text-black">📅</span>
            <h3 className="text-xl font-black text-black">Upcoming Events</h3>
          </div>

          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="text-black border-b pb-4">
              <h4 className="text-lg font-black">Event {idx + 1}</h4>
              <p className="text-sm">
                Upcoming event description goes here. The event details will
                include date, time, and location.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
