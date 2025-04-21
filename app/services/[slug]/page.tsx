// app/services/[slug]/page.tsx

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // fake title from slug
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="max-w-4xl mx-auto px-4 pt-[50px] pb-20">
      {/* Heading */}
      <h1 className="mt-[50px] text-3xl font-bold text-center mb-8">{title}</h1>

      {/* Image banner */}
      <img
        src="/services-banner.jpg"
        alt="Service banner"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Action Links */}
      <div className="flex justify-between text-sm mb-6">
        <a href="#" className="text-blue-600 hover:underline">
          More Info
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Download Form
        </a>
      </div>

      {/* Content */}
      <div className="prose max-w-none">
        <p>
          This service allows you to {title.toLowerCase()}. Instructions,
          requirements, and downloadable forms will be provided here for the
          applicant’s use.
        </p>
        <p>
          You may visit the nearest government center for in-person support or
          apply online if the service is digitized.
        </p>
      </div>
    </main>
  );
}
