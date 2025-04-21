import EventRow from "@/components/events/EventRow";

const events = [
  {
    title: "Governor's Inaugural Speech",
    summary:
      "The newly elected governor will deliver an address on plans and future vision.",
    date: "Tue, 4 Feb 2025  3:45 PM",
    location: "Government House",
    slug: "governors-inaugural-speech",
    image: "/images/events/speech.jpg",
  },
  {
    title: "Health Awareness Walk",
    summary: "Join the state-wide fitness and health walk to promote wellness.",
    date: "Sat, 15 Mar 2025  7:00 AM",
    location: "Awka Stadium",
    slug: "health-awareness-walk",
    image: "/images/events/health-walk.jpg",
  },
  {
    title: "Education Fair",
    summary:
      "Explore opportunities in Anambra’s educational sector at this vibrant expo.",
    date: "Wed, 22 May 2025  10:00 AM",
    location: "Chukwuemeka Odumegwu University Grounds",
    slug: "education-fair",
    image: "/images/events/education-fair.jpg",
  },
];

export default function EventsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-[50px] pb-20">
      <h1 className="mt-[50px] text-3xl font-bold text-center mb-12">
        Upcoming Events
      </h1>
      {events.map((event) => (
        <EventRow key={event.slug} {...event} />
      ))}
    </main>
  );
}
