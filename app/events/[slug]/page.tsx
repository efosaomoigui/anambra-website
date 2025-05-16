import { fetchEventById } from "@/lib/clients/event.client";
import { notFound } from "next/navigation";

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log("Event detail page: documentId", slug);

  const event = await fetchEventById(slug);

  if (!event) {
    return notFound();
  }

  // Use link as the fallback for the image
  const imageUrl = event.link?.startsWith("http")
    ? event.link
    : "/images/placeholder.png";

  return (
    <main className="max-w-4xl mx-auto px-4 pt-[50px] pb-20">
      {/* Image */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-8">
        <img
          src={imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-4">
        {event.title}
      </h1>

      {/* Date & Location */}
      <div className="text-gray-600 mb-6 space-y-1 text-lg">
        <p className="font-semibold">
          {event.date} {event.time && `• ${event.time}`}
        </p>
        {event.location && <p className="font-semibold">{event.location}</p>}
      </div>

      {/* Description */}
      {event.description && (
        <article className="prose prose-lg max-w-none">
          <p>{event.description}</p>
        </article>
      )}
    </main>
  );
}
