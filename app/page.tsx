import Hero from "../components/Hero";
import LightSection from "../components/LightSection";
import NoticeBoard from "../components/NoticeBoard";
import LatestNews from "../components/LatestNews";
import FAQComponent from "../components/FAQComponent";
import InterfaceWithGovernment from "../components/InterfaceWithGovernment";
import { fetchHomepageData } from "@/lib/clients/homepage.client";

export default async function Home() {
  const homepage = await fetchHomepageData();

  const allArticles = homepage.News_Articles_Grid.selected_category.flatMap(
    (category) =>
      category.articles.map((article) => ({
        ...article,
        categoryName: category.name,
      }))
  );

  const { faqs } = homepage.FAQ_Section;

  return (
    <>
      <Hero />
      <LightSection />
      <NoticeBoard />
      <InterfaceWithGovernment />
      <LatestNews articles={allArticles} />
      <FAQComponent faqs={faqs} />
    </>
  );
}
