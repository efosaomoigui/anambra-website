// components/news/NewsGrid.tsx
import NewsCard from "./NewsCard";

const mockNews = [
  {
    title: "Governor Commissions New Hospital",
    summary: "A new state-of-the-art hospital has been opened in Awka.",
    tags: ["Health", "State"],
    imageUrl: "/news1.jpg",
    slug: "governor-commissions-new-hospital",
  },
  {
    title: "Inter-School Sports Festival",
    summary: "Students across LGAs compete in a grand sports event.",
    tags: ["Sport", "LGA"],
    imageUrl: "/news2.jpg",
    slug: "inter-school-sports-festival",
  },
  {
    title: "Education Week Launched",
    summary: "Anambra launches a week-long education improvement program.",
    tags: ["Education", "State"],
    imageUrl: "/news3.jpg",
    slug: "education-week-launched",
  },
  {
    title: "MDA Collaboration Summit",
    summary: "MDAs to collaborate on digital service improvements.",
    tags: ["MDA", "Events"],
    imageUrl: "/news4.jpg",
    slug: "mda-collaboration-summit",
  },
  {
    title: "Rural Health Outreach",
    summary: "Medical team reaches out to rural communities.",
    tags: ["Health", "LGA"],
    imageUrl: "/news5.jpg",
    slug: "rural-health-outreach",
  },
  {
    title: "Youth Football Championship",
    summary: "U-17 teams compete in community football challenge.",
    tags: ["Sport", "Events"],
    imageUrl: "/news6.jpg",
    slug: "youth-football-championship",
  },
  {
    title: "State Budget Town Hall",
    summary: "Public participation in upcoming budget planning.",
    tags: ["State"],
    imageUrl: "/news7.jpg",
    slug: "state-budget-town-hall",
  },
  {
    title: "LGA Waste Management Launch",
    summary: "New waste system introduced across all LGAs.",
    tags: ["LGA", "Events"],
    imageUrl: "/news8.jpg",
    slug: "lga-waste-management-launch",
  },
  {
    title: "School Renovations Underway",
    summary: "10 government schools undergoing upgrades.",
    tags: ["Education", "State"],
    imageUrl: "/news9.jpg",
    slug: "school-renovations-underway",
  },
  {
    title: "State Marathon Announced",
    summary: "Anambra to host annual state-wide marathon.",
    tags: ["Sport", "State"],
    imageUrl: "/news10.jpg",
    slug: "state-marathon-announced",
  },
  {
    title: "Digital Transformation Drive",
    summary: "New apps and portals launched by MDA teams.",
    tags: ["MDA", "Education"],
    imageUrl: "/news11.jpg",
    slug: "digital-transformation-drive",
  },
  {
    title: "Free Eye Test Campaign",
    summary: "Citizens benefit from MDA health outreach.",
    tags: ["Health", "Events"],
    imageUrl: "/news12.jpg",
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
