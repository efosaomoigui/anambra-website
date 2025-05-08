import Image from "next/image";

const events = [
  {
    title: "Governor's Inaugural Speech",
    summary:
      "A government-organized conference aimed at empowering young programmers with the skills, knowledge, and opportunities to thrive in the tech industry.",
    date: "Tue, 4 Feb 2025  3:45 PM",
    location: "Government House, Aroma, Awka.",
    slug: "governors-inaugural-speech",
    image: "/images/8970.png",
  },
  {
    title: "Health Awareness Walk",
    summary:
      "A government-organized conference aimed at empowering young programmers with the skills, knowledge, and opportunities to thrive in the tech industry.",
    date: "Sat, 15 Mar 2025  7:00 AM",
    location: "Awka Stadium",
    slug: "health-awareness-walk",
    image: "/images/8970.png",
  },
  {
    title: "Education Fair",
    summary:
      "A government-organized conference aimed at empowering young programmers with the skills, knowledge, and opportunities to thrive in the tech industry.",
    date: "Wed, 22 May 2025  10:00 AM",
    location: "Chukwuemeka Odumegwu University Grounds",
    slug: "education-fair",
    image: "/images/8970.png",
  },
];

export default function EventsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-[50px] pb-20">
      <h1 className="mt-[50px] text-3xl font-bold text-center mb-12">
        Upcoming Events
      </h1>

      <div className="space-y-12">
        {events.map((event) => (
          <div
            key={event.slug}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center" // Aligning content center
          >
            {/* Left: Image */}
            <div className="w-full h-[229px] md:h-[260px] relative rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right: Text */}
            <div className="flex flex-col justify-start h-full pt-0 space-y-4">
              {/* Added spacing for consistent alignment */}
              {/* Heading + Summary */}
              <div>
                <h1 className="text-2xl md:text-[20px] font-bold">
                  {event.title}
                </h1>
                <p className="text-[17px] text-gray-700">{event.summary}</p>
              </div>

              {/* Date + Location + Button */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="text-[17px] text-gray-600 space-y-1">
                  <p className="font-semibold">{event.date}</p>
                  <p className="font-semibold">{event.location}</p>
                </div>
                <button
                  className="bg-[#FFB732] text-[17px] text-black font-semibold flex items-center justify-center gap-2 px-4 py-2 rounded-[8px]"
                  style={{ height: 40, width: 163 }}
                >
                  View Details
                  <Image
                    src="/images/arrowup.png"
                    alt="Arrow"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
