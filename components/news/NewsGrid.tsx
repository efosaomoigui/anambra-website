// components/news/NewsGrid.tsx
import NewsCard from "./NewsCard";

const mockNews = [
  {
    title: "Governor Commissions New Hospital",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Health", "State"],
    imageUrl: "/images/soludo2.png",
    slug: "governor-commissions-new-hospital",
  },
  {
    title: "Inter-School Sports Festival",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Sport", "LGA"],
    imageUrl: "/images/soludo1.png",
    slug: "inter-school-sports-festival",
  },
  {
    title: "Education Week Launched",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Education", "State"],
    imageUrl: "/images/soludo2.png",
    slug: "education-week-launched",
  },
  {
    title: "MDA Collaboration Summit",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["MDA", "Events"],
    imageUrl: "/images/soludo1.png",
    slug: "mda-collaboration-summit",
  },
  {
    title: "Rural Health Outreach",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Health", "LGA"],
    imageUrl: "/images/soludo2.png",
    slug: "rural-health-outreach",
  },
  {
    title: "Youth Football Championship",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Sport", "Events"],
    imageUrl: "/images/soludo1.png",
    slug: "youth-football-championship",
  },
  {
    title: "State Budget Town Hall",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["State"],
    imageUrl: "/images/soludo2.png",
    slug: "state-budget-town-hall",
  },
  {
    title: "LGA Waste Management Launch",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["LGA", "Events"],
    imageUrl: "/images/soludo1.png",
    slug: "lga-waste-management-launch",
  },
  {
    title: "School Renovations Underway",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Education", "State"],
    imageUrl: "/images/soludo2.png",
    slug: "school-renovations-underway",
  },
  {
    title: "State Marathon Announced",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Sport", "State"],
    imageUrl: "/images/soludo1.png",
    slug: "state-marathon-announced",
  },
  {
    title: "Digital Transformation Drive",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["MDA", "Education"],
    imageUrl: "/images/soludo2.png",
    slug: "digital-transformation-drive",
  },
  {
    title: "Free Eye Test Campaign",
    summary:
      "Soludo’s new executive order specifies number of police checkpoints per sq km. 2",
    tags: ["Health", "Events"],
    imageUrl: "/images/soludo1.png",
    slug: "free-eye-test-campaign",
  },
];

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockNews.map((news) => (
        <NewsCard key={news.slug} {...news} />
      ))}
    </div>
  );
}
