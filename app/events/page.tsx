// import Image from "next/image";

// const events = [
//   {
//     title: "Governor's Inaugural Speech",
//     summary:
//       "A government-organized conference aimed at empowering young programmers with the skills, knowledge, and opportunities to thrive in the tech industry.",
//     date: "Tue, 4 Feb 2025  3:45 PM",
//     location: "Government House, Aroma, Awka.",
//     slug: "governors-inaugural-speech",
//     image: "/images/8970.png",
//   },
//   {
//     title: "Health Awareness Walk",
//     summary:
//       "A government-organized conference aimed at empowering young programmers with the skills, knowledge, and opportunities to thrive in the tech industry.",
//     date: "Sat, 15 Mar 2025  7:00 AM",
//     location: "Awka Stadium",
//     slug: "health-awareness-walk",
//     image: "/images/8970.png",
//   },
//   {
//     title: "Education Fair",
//     summary:
//       "A government-organized conference aimed at empowering young programmers with the skills, knowledge, and opportunities to thrive in the tech industry.",
//     date: "Wed, 22 May 2025  10:00 AM",
//     location: "Chukwuemeka Odumegwu University Grounds",
//     slug: "education-fair",
//     image: "/images/8970.png",
//   },
// ];

// export default function EventsPage() {
//   return (
//     <main className="max-w-6xl mx-auto px-4 pt-[50px] pb-20">
//       <h1 className="mt-[50px] text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center mb-12">
//         Events
//       </h1>

//       <div className="space-y-12 flex justify-center">
//         <div className="w-full max-w-screen-lg mx-auto">
//           {events.map((event) => (
//             <div
//               key={event.slug}
//               className="grid grid-cols-1 md:grid-cols-[325px_auto] gap-6 items-start justify-center mb-8"
//             >
//               {/* Left: Image */}
//               <div className="w-full h-[229px] md:h-[260px] relative rounded-lg overflow-hidden">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>

//               {/* Right: Text */}
//               <div className="flex flex-col justify-start h-full pt-0 space-y-4 max-w-[500px]">
//                 {/* Heading + Summary */}
//                 <div>
//                   <h1 className="text-2xl md:text-[20px] font-bold">
//                     {event.title}
//                   </h1>
//                   <p className="text-[17px] text-gray-700">{event.summary}</p>
//                 </div>

//                 {/* Date + Location + Button */}
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                   <div className="text-[17px] text-gray-600 space-y-1">
//                     <p className="font-semibold">{event.date}</p>
//                     <p className="font-semibold">{event.location}</p>
//                   </div>
//                   <button className="bg-[#FFB732] text-[17px] text-black font-semibold flex items-center justify-center gap-2 px-4 py-2 rounded-[8px] whitespace-nowrap w-[163px] h-[40px] sm:w-auto">
//                     View Details
//                     <Image
//                       src="/images/arrowup.png"
//                       alt="Arrow"
//                       width={18}
//                       height={18}
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { fetchAllEvents } from "@/lib/clients/event.client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getEvents();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 pt-[50px] pb-20">
      <h1 className="mt-[50px] text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center mb-12">
        Events
      </h1>

      <div className="space-y-12 flex justify-center">
        <div className="w-full max-w-screen-lg mx-auto">
          {events.map((event: any) => {
            const imageUrl = event.cover?.url
              ? event.cover.url.startsWith("http")
                ? event.cover.url
                : `${process.env.NEXT_PUBLIC_API_BASE_URL}${event.cover.url}`
              : "/images/placeholder.png";

            const detailSlug = event.slug || event.documentId;

            return (
              <div
                key={detailSlug}
                className="grid grid-cols-1 md:grid-cols-[325px_auto] gap-6 items-start justify-center mb-8"
              >
                {/* Left: Image */}
                <div className="w-full h-[229px] md:h-[260px] relative rounded-lg overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Right: Text */}
                <div className="flex flex-col justify-start h-full pt-0 space-y-4 max-w-[500px]">
                  <div>
                    <h1 className="text-2xl md:text-[20px] font-bold">
                      {event.title}
                    </h1>
                    <p className="text-[17px] text-gray-700">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-[17px] text-gray-600 space-y-1">
                      <p className="font-semibold">
                        {event.date} {event.time}
                      </p>
                      <p className="font-semibold">{event.location}</p>
                    </div>

                    <button
                      onClick={() => router.push(`/events/${detailSlug}`)}
                      className="bg-[#FFB732] text-[17px] text-black font-semibold flex items-center justify-center gap-2 px-4 py-2 rounded-[8px] whitespace-nowrap w-[163px] h-[40px] sm:w-auto"
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
            );
          })}
        </div>
      </div>
    </main>
  );
}
